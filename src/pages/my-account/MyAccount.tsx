import MyAccount from "../../components/dashboard/MyAccount";
import DashboardNav from "../../components/dashboard/DashboardNav";
import LayoutV5 from "../../components/layouts/LayoutV6";

export default function Page() {
  return (
    <LayoutV5 breadCrumb="my-account" title="My Account">
      <MyAccount />
    </LayoutV5>
  );
}
