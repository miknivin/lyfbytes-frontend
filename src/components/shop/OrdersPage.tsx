import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMyOrdersQuery } from "../../store/api/orderApi";
import { RootState } from "../../store/store";
import LayoutV6 from "../layouts/LayoutV6";
import { useEffect, useState } from "react";

const OrdersPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [authCheckComplete, setAuthCheckComplete] = useState(false);

  const {
    data: orders = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useMyOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
    skip: !isAuthenticated, // Skip query if not authenticated
  });

  useEffect(() => {
    // Check authentication after component mounts
    const timer = setTimeout(() => {
      setAuthCheckComplete(true);
      if (!isAuthenticated) {
        navigate("/"); // Redirect to home page if not authenticated
      }
    }, 100); // Small delay to let authentication state settle

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      refetch();
    }
  }, [refetch, isAuthenticated]);

  // Show loading while checking authentication
  if (!authCheckComplete) {
    return (
      <LayoutV6 breadCrumb="Orders" title="Your Orders">
        <div className="orders-page">
          <p>Loading...</p>
        </div>
      </LayoutV6>
    );
  }

  // If user is not authenticated, this shouldn't render (they'll be redirected)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <LayoutV6 breadCrumb="Orders" title="Your Orders">
      <div className="orders-page">
        <h2>Your Orders</h2>
        {isLoading ? (
          <p>Loading orders...</p>
        ) : isError ? (
          <div>
            <p className="text-center text-danger mb-3">
              {error && typeof error === "object" && "status" in error
                ? error.status === 401 || error.status === 403
                  ? "Please login to view your orders."
                  : "Failed to load orders. Please try again."
                : "An error occurred while loading orders."}
            </p>
            {error && 
             typeof error === "object" && 
             "status" in error && 
             (error.status === 401 || error.status === 403) && (
              <div className="text-center">
                <Link to="/" className="btn btn-primary">
                  Go to Home & Login
                </Link>
              </div>
            )}
          </div>
        ) : !orders?.orders?.length ? (
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
                      <Link to={`/orders/${order._id}`} className="">
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
