/* eslint-disable no-unused-vars */

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { useCreateNewOrderMutation } from "../../store/api/orderApi";
import { clearCart } from "../../store/features/cartSlice";
import { useNavigate } from "react-router-dom";

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
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "Online">("COD");
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createNewOrder, { isLoading }] = useCreateNewOrderMutation();
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
    if (!isAuthenticated) {
      toast.error("You need to login to place order");
      return;
    }
    try {
      const orderData = {
        orderItems: cartItems.map((item) => ({
          product: item.product,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        shippingInfo: {
          name: `${formData.firstName} ${formData.lastName}`,
          address: formData.streetAddress,
          email: formData.email,
          state: formData.stateCounty,
          city: formData.townCity,
          phoneNo: formData.phone,
          pinCode: formData.postcode,
          country: formData.country,
        },
        itemsPrice: subtotal,
        taxAmount: 0,
        shippingAmount: 0,
        totalAmount: subtotal,
        paymentMethod,
        paymentInfo: {},
        orderNotes: formData.orderNotes,
      };

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
      navigate("/order-confirmation");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to place order");
    }
  };

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
                      disabled
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
                  disabled={isLoading || cartItems.length === 0}
                >
                  {isLoading ? "Processing..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
