// src/components/HeaderCart.tsx
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store"; // Updated path to use @
import { removeCartItem } from "../../store/features/cartSlice"; // Updated path
import { toast } from "react-toastify";


const HeaderCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems); // Fixed selector

  // Fallback to empty array if cartItems is undefined
  const items = cartItems || [];
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (productId: string, variant: string) => {
    dispatch(removeCartItem({ product: productId, variant }));
    toast.error("Product removed from cart");
  };
  return (
    <div className="attr-right">
      <div className="attr-nav attr-box">
        <ul>
          <li className="dropdown">
            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="far fa-shopping-cart" />
              <span className="badge">{totalItems}</span>
            </Link>
            <ul className="dropdown-menu cart-list">
              {items.length > 0 ? (
                <>
                  <ul>
                    {items.map((item) => (
                      <li key={item.product}>
                        <div className="thumb">
                          <span className="photo">
                            <img
                              src={
                                item.image.startsWith("http")
                                  ? item.image
                                  : `/assets/img/shop/${item.image}`
                              }
                              alt={item.name}
                              onError={(e) => {
                                e.currentTarget.src = `data:image/svg+xml,${encodeURIComponent(
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="#f0f0f0"><rect width="50" height="50" fill="#f8f9fa"/><text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="8" fill="#6c757d">No Image</text></svg>`
                                )}`;
                              }}
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
                          <h6>{item.name}</h6>
                          <p>
                            {item.quantity}x -{" "}
                            <span className="price">₹{item.price}</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <li className="total mt-3 px-3 pb-5">
                    <div className="cart-total mb-3">
                      <span className="total-label">Total: </span>
                      <span className="total-amount">₹{totalAmount.toFixed(2)}</span>
                    </div>
                   <div className="cart-buttons d-flex flex-column gap-2 mx-2">
  <Link to="/cart" className="btn btn-primary btn-cart mb-2">
    <i className="fas fa-shopping-cart me-2"></i>
    CART
  </Link>
  <Link to="/checkout" className="btn btn-danger btn-checkout">
    <i className="fas fa-credit-card me-2"></i>
    CHECKOUT
  </Link>
</div>
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
  );
};

export default HeaderCart;
