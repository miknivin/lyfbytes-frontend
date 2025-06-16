import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../store/api/authApi";
import { setUser, setIsAuthenticated } from "../../store/features/userSlice";

interface LoginModalProps {
  setShowLoginModal: (show: boolean) => void;
  setShowRegisterModal: (show: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  setShowLoginModal,
  setShowRegisterModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading: isLoginLoading, error: loginError }] =
    useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login({ email, password }).unwrap();

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
        setTimeout(() => {
          navigate("/my-account");
        }, 0);
      } else {
        toast.error("Login failed - invalid response");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.data?.message || "Login failed");
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
            <h5 className="modal-title">Login</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowLoginModal(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Email*"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Password*"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>
              {loginError && (
                <div className="alert alert-danger">
                  {(loginError as any).data?.message || "Login failed"}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoginLoading}
              >
                {isLoginLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="mt-3 text-center">
              {/* <h6 className="mb-2">Or Login With</h6>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="#" className="btn btn-outline-primary">
                    <i className="fab fa-google me-2"></i> Google
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="btn btn-outline-primary">
                    <i className="fab fa-facebook-f me-2"></i> Facebook
                  </Link>
                </li>
              </ul> */}
              <p className="mt-2">
                Don't have an account?{" "}
                <button
                  className="btn btn-link p-0"
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowRegisterModal(true);
                  }}
                >
                  Register Now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
