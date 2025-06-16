import { Link } from "react-router-dom";
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
                    <Link to="/" className="active">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About</Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                
            </ul>
        </>
    );
};

export default MainMenu;