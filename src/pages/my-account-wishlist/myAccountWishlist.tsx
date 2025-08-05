import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV6";

// import Wishlist from "../../components/dashboard/Wishlist";
// import DashboardNav from "../../components/dashboard/DashboardNav";

// export const metadata = {
//   title: "My Wishlist | Sytrobags",
//   description: "View and manage your wishlist on Sytrobags.",
// };

export default function Page() {
  return (
    <LayoutV5 breadCrumb="my-account-wishlist" title="My Wishlist"></LayoutV5>
  );
}
