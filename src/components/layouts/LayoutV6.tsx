import { NavLink, useNavigate } from "react-router-dom"; // Add useNavigate
import BreadCrumb from "../breadCrumb/BreadCrumb";
import FooterV1 from "../footer/FooterV1";
import HeaderV2 from "../header/HeaderV2";
import { useLogoutMutation } from "../../store/api/authApi"; // Import the logout mutation hook

interface LayoutProps {
  children?: React.ReactNode;
  breadCrumb?: string;
  title?: string;
}

const LayoutV6 = ({ children, breadCrumb, title }: LayoutProps) => {
  const navigate = useNavigate(); // For redirecting after logout
  const [logout, { isLoading }] = useLogoutMutation(); // Use the logout mutation hook

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap(); // Trigger the logout mutation
      navigate("/"); // Redirect to homepage or login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <HeaderV2 />
      {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
      <div className="container-fluid min-vh-100 bg-light pt-10">
        <div className="row pt-10">
          {/* Sidebar Menu - col-4 on md and up, col-12 on mobile */}
          <div className="col-12 col-md-3 bg-white shadow p-3 overflow-auto">
            <nav className="d-flex flex-row flex-md-column gap-2">
              <NavLink
                to="/my-account"
                className={({ isActive }) =>
                  `p-2 text-decoration-none rounded ${
                    isActive
                      ? "bg-danger text-white"
                      : "border border-danger text-dark bg-transparent hover-bg-light"
                  }`
                }
              >
                Dashboard Home
              </NavLink>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `p-2 text-decoration-none rounded ${
                    isActive
                      ? "bg-danger text-white"
                      : "border border-danger text-dark bg-transparent hover-bg-light"
                  }`
                }
              >
                Order
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `p-2 text-decoration-none rounded ${
                    isActive
                      ? "bg-danger text-white"
                      : "border border-danger text-dark bg-transparent hover-bg-light"
                  }`
                }
              >
                Account details
              </NavLink>
              {/* Replace NavLink with a button for logout */}
              <button
                onClick={handleLogout}
                disabled={isLoading}
                className={`p-2 text-decoration-none rounded border border-danger text-dark bg-transparent hover-bg-light text-start w-100 ${
                  isLoading ? "opacity-50" : ""
                }`}
              >
                {isLoading ? "Logging out..." : "Logout"}
              </button>
            </nav>
          </div>
          {/* Main Content - col-8 on md and up, col-12 on mobile */}
          <div className="col-12 col-md-9 p-3 overflow-auto">{children}</div>
        </div>
      </div>
      <FooterV1 />
    </>
  );
};

export default LayoutV6;