import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../store/api/authApi";
import { setUser, setIsAuthenticated } from "../../store/features/userSlice";

const RegisterContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await register({ name, email, password }).unwrap();

      if (response.success) {
        dispatch(
          setUser({
            id: response?.user?._id,
            name: response?.user?.name,
            email: response?.user?.email,
          })
        );
        dispatch(setIsAuthenticated(true));
        toast.success("Registration Successful");
        navigate("/my-account");
      } else {
        toast.error(response.error || "Registration failed");
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      const errorMessage =
        error.data?.error ||
        error.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2">
            <form onSubmit={handleSubmit} className="white-popup-block">
              <div className="col-md-8 login-custom">
                <h4>Create your account</h4>
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Name*"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Email*"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Password*"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Confirm Password*"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-theme effect btn-md"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Registering..." : "Register"}
                    </button>
                  </div>
                  <div className="form-group text-center">
                    <p className="link">
                      Already have an account?{" "}
                      <Link to="/login">Login Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterContent;
