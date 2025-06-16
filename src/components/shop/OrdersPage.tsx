import { Link } from "react-router-dom";
import { useMyOrdersQuery } from "../../store/api/orderApi";
import LayoutV6 from "../layouts/LayoutV6";

const OrdersPage = () => {
  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useMyOrdersQuery(undefined);

  return (
    <LayoutV6 breadCrumb="Orders" title="Your Orders">
      <div className="orders-page">
        <h2>Your Orders</h2>
        {isLoading ? (
          <p>Loading orders...</p>
        ) : isError ? (
          <p>
            Error fetching orders:{" "}
            {error && typeof error === "object" && "message" in error
              ? (error as { message: string }).message
              : error &&
                typeof error === "object" &&
                "data" in error &&
                typeof (error as any).data === "string"
              ? (error as any).data
              : "Something went wrong"}
          </p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.orders.map((order: any) => (
                  <tr key={order._id}>
                    <td>
                      <Link to={`/order/${order._id}`}>
                        #{order?._id?.slice(-6)}
                      </Link>
                    </td>
                    <td>
                      {new Date(
                        order?.createdAt || Date.now()
                      ).toLocaleDateString()}
                    </td>
                    <td>₹{order?.totalAmount?.toFixed(2)}</td>
                    <td>{order?.orderStatus || "Processing"}</td>
                    <td>
                      <Link to={order._id} className="">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </LayoutV6>
  );
};

export default OrdersPage;
