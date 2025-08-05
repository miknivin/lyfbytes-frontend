/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../store/api/authApi";
import { setUser } from "../../store/features/userSlice";
import GoogleSigninButton from "./SignInWithGoogle";

interface RegisterModalProps {
  setShowRegisterModal: (show: boolean) => void;
  setShowLoginModal: (show: boolean) => void;
  onRegisterSuccess?: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  setShowRegisterModal,
  setShowLoginModal,
  onRegisterSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [register, { isLoading: isRegisterLoading, error: registerError }] =
    useRegisterMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      const response = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }).unwrap();
      dispatch(
        setUser({
          id: response._id,
          name: response.name,
          email: response.email,
        })
      );
      toast.success("Registration successful!");
      setShowRegisterModal(false);
      if (onRegisterSuccess) {
        onRegisterSuccess();
      }
      const toMyAccount = searchParams.get("toMyAccount");
      if (toMyAccount === "true" && !onRegisterSuccess) {
        setTimeout(() => {
          navigate("/my-account");
        }, 100);
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error.data?.error || "Registration failed");
    }
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowRegisterModal(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Name*"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Email*"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Password*"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Confirm Password*"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />
              </div>
              {registerError && (
                <div className="alert alert-danger">
                  {(registerError as any).data?.message ||
                    "Registration failed"}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isRegisterLoading}
              >
                {isRegisterLoading ? "Registering..." : "Register"}
              </button>
            </form>
            <div className="mt-3 text-center">
              <h6 className="mb-2">Or Register With</h6>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <GoogleSigninButton
                    setShowLoginModal={setShowLoginModal}
                    setShowRegisterModal={setShowRegisterModal}
                    onSuccess={onRegisterSuccess}
                  />
                </li>
                {/* <li className="list-inline-item">
                  <Link to="#" className="btn btn-outline-primary">
                    <i className="fab fa-facebook-f me-2"></i> Facebook
                  </Link>
                </li> */}
              </ul>
              <p className="mt-2">
                Already have an account?{" "}
                <button
                  className="btn btn-link p-0"
                  onClick={() => {
                    setShowRegisterModal(false);
                    setShowLoginModal(true);
                  }}
                >
                  Login Now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
