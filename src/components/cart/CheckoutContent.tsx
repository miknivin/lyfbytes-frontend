/* eslint-disable no-unused-vars */

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import {
  useCreateNewOrderMutation,
  useDeleteSessionOrderMutation,
  useRazorpayCheckoutSessionMutation,
  useRazorpayWebhookMutation,
} from "../../store/api/orderApi";
import { clearCart } from "../../store/features/cartSlice";
import { useNavigate } from "react-router-dom";
import LoginModal from "../auth/LoginModal";
import RegisterModal from "../auth/RegisterModal";

// Add Razorpay type to window object
// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

const CheckoutContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "IN", // Fixed to India
    streetAddress: "",
    streetAddress2: "",
    townCity: "",
    stateCounty: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "Online">(
    "Online"
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const [loginCallback, setLoginCallback] = useState<(() => void) | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerCallback, setRegisterCallback] = useState<(() => void) | null>(
    null
  );
  const [razorpayCheckoutSession, { isLoading: isSessionLoading }] =
    useRazorpayCheckoutSessionMutation();
  const [deleteSessionOrder] = useDeleteSessionOrderMutation();
  const [razorpayWebhook] = useRazorpayWebhookMutation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [createNewOrder] = useCreateNewOrderMutation();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const subtotal = cartItems.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );

  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value as "COD" | "Online");
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "streetAddress",
      "townCity",
      "stateCounty",
      "postcode",
      "phone",
      "email",
    ];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        toast.error(
          `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
        return false;
      }
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    for (const item of cartItems) {
      if (!item.image) {
        toast.error(`Image is required for product ${item.name}`);
        return false;
      }
    }
    return true;
  };

  const handleForm: FormEventHandler = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const placeOrder = async () => {
      setIsLoading(true);

      const orderData = {
        orderItems: cartItems.map((item) => ({
          product: item.product,
          name: item.name,
          price: item.price.toString(),
          quantity: item.quantity,
          image: item.image,
        })),
        shippingInfo: {
          fullName: `${formData.firstName} ${formData.lastName}`,
          address: formData.streetAddress,
          email: formData.email,
          state: formData.stateCounty,
          city: formData.townCity,
          phoneNo: formData.phone,
          zipCode: formData.postcode,
          country: formData.country,
        },
        itemsPrice: subtotal,
        taxAmount: 0,
        shippingAmount: 0,
        totalAmount: subtotal,
        paymentMethod,
        paymentInfo: {},
        orderNotes: formData.orderNotes,
        couponApplied: null,
      };

      try {
        if (paymentMethod === "COD") {
          console.log(orderData, "orderdata");
          const result = await createNewOrder(orderData).unwrap();
          toast.success("Order placed successfully!");
          dispatch(clearCart());
          setFormData({
            firstName: "",
            lastName: "",
            country: "IN",
            streetAddress: "",
            streetAddress2: "",
            townCity: "",
            stateCounty: "",
            postcode: "",
            phone: "",
            email: "",
            orderNotes: "",
          });
          navigate("/orders");
        } else if (paymentMethod === "Online") {
          const sessionData = {
            orderData: {
              itemsPrice: subtotal,
              shippingInfo: {
                fullName: `${formData.firstName} ${formData.lastName}`,
                address: formData.streetAddress,
                email: formData.email,
                state: formData.stateCounty,
                city: formData.townCity,
                phoneNo: formData.phone,
                zipCode: formData.postcode,
                country: formData.country,
              },
              orderItems: cartItems.map((item) => ({
                product: item.product,
                name: item.name,
                price: item.price.toString(),
                quantity: item.quantity,
                image: item.image,
              })),
            },
          };

          const response = await razorpayCheckoutSession(sessionData).unwrap();
          const { id: order_id, amount, currency, sessionOrderId } = response;

          if (!(window as any).Razorpay) {
            toast.error("Razorpay SDK failed to load. Please try again.");
            setIsLoading(false);
            return;
          }

          const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: amount,
            currency: currency,
            name: "Lyf Bytes",

            description: "Order Payment",
            order_id: order_id,
            handler: async function (response: {
              razorpay_payment_id: string;
              razorpay_order_id: string;
              razorpay_signature: string;
            }) {
              const webhookData = {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                sessionOrderId,
                shippingInfo: orderData.shippingInfo,
                cartItems: orderData.orderItems,
                itemsPrice: orderData.itemsPrice,
                shippingPrice: orderData.shippingAmount,
                totalPrice: orderData.totalAmount,
                taxPrice: orderData.taxAmount,
                orderNotes: orderData.orderNotes,
                couponApplied: orderData.couponApplied,
              };

              try {
                await razorpayWebhook(webhookData).unwrap();
                const orderDataWithPayment = {
                  ...orderData,
                  paymentInfo: {
                    id: response.razorpay_payment_id,
                    status: "Paid",
                  },
                };
                toast.success("Payment successful and order placed!");

                deleteSessionOrder(sessionOrderId)
                  .unwrap()
                  .then(() =>
                    console.log("SessionStartedOrder deleted successfully")
                  )
                  .catch((deleteError) =>
                    console.error(
                      "Failed to delete SessionStartedOrder:",
                      deleteError
                    )
                  );

                dispatch(clearCart());
                setFormData({
                  firstName: "",
                  lastName: "",
                  country: "IN",
                  streetAddress: "",
                  streetAddress2: "",
                  townCity: "",
                  stateCounty: "",
                  postcode: "",
                  phone: "",
                  email: "",
                  orderNotes: "",
                });
                navigate("/orders");
              } catch (error) {
                toast.error("Payment verification failed");
              }
            },
            prefill: {
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
              contact: formData.phone,
            },
            theme: {
              color: "#ed1c24",
            },
          };

          const rzp = new (window as any).Razorpay(options);
          rzp.on("payment.failed", function (response: any) {
            console.log(response);
            toast.error("Payment failed. Please try again.");
          });
          rzp.open();
        }
      } catch (error) {
        toast.error((error as any)?.data?.message || "Failed to place order");
      } finally {
        setIsLoading(false);
      }
    };

    if (!isAuthenticated) {
      setShowLoginModal(true);
      setLoginCallback(() => placeOrder);
      setRegisterCallback(() => placeOrder);
      return;
    }

    await placeOrder();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="checkout-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form className="checkout-form" ref={formRef} onSubmit={handleForm}>
              <div className="row">
                <div className="col-lg-12">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="f-name">First Name *</label>
                        <input
                          className="form-control"
                          id="f-name"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          autoComplete="given-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="l-name">Last Name *</label>
                        <input
                          className="form-control"
                          id="l-name"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          autoComplete="family-name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="country">Country *</label>
                        <select
                          className="form-select"
                          id="country"
                          name="country"
                          value={formData.country}
                          disabled
                          required
                        >
                          <option value="IN">India</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="st-address">Street Address *</label>
                        <input
                          className="form-control"
                          id="st-address"
                          name="streetAddress"
                          type="text"
                          placeholder="House number and street name"
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                          autoComplete="address-line1"
                          required
                        />
                        <input
                          className="form-control"
                          id="st-address2"
                          name="streetAddress2"
                          type="text"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                          value={formData.streetAddress2}
                          onChange={handleInputChange}
                          autoComplete="address-line2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="t-city">Town / City *</label>
                        <input
                          className="form-control"
                          id="t-city"
                          name="townCity"
                          type="text"
                          value={formData.townCity}
                          onChange={handleInputChange}
                          autoComplete="address-level2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="st-country">State *</label>
                        <input
                          className="form-control"
                          id="st-country"
                          name="stateCounty"
                          type="text"
                          value={formData.stateCounty}
                          onChange={handleInputChange}
                          autoComplete="address-level1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="postcode">Postcode / ZIP *</label>
                        <input
                          className="form-control"
                          id="postcode"
                          name="postcode"
                          type="text"
                          value={formData.postcode}
                          onChange={handleInputChange}
                          autoComplete="postal-code"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="phone">Phone *</label>
                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          autoComplete="tel"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <label htmlFor="comments">Order Notes (Optional)</label>
                        <textarea
                          className="form-control"
                          id="comments"
                          name="orderNotes"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          value={formData.orderNotes}
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="shop-cart-totals mt-50 mt-md-30 mt-xs-10">
              <h2>Your Order</h2>
              <div className="table-responsive table-bordered">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={`${item.product}-${item.variant}`}>
                        <th>
                          {item.name} ({item.variant}) × {item.quantity}
                        </th>
                        <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                    <tr>
                      <th scope="row">Shipping</th>
                      <td>Free Shipping</td>
                    </tr>
                    <tr>
                      <th scope="row">Total</th>
                      <td>₹{subtotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="woocommerce-info">
                  Please select a payment method below or contact us for
                  alternate arrangements.
                </p>
                <div className="form-group">
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="payOnline"
                      value="Online"
                      checked={paymentMethod === "Online"}
                      onChange={handlePaymentMethodChange}
                      style={{
                        minHeight: "auto",
                        accentColor: "var(--color-primary) !important",
                      }}
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="payOnline"
                    >
                      Pay online
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="payOnDelivery"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={handlePaymentMethodChange}
                      style={{
                        minHeight: "auto",
                        accentColor: "var(--color-primary) !important",
                      }}
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="payOnDelivery"
                    >
                      Pay on delivery
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => formRef.current?.requestSubmit()}
                  className="btn btn-primary mt-3"
                  disabled={
                    isLoading || isSessionLoading || cartItems.length === 0
                  }
                >
                  {isLoading || isSessionLoading
                    ? "Processing..."
                    : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
          onLoginSuccess={loginCallback || undefined}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          setShowRegisterModal={setShowRegisterModal}
          setShowLoginModal={setShowLoginModal}
          onRegisterSuccess={registerCallback || undefined}
        />
      )}
    </div>
  );
};

export default CheckoutContent;
