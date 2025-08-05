import { Link } from "react-router-dom";

interface DataType {
    navbarPlacement?: string;
    // eslint-disable-next-line no-unused-vars
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenuV2: React.FC<DataType> = ({ navbarPlacement, toggleSubMenu }) => {
    return (
        <>
            <div className="col-half left">
                <ul className={`nav navbar-nav ${navbarPlacement}`}>
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle active" data-toggle="dropdown" onClick={toggleSubMenu}>Home</Link>
                        <ul className="dropdown-menu animated fadeOutUp">
                            <li><Link to="/">Home Version One</Link></li>
                            <li><Link to="/home-2">Home Version Two</Link></li>
                            <li><Link to="/home-3">Home Version Three</Link></li>
                            <li><Link to="/home-4">Home Version Four</Link></li>
                            <li><Link to="/home-5">Home Dark Five</Link></li>
                            <li><Link to="/home-6">Home Dark Six</Link></li>
                            <li className="dropdown">
                                <Link to="#" className="dropdown-toggle dark" data-toggle="dropdown" onClick={toggleSubMenu}>Dark Version</Link>
                                <ul className="dropdown-menu animated">
                                    <li><Link to="/home-dark">Home Dark One</Link></li>
                                    <li><Link to="/home-2-dark">Home Dark Two</Link></li>
                                    <li><Link to="/home-3-dark">Home Dark Three</Link></li>
                                    <li><Link to="/home-4-dark">Home Dark Four</Link></li>
                                    <li><Link to="/home-5-dark">Home Dark Five</Link></li>
                                    <li><Link to="/home-6-dark">Home Dark Six</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                        <ul className="dropdown-menu animated fadeOutUp">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li className="dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Our Chef</Link>
                                <ul className="dropdown-menu animated">
                                    <li><Link to="/chef">Chef Style One</Link></li>
                                    <li><Link to="/chef-details/1">Chef Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/reservation">Reservation</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/not-found">Error Page</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Menu</Link>
                        <ul className="dropdown-menu animated fadeOutUp">
                            <li><Link to="/food-menu">Menu Style One</Link></li>
                            <li><Link to="/food-menu-2">Menu Style Two</Link></li>
                            <li><Link to="/food-menu-3">Menu Style Three</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="col-half right">
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>
                        <ul className="dropdown-menu animated fadeOutUp">
                            <li><Link to="/blog-standard">Blog Standard</Link></li>
                            <li><Link to="/blog-with-sidebar">Blog With Sidebar</Link></li>
                            <li><Link to="/blog-2-column">Blog Grid Two Colum</Link></li>
                            <li><Link to="/blog-3-column">Blog Grid Three Colum</Link></li>
                            <li><Link to="/blog-single/1">Blog Single</Link></li>
                            <li><Link to="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Shop</Link>
                        <ul className="dropdown-menu animated fadeOutUp">
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/shop-single/1">Shop Single</Link></li>
                            <li><Link to="/shop-single-thumb/1">Shop Single Two</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/checkout">Checkout</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default MainMenuV2;