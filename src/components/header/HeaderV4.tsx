import logo from "/assets/img/logo.png";
import logoLight from "/assets/img/logo-light.png";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import HeaderTopV2 from "./HeaderTopV2";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useStickyMenu from "../../hooks/useStickyMenu";
import useSidebarMenu from "../../hooks/useSidebarMenu";
import HeaderCart from "./HeaderCart";

const HeaderV4 = () => {

    const toggleSubMenu = useSubMenuToggle();
    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <HeaderTopV2 sectionClass="bg-transparent" />
            <header>
                <nav className={`navbar mobile-sidenav nav-top-margin navbar-sticky navbar-default validnavs navbar-fixed white nav-border ${isOpen ? "navbar-responsive" : ""} ${isMenuSticky ? "sticked" : "no-background"}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src={logoLight} className="logo logo-display" alt="Logo" />
                                <img src={logo} className="logo logo-scrolled" alt="Logo" />
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <img src={logo} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <MainMenu navbarPlacement="navbar-right" toggleSubMenu={toggleSubMenu} />
                        </div>
                        <HeaderCart />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV4;