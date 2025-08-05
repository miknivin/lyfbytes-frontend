import AboutV2 from "../../components/about/AboutV2";
import BannerV2 from "../../components/banner/BannerV2";
import BlogV1 from "../../components/blog/BlogV1";
import FoodCategoryV1 from "../../components/categories/FoodCategoryV1";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV3 from "../../components/header/HeaderV3";
import MenuV2 from "../../components/menu/MenuV2";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import VideoV1 from "../../components/videos/VideoV1";
import WhyChooseV1 from "../../components/whyChoose/WhyChooseV1";

const Home6Page = () => {
    return (
        <>
            <HeaderV3 />
            <BannerV2 />
            <MenuV2 sectionClass="secondary" />
            <AboutV2 />
            <FoodCategoryV1 />
            <WhyChooseV1 />
            <VideoV1 />
            <TestimonialV3 sectionClass="bg-gray bg-cover" />
            <BlogV1 />
            <FooterV1 />
        </>
    );
};

export default Home6Page;