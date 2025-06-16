import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useOrderDetailsQuery } from "../../store/api/orderApi";
import { toast } from "react-toastify";
import LayoutV6 from "../layouts/LayoutV6";

// Define TypeScript interface for OrderItem (aligned with orderSchema)
interface OrderItem {
  product: string; // ObjectId ref to products
  name: string;
  image: string;
  price: string; // String per orderSchema
  quantity: number;
}

// Define TypeScript interface for Order (aligned with orderSchema)
export interface Order {
  _id: string;
  createdAt?: string;
  totalAmount: number;
  orderStatus: string;
  paymentMethod?: string;
  shippingInfo: {
    fullName?: string; // Optional per schema
    address: string;
    city: string;
    zipCode?: string; // pinCode in component, zipCode in schema
    phoneNo?: string;
  };
  orderItems: OrderItem[];
}

const OrderDetailsPage = () => {
  const { orderId } = useParams<{ orderId: string }>();

  // Use RTK Query hook to fetch order details
  const {
    data, // Raw response
    isLoading: loading,
    error,
    refetch,
  } = useOrderDetailsQuery(orderId!, {
    skip: !orderId,
  });

  // Extract order from data.order
  const currentOrder: Order | undefined = data?.order;

  // Handle RTK Query errors
  useEffect(() => {
    if (error) {
      let errorMessage = "Failed to fetch order details";
      if ("status" in error) {
        // FetchBaseQueryError
        errorMessage = `Error: ${error.status} - ${JSON.stringify(error.data)}`;
      } else if ("message" in error) {
        // SerializedError
        errorMessage = `Error: ${error.message}`;
      }
      toast.error(errorMessage);
    }
  }, [error]);

  // Refetch when orderId changes
  useEffect(() => {
    if (orderId) {
      refetch();
    }
  }, [orderId, refetch]);

  const statusClass =
    currentOrder?.orderStatus === "Processing"
      ? "text-warning"
      : currentOrder?.orderStatus === "Delivered"
      ? "text-success"
      : "";
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading order details.</div>;
  if (!currentOrder) return <div>Order not found.</div>;

  return (
    <LayoutV6 breadCrumb="Order Details" title="Order Details">
      <div className="order-details-page">
        <Link to="/orders" className="btn" aria-label="Back to orders">
          Back to Orders
        </Link>
        <h2>Order #{currentOrder?._id?.slice(-6)}</h2>
        <div className="order-summary">
          <p>
            <strong>Date:</strong>{" "}
            {new Date(
              currentOrder.createdAt || Date.now()
            ).toLocaleDateString()}
          </p>
          <p>
            <strong>Total:</strong> ₹{currentOrder.totalAmount.toFixed(2)}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={statusClass}>
              {currentOrder.orderStatus || "Processing"}
            </span>
          </p>
          <p>
            <strong>Payment Method:</strong>{" "}
            {currentOrder.paymentMethod || "N/A"}
          </p>
        </div>
        <h3>Shipping Information</h3>
        <div className="shipping-info">
          <p>
            <strong>Name:</strong> {currentOrder.shippingInfo.fullName || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {currentOrder.shippingInfo.address},{" "}
            {currentOrder.shippingInfo.city},{" "}
            {currentOrder.shippingInfo.zipCode || ""}
          </p>
          <p>
            <strong>Phone:</strong> {currentOrder.shippingInfo.phoneNo || "N/A"}
          </p>
        </div>
        <h3>Order Items</h3>
        <div className="order-items table-responsive">
          <table className="table table-bordered" aria-label="Order Items">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.orderItems.map((item: OrderItem) => (
                <tr key={item.product}>
                  <td>
                    <img
                      src={
                        item.image.startsWith("http")
                          ? item.image
                          : `/images/${item.image}`
                      }
                      alt={item.name}
                      style={{ width: "50px", marginRight: "10px" }}
                      onError={(e) =>
                        (e.currentTarget.src = "/images/placeholder.jpg")
                      }
                    />
                    {item.name}
                  </td>
                  <td>{item.quantity}</td>
                  <td>₹{parseFloat(item.price).toFixed(2)}</td>
                  <td>
                    ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/orders" className="btn" aria-label="Back to orders">
          Back to Orders
        </Link>
      </div>
    </LayoutV6>
  );
};

export default OrderDetailsPage;
