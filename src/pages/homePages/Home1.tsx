import SwiperBanner from "../../components/banner/SwiperBanner";
import BannerV4 from "../../components/banner/BannerV4";
import BlogV1 from "../../components/blog/BlogV1";
import BrandV1 from "../../components/brand/BrandV1";
import ChefV1 from "../../components/chef/ChefV1";
import DiscountV1 from "../../components/discount/DiscountV1";
import FeatureV2 from "../../components/feature/FeatureV2";
import FooterV1 from "../../components/footer/FooterV1";
import GalleryV2 from "../../components/gallery/GalleryV2";
import HeaderV2 from "../../components/header/HeaderV2";
import MenuV5 from "../../components/menu/MenuV5";
import ShopV1 from "../../components/shop/ShopV1";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";

const Home1 = () => {
  return (
    <>
      <HeaderV2 />
      <SwiperBanner />
      {/* <MenuV5 /> */}
      <FeatureV2 />
      <ShopV1 />
      {/* <DiscountV1 /> */}
      {/* <ChefV1 /> */}
      <TestimonialV2 hasBg={true} />
      {/* <GalleryV2 /> */}
      {/* <BrandV1 /> */}
      {/* <BlogV1 /> */}
      <FooterV1 />
    </>
  );
};

export default Home1;
