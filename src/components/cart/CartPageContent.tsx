// components/CartPageContent.tsx
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  removeCartItem,
  updateCartItem,
  CartItem,
} from "../../store/features/cartSlice"; // Import CartItem
import { toast } from "react-toastify";

const CartPageContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems); // No need for type casting

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleRemove = (product: string, variant: string) => {
    dispatch(removeCartItem({ product, variant }));
    toast.error("Product removed from cart");
  };

  const handleQuantityChange = (
    product: string,
    quantity: number,
    variant: string
  ) => {
    if (quantity < 1) return;
    dispatch(
      updateCartItem({
        product,
        quantity,
        variant,
        stock: 0,
      })
    );
  };

  const handleCouponSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.info("Coupon functionality not implemented yet");
  };

  return (
    <div className="cart-page default-padding overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-cart-info">
              <form
                className="woocommerce-cart-form"
                onSubmit={handleCouponSubmit}
              >
                <table className="shop-cart-table" aria-label="Cart Items">
                  <thead>
                    <tr>
                      <th scope="col">Remove</th>
                      <th scope="col">Thumbnail</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="empty-cart">
                          Your cart is empty.{" "}
                          <Link to="/shop">Continue shopping</Link>
                        </td>
                      </tr>
                    ) : (
                      cartItems.map((item: CartItem) => (
                        <tr
                          key={item.product}
                          className="woocommerce-cart-form__cart-item"
                        >
                          <td className="product-remove">
                            <button
                              type="button"
                              className="remove"
                              onClick={() =>
                                handleRemove(item.product, item.variant)
                              }
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <i className="fas fa-times" />
                            </button>
                          </td>
                          <td className="product-thumbnail">
                            <Link to={`/shop-single-thumb/${item.product}`}>
                              <img
                                src={
                                  item.image.startsWith("http")
                                    ? item.image
                                    : `/assets/img/shop/${item.image}`
                                }
                                alt={item.name}
                                onError={(e) => {
                                  e.currentTarget.src =
                                    "/assets/img/shop/placeholder.jpg";
                                }}
                              />
                            </Link>
                          </td>
                          <td>
                            <Link to={`/shop-single-thumb/${item.product}`}>
                              {item.name}
                            </Link>
                          </td>
                          <td className="product-price">
                            ₹{item.price.toFixed(2)}
                          </td>
                          <td className="product-quantity">
                            <input
                              type="number"
                              value={item.quantity}
                              title={`Quantity for ${item.name}`}
                              min={1}
                              step={1}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.product,
                                  Number(e.target.value),
                                  item.variant
                                )
                              }
                              aria-label={`Quantity for ${item.name}`}
                            />
                          </td>
                          <td className="product-subtotal">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))
                    )}
                    <tr>
                      <td colSpan={6} className="actions">
                        <div className="coupon">
                          <input
                            type="text"
                            name="coupon"
                            id="coupon"
                            placeholder="Coupon code"
                            aria-label="Coupon code"
                          />
                          <button type="submit" aria-label="Apply coupon">
                            Apply coupon
                          </button>
                        </div>
                        <Link to="/checkout" className="checkout-button">
                          Proceed to Checkout
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div className="shop-cart-totals mt-50">
              <h2>Cart totals</h2>
              <div className="table-responsive table-bordered">
                <table className="table" aria-label="Cart Totals">
                  <thead>
                    <tr>
                      <th scope="col">Subtotal</th>
                      <th scope="col">₹{subtotal.toFixed(2)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Shipping</th>
                      <td>
                        <p>Free shipping</p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total</th>
                      <td>₹{subtotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageContent;
