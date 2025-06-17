import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useLogoutMutation } from "../../store/api/authApi";
import { clearUser } from "../../store/features/userSlice";
import { removeCartItem, clearCart } from "../../store/features/cartSlice";
import SidebarWidgets from "./SidebarWidget";
import LoginModal from "../auth/LoginModal";
import RegisterModal from "../auth/RegisterModal";

interface HeaderSearchProps {
  closeInfoBar?: () => void;
  isInfoOpen?: boolean;
}

const SidebarInfo: React.FC<HeaderSearchProps> = ({
  closeInfoBar,
  isInfoOpen,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [logout] = useLogoutMutation();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleRemove = (productId: string, variant: string) => {
    dispatch(removeCartItem({ product: productId, variant }));
    toast.error("Product removed from cart");
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setShowLoginModal(true);
    // Programmatically navigate to add query parameter
    navigate({
      pathname: window.location.pathname, // Keep the current path
      search: "?toMyAccount=true", // Add query parameter
    });
  };

  const handleLogout = async () => {
    try {
      await logout(null).unwrap();
      dispatch(clearUser());
      dispatch(clearCart());
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error: any) {
      console.error("Logout error:", error);
      toast.error(error.data?.message || "Logout failed");
      dispatch(clearUser());
      dispatch(clearCart());
      navigate("/");
    }
  };

  return (
    <>
      <div className="attr-right">
        <div className="attr-nav attr-box">
          <ul>
            {/* User Icon */}
            <li className="me-2">
              {isAuthenticated ? (
                <>
                  <Link to="/my-account" className="dropdown-toggle">
                    <i className="far fa-user" />
                  </Link>
                  {/* <button
                    className="btn btn-link p-0 ms-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button> */}
                </>
              ) : (
                <Link
                  to="#"
                  className="dropdown-toggle"
                  onClick={(e: any) => handleClick(e)}
                >
                  <i className="far fa-user" />
                </Link>
              )}
            </li>

            {/* Cart Dropdown */}
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="far fa-shopping-cart" />
                <span className="badge">{totalItems}</span>
              </Link>
              <ul className="dropdown-menu cart-list">
                {cartItems.length > 0 ? (
                  <>
                    <ul>
                      {cartItems.map((item) => (
                        <li key={`${item.product}_${item.variant}`}>
                          <div className="thumb">
                            <span className="photo">
                              <img
                                src={
                                  item.image ||
                                  "https://ik.imagekit.io/c1jhxlxiy/woocommerce-placeholder-800x800.png?updatedAt=1749621964731"
                                }
                                alt={item.name}
                              />
                            </span>
                            <Link
                              to="#"
                              className="remove-product"
                              onClick={() =>
                                handleRemove(item.product, item.variant)
                              }
                            >
                              <i className="fas fa-times" />
                            </Link>
                          </div>
                          <div className="info">
                            <h6>
                              {item.name} ({item.variant})
                            </h6>
                            <p>
                              {item.quantity}x -{" "}
                              <span className="price">₹{item.price}</span>
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <li className="total mt-2 px-3">
                      <span className="pull-right">
                        <strong>Total</strong>: ₹{totalAmount.toFixed(2)}
                      </span>
                      <Link
                        to="/cart"
                        className="btn btn-default btn-cart mr-2"
                      >
                        Cart
                      </Link>
                      <Link
                        to="/checkout"
                        className="btn btn-default btn-cart mr-2"
                      >
                        Checkout
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="total">
                    <p>Your cart is empty.</p>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className={`side ${isInfoOpen ? "on" : ""}`}>
        <Link to="#" className="close-side" onClick={closeInfoBar}>
          <i className="fa fa-times"></i>
        </Link>
        <SidebarWidgets />
      </div>

      {showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          setShowRegisterModal={setShowRegisterModal}
          setShowLoginModal={setShowLoginModal}
        />
      )}
    </>
  );
};

export default SidebarInfo;
