import ChefFull from "../../components/chef/ChefFull";
import LayoutV5 from "../../components/layouts/LayoutV6";

const ChefPage = () => {
  return (
    <>
      <LayoutV5 breadCrumb="chef" title="Restaurant Chef">
        <ChefFull />
      </LayoutV5>
    </>
  );
};

export default ChefPage;
