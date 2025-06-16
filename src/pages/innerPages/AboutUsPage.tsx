import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import AboutV1 from "../../components/about/AboutV1";
import BrandV1 from "../../components/brand/BrandV1";
import ChefV1 from "../../components/chef/ChefV1";
import FactV1 from "../../components/fact/FactV1";
import LayoutV5 from "../../components/layouts/LayoutV5";

const AboutUsPage = () => {
  return (
    <>
      <LayoutV5 breadCrumb="about-us" title="About Us">
        <AboutV1 />
        <BrandV1 />
        <FactV1 />
        {/* <ChefV1 sectionClass="bg-gray" /> */}
        <TestimonialV2 hasBg={true} />
      </LayoutV5>
    </>
  );
};

export default AboutUsPage;
