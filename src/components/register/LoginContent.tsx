import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../store/api/authApi";
import { setUser, setIsAuthenticated } from "../../store/features/userSlice";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const LoginContent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const location = useLocation();
const queryParams = new URLSearchParams(location.search);
    const toMyAccount = queryParams.get("toMyAccount") === "true";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;
    setIsLoading(true);

    try {
      const response = await login({ email, password }).unwrap();

      if (response.success) {
        dispatch(
          setUser({
            id: response?.user?._id,
            name: response.user.name || "",
            email: response.user.email || "",
          })
        );
        dispatch(setIsAuthenticated(true));
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in!",
          confirmButtonColor: "#3085d6",
        });
        if (toMyAccount) {
          navigate("/my-account");
        }
        // If you want to navigate somewhere else if toMyAccount is false, add it here
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text:
            response.error ||
            response.message ||
            "Login failed. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error: any) {
      console.error("Login error:", error);
      const errorMessage =
        error.data?.error ||
        error.data?.message ||
        "Login failed. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
        confirmButtonColor: "#d33",
      });
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
                <h4>Login to your registered account!</h4>
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Email*"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Password*"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-theme effect btn-md"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </button>
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
export default LoginContent;