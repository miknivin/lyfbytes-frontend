import AboutV2 from "../../components/about/AboutV2";
import CursorEffect from "../../components/animation/CursorEffect";
import BannerV6 from "../../components/banner/BannerV6";
import BlogV1 from "../../components/blog/BlogV1";
import FoodCategoryV1 from "../../components/categories/FoodCategoryV1";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV7 from "../../components/header/HeaderV7";
import MenuV2 from "../../components/menu/MenuV2";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import VideoV1 from "../../components/videos/VideoV1";
import WhyChooseV1 from "../../components/whyChoose/WhyChooseV1";

const Home3Page = () => {
    return (
        <>
            <HeaderV7 />
            <BannerV6 />
            <MenuV2 />
            <AboutV2 />
            <FoodCategoryV1 />
            <WhyChooseV1 />
            <VideoV1 />
            <TestimonialV3 sectionClass="bg-gray bg-cover" />
            <BlogV1 />
            <FooterV1 />
            <CursorEffect />
        </>
    );
};

export default Home3Page;