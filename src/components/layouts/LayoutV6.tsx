import { NavLink, useNavigate } from "react-router-dom";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import FooterV1 from "../footer/FooterV1";
import HeaderV2 from "../header/HeaderV2";
import { useLogoutMutation } from "../../store/api/authApi";

interface LayoutProps {
  children?: React.ReactNode;
  breadCrumb?: string;
  title?: string;
}

const LayoutV6 = ({ children, breadCrumb, title }: LayoutProps) => {
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default navigation behavior
    try {
      await logout(undefined).unwrap();
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
            <nav
              style={{ overflowX: "auto" }}
              className="d-flex flex-row flex-md-column gap-2"
            >
              <NavLink
                to="/my-account"
                style={{ whiteSpace: "nowrap" }}
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
                style={{ whiteSpace: "nowrap" }}
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
                style={{ whiteSpace: "nowrap" }}
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
              <NavLink
                to="/logout" // Use a dummy route for consistency
                style={{ whiteSpace: "nowrap" }}
                onClick={handleLogout}
                className={({ isActive }) =>
                  `p-2 text-decoration-none rounded border border-danger text-dark bg-transparent hover-bg-light ${
                    isLoading ? "opacity-50 pointer-events-none" : ""
                  }`
                }
              >
                {isLoading ? "Logging out..." : "Logout"}
              </NavLink>
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
