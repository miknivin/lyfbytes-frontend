import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser, setIsAuthenticated } from "../../store/features/userSlice";
import { frontendAuth } from "../../../firebase.config";
import { useGoogleSignInMutation } from "../../store/api/authApi";
interface GoogleSigninButtonProps {
  onSuccess?: () => void;
  setShowLoginModal: (show: boolean) => void;
  setShowRegisterModal: (show: boolean) => void;
}

const GoogleSigninButton: React.FC<GoogleSigninButtonProps> = ({
  onSuccess,
  setShowLoginModal,
  setShowRegisterModal,
}) => {
  const [googleSignIn, { isLoading }] = useGoogleSignInMutation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(frontendAuth, provider);
      const idToken = await result.user.getIdToken();
      const userData: {
        idToken: string;
        email: string | null;
        displayName: string | null;
        uid: string;
        photoURL: string | null;
      } = {
        idToken,
        email: result.user.email,
        displayName: result.user.displayName,
        uid: result.user.uid,
        photoURL: result.user.photoURL,
      };
      const response = await googleSignIn(userData).unwrap();

      // Handle success logic
      if (response.token) {
        dispatch(
          setUser({
            id: response._id,
            name: response.name,
            email: response.email,
          })
        );
        dispatch(setIsAuthenticated(true));
        toast.success("Login Successful");
        setShowLoginModal(false);
        if (setShowRegisterModal) {
          setShowRegisterModal(false);
        }
        if (onSuccess) {
          onSuccess();
        }
        navigate("/my-account");
      } else {
        toast.error("Google Sign-in failed - invalid response");
      }

      // Check query parameter for checkout navigation (from previous version)
      const toCheckout = searchParams.get("toCheckout");
      if (toCheckout === "proceeding") {
        navigate("/checkout");
        console.log("Navigating to checkout");
      }
    } catch (error: any) {
      console.error("Google Sign-in failed:", error);
      toast.error(
        error.data?.message || "Google sign-in failed. Please try again."
      );
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      disabled={isLoading}
      className="btn btn-danger-theme"
    >
      {isLoading ? (
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
      ) : (
        <i className="fab fa-google me-2"></i>
      )}
      Google
    </button>
  );
};

export default GoogleSigninButton;
