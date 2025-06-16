import logo from "/assets/img/logo.png";
import logoLight from "/assets/img/logo-light.png";
import SidebarInfo from "./SidebarInfo";
import MainMenu from "./MainMenu";
import HeaderSearch from "./HeaderSearch";
import { Link } from "react-router-dom";
import HeaderTopV1 from "./HeaderTopV1";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useStickyMenu from "../../hooks/useStickyMenu";
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSearchBar from "../../hooks/useSearchBar";
import useSidebarInfo from "../../hooks/useSidebarInfo";

interface DataType {
    isDark?: boolean
}

const HeaderV3 = ({ isDark }: DataType) => {

    const toggleSubMenu = useSubMenuToggle();
    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { openSearch, searchOpen, searchClose } = useSearchBar();
    const { isInfoOpen, closeInfoBar } = useSidebarInfo();

    return (
        <>
            <HeaderTopV1 />
            <header>
                <nav className={`navbar mobile-sidenav nav-top-margin navbar-sticky navbar-default validnavs navbar-fixed dark nav-border ${isOpen ? "navbar-responsive" : ""} ${isMenuSticky ? "sticked" : "no-background"} ${openSearch ? "pause-sticked" : ""}`}>
                    <HeaderSearch openSearch={searchOpen} searchClose={searchClose} />
                    <div className="container d-flex justify-content-between align-items-center">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                {isDark ? <img src={logoLight} className="logo logo-display" alt="Logo" /> : <img src={logo} className="logo logo-display" alt="Logo" />}
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
                        <SidebarInfo closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV3;