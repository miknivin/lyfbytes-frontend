import useSidebarMenu from "../../hooks/useSidebarMenu";
import useStickyMenu from "../../hooks/useStickyMenu";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import MainMenu from "./MainMenu";
import logo from "/assets/img/logo.png";
import logoLight from "/assets/img/logo-light.png";
import { Link } from "react-router-dom";

interface DataType {
    isDark?: boolean
}

const HeaderV6 = ({ isDark }: DataType) => {

    const toggleSubMenu = useSubMenuToggle();
    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed  navbar-style-two on no-full ${isOpen ? "navbar-responsive" : ""} ${isMenuSticky ? "sticked" : "no-background"}`}>
                    <div className="container-full d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                {isDark ?
                                    <>
                                        <img src={logoLight} className="logo logo-display" alt="Logo" />
                                        <img src={logo} className="logo logo-scrolled" alt="Logo" />
                                    </> :
                                    <img src={logo} className="logo" alt="Logo" />
                                }

                            </Link>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <img src={logo} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <MainMenu navbarPlacement="navbar-right" toggleSubMenu={toggleSubMenu} />
                        </div>
                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button"><Link to="/contact">Reservation</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="overlay-screen" />
                </nav>
            </header>
        </>
    );
};

export default HeaderV6;