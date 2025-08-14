/* eslint-disable no-unused-vars */
import { useState } from "react"; // Add useState import
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaUser, FaPhone, FaChevronDown } from "react-icons/fa";
import { RootState } from "../../store/store";
import { clearUser } from "../../store/features/userSlice";
import axios from "axios";
import { getAuth, signOut } from "firebase/auth"; // Import Firebase auth

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
  setShowRegisterModal,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState(false); // Initialize loading state

  const handleMyAccountClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate("/my-account");
    } else if (setShowLoginModal) {
      setShowLoginModal(true);
    }
  };

  const handleMyOrdersClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate("/orders");
    } else if (setShowLoginModal) {
      setShowLoginModal(true);
    }
  };

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      try {
        setIsLoading(true); // Set loading state
        // Sign out from Firebase
        const auth = getAuth();
        await signOut(auth);

        // Call backend logout endpoint
        await axios.post(
          "/api/auth/logout",
          {},
          {
            withCredentials: true,
          }
        );

        // Clear Redux state
        dispatch(clearUser());

        // Clear localStorage/sessionStorage
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");

        // Show success toast
        toast.success("Logged out successfully");

        // Redirect to home page
        navigate("/");
      } catch (error) {
        toast.error("Logout failed");
        console.error("Logout error:", error);
      } finally {
        setIsLoading(false); // Reset loading state regardless of success or failure
      }
    } else if (setShowLoginModal) {
      setShowLoginModal(true);
    }
  };

  return (
    <>
      <ul className={`nav navbar-nav ${navbarPlacement}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/best-sellers" className={({ isActive }) => (isActive ? "active" : "")}>
            Best Sellers
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/shipping" className={({ isActive }) => (isActive ? "active" : "")}>
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
              <a
                href="#"
                onClick={handleLogout}
                style={{
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
              >
                {isLoading ? "Logging out..." : isAuthenticated ? "Logout" : "Login"}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;