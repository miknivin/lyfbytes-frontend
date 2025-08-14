import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { RootState } from "../../store/store"; // Adjust path as needed

export default function MyAccount() {
  let { user, isAuthenticated } = useSelector(
    (state: RootState) => state.user
  );
  // Fallback to localStorage if Redux user is missing
  if (!user && typeof window !== "undefined") {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      user = JSON.parse(userStr);
    }
  }
  const navigate = useNavigate();
  const [initialCheckComplete, setInitialCheckComplete] = useState(false);

  useEffect(() => {
    // Only run this effect once when component mounts
    if (!initialCheckComplete) {
      if (isAuthenticated === false) {
        // Changed: redirect when NOT authenticated
        navigate("/"); // Or navigate to "/login" if you have a login page
      }
      setInitialCheckComplete(true);
    }
  }, [isAuthenticated, navigate, initialCheckComplete]);

  // Show loading state while checking auth
  if (!initialCheckComplete) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Final fallback if somehow we get here unauthenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="my-account-content account-dashboard">
      <div className="about-style-one-area">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="about-style-one-info">
              <h4 className="sub-heading">Welcome</h4>
              <h2 className="title">Hello, {user?.name || "User"}</h2>
              <section className="mb-8">
                <p>
                  From your account dashboard, you can view your{" "}
                  <Link className="text-blue-600 hover:underline" to="/orders">
                    recent orders
                  </Link>
                  {/* , manage your{" "}
                  <Link
                    className="text-blue-600 hover:underline"
                    to="/my-account-address"
                  >
                    shipping and billing addresses
                  </Link> */}{" "}
                  and{" "}
                  <Link className="text-blue-600 hover:underline" to="/profile">
                    edit your account details
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
