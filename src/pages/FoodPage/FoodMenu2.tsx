import LayoutV5 from "../../components/layouts/LayoutV5";
import FeatureV1 from "../../components/feature/FeatureV1";

import MenuV2 from "../../components/menu/MenuV2";
import ReservationV2 from "../../components/reservation/ReservationV2";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const FoodMenu2Page = () => {
  return (
    <>
      <LayoutV5 title="Food Menu" breadCrumb="food-menu-2">
        <MenuV2 sectionClass="full-width" />
        <ReservationV2 />
        <TestimonialV1 sectionClass="bg-dark text-light" />
        <FeatureV1 sectionClass="default-padding" />
      </LayoutV5>
    </>
  );
};

export default FoodMenu2Page;
