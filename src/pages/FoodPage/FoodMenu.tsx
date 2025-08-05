import LayoutV5 from "../../components/layouts/LayoutV5";
import FeatureV1 from "../../components/feature/FeatureV1";

import MenuIsotope from "../../components/menu/MenuIsotope";
import ReservationV2 from "../../components/reservation/ReservationV2";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const FoodMenuPage = () => {
  return (
    <>
      <LayoutV5 title="Food Menu" breadCrumb="food-menu">
        <MenuIsotope sectionClass="bg-gray" />
        <ReservationV2 />
        <TestimonialV1 sectionClass="bg-dark text-light" />
        <FeatureV1 sectionClass="default-padding" />
      </LayoutV5>
    </>
  );
};

export default FoodMenuPage;
