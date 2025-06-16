import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV6";

import OrderDetails from "../../components/dashboard/OrderDetail";
import DashboardNav from "../../components/dashboard/DashboardNav";

export const metadata = {
  title: "Order Details | Sytrobags",
  description: "View details of your orders on Sytrobags.",
};

export default function Page() {
  return (
    <LayoutV5 breadCrumb="my-account-orders-details" title="Order Details">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="row">
              <div className="col-lg-3">
                <DashboardNav />
              </div>
              <div className="col-lg-9">
                <OrderDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutV5>
  );
}
