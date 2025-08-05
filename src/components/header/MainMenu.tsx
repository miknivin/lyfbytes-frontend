/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { FaUser, FaPhone } from "react-icons/fa"; // Import icons from react-icons

interface DataType {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu: React.FC<DataType> = ({ navbarPlacement, toggleSubMenu }) => {
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
      </ul>
    </>
  );
};

export default MainMenu;
