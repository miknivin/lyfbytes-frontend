import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetMeQuery } from "../../store/api/userApi";
import logo1 from "/assets/img/logo-1.png";
import MainMenu from "./MainMenu";
import SidebarInfo from "./SidebarInfo";
import HeaderSearch from "./HeaderSearch";
import LoginModal from "../auth/LoginModal";
import RegisterModal from "../auth/RegisterModal";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSearchBar from "../../hooks/useSearchBar";
import useSidebarInfo from "../../hooks/useSidebarInfo";
import useStickyMenu from "../../hooks/useStickyMenu";
import "./HeaderV2.css";

const HeaderV2 = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  
  const toggleSubMenu = useSubMenuToggle();
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();
  const { openSearch, searchOpen, searchClose } = useSearchBar();
  const { isInfoOpen, closeInfoBar } = useSidebarInfo();
  const isMenuSticky = useStickyMenu();

  // Fetch user data using useGetMeQuery
  useGetMeQuery();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-box navbar-default validnavs navbar-sticky on no-full force-sticky ${
            isMenuSticky ? "sticked" : ""
          } ${isOpen ? "navbar-responsive" : ""} ${
            openSearch ? "pause-sticked" : ""
          }`}
        >
          <HeaderSearch openSearch={searchOpen} searchClose={searchClose} />
          <div className="container nav-box d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={openMenu}
              >
                <i className="fa fa-bars" />
              </button>
              <Link className="navbar-brand" to="/">
                <img src={logo1} className="logo" alt="Logo" />
              </Link>
            </div>

            <div
              className={`collapse navbar-collapse ${
                isOpen ? "show collapse-mobile" : "collapse-mobile"
              }`}
              id="navbar-menu"
            >
              <img src={logo1} alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={closeMenu}
              >
                <i className="fa fa-times" />
              </button>
              <MainMenu
                navbarPlacement="navbar-right"
                toggleSubMenu={toggleSubMenu}
                setShowLoginModal={setShowLoginModal}
                setShowRegisterModal={setShowRegisterModal}
              />
            </div>

            {/* User Profile Section */}
            {/* <div className="user-profile ms-3">
              {isAuthenticated && user ? (
                <Link to="/profile" className="text-dark text-decoration-none">
                  {user.name || user.email || "User"}
                </Link>
              ) : (
                <Link to="/login" className="text-dark text-decoration-none">
                  Login
                </Link>
              )}
            </div> */}

            <SidebarInfo closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} />
          </div>
          <div
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={closeMenu}
          />
        </nav>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
        />
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <RegisterModal
          setShowRegisterModal={setShowRegisterModal}
          setShowLoginModal={setShowLoginModal}
        />
      )}
    </>
  );
};

export default HeaderV2;
