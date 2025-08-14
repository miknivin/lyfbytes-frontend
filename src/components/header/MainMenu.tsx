/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaUser, FaPhone, FaChevronDown } from "react-icons/fa";
// Use full API URL for logout
const API_URL = import.meta.env.VITE_API_URL || "";
import axios from "axios";
import { RootState } from "../../store/store";
import { clearUser } from "../../store/features/userSlice";

interface DataType {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  setShowLoginModal?: (show: boolean) => void;
  setShowRegisterModal?: (show: boolean) => void;
}

const MainMenu: React.FC<DataType> = ({ 
  navbarPlacement, 
  toggleSubMenu, 
  setShowLoginModal,
  setShowRegisterModal 
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get authentication state from Redux
  const { isAuthenticated, user } = useSelector((state: RootState) => state.user);

  const handleMyAccountClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate("/my-account");
    } else {
      // Open login modal instead of navigating to login page
      if (setShowLoginModal) {
        setShowLoginModal(true);
      }
    }
  };

  const handleMyOrdersClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate("/orders");
    } else {
      // Open login modal instead of navigating to login page
      if (setShowLoginModal) {
        setShowLoginModal(true);
      }
    }
  };

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      // Use full API URL for logout, matching My Account logic
      axios.post(
        `${API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      )
        .then(() => {
          dispatch(clearUser());
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("token");
          toast.success("Logged out successfully!");
          setTimeout(() => {
            window.location.href = "/";
          }, 300);
        })
        .catch(() => {
          toast.error("Logout failed");
        });
    } else {
      // If not authenticated, open login modal
      if (setShowLoginModal) {
        setShowLoginModal(true);
      }
    }
  };

  return (
    <>
      <ul className={`nav navbar-nav ${navbarPlacement}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/best-sellers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Best Sellers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shipping"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Global Shipping
          </NavLink>
        </li>
        <li className="dropdown">
          <a href="#" onClick={toggleSubMenu}>
            My Account & More <FaChevronDown className="ms-1" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#" onClick={handleMyAccountClick}>
                My Account
              </a>
            </li>
            <li>
              <a href="#" onClick={handleMyOrdersClick}>
                My Orders
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>
                {isAuthenticated ? "Logout" : "Login"}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
