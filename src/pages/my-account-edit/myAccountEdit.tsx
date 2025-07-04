import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV6";

import AccountEdit from "../../components/dashboard/AccountEdit";
import DashboardNav from "../../components/dashboard/DashboardNav";

export default function Page() {
  return (
    <LayoutV5 breadCrumb="my-account-edit" title="Edit Account">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="row">
              <div className="col-lg-3">
                <DashboardNav />
              </div>
              <div className="col-lg-9">
                <AccountEdit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutV5>
  );
}
