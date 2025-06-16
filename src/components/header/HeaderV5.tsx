import useSidebarMenu from "../../hooks/useSidebarMenu";
import useStickyMenu from "../../hooks/useStickyMenu";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import HeaderCart from "./HeaderCart";
import HeaderTopV1 from "./HeaderTopV1";
import MainMenu from "./MainMenu";
import logo1 from "/assets/img/logo-1.png";
import { Link } from "react-router-dom";

const HeaderV5 = () => {

    const toggleSubMenu = useSubMenuToggle();
    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <HeaderTopV1 />
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs dark ${isOpen ? "navbar-responsive" : ""} ${isMenuSticky ? "sticked" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src={logo1} className="logo" alt="Logo" />
                            </Link>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <img src={logo1} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <MainMenu navbarPlacement="navbar-right" toggleSubMenu={toggleSubMenu} />
                        </div>
                        <HeaderCart />
                    </div>
                    <div className="overlay-screen" />
                </nav>
            </header>
        </>
    );
};

export default HeaderV5;