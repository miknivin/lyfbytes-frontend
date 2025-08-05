import AboutV1 from "../../components/about/AboutV1";
import CursorEffect from "../../components/animation/CursorEffect";
import BannerV1 from "../../components/banner/BannerV1";
import BlogV1 from "../../components/blog/BlogV1";
import ChefV1 from "../../components/chef/ChefV1";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV4 from "../../components/header/HeaderV4";
import MenuIsotope from "../../components/menu/MenuIsotope";
import OfferV2 from "../../components/offer/OfferV2";
import ReservationV1 from "../../components/reservation/ReservationV1";
import ServiceV1 from "../../components/services/ServiceV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const Home4Page = () => {
    return (
        <>
            <HeaderV4 />
            <BannerV1 />
            <AboutV1 />
            <ServiceV1 />
            <MenuIsotope hasTitle={true} />
            <OfferV2 />
            <ChefV1 />
            <TestimonialV1 sectionClass="bg-gray bg-cover bg-shape-4" />
            <ReservationV1 />
            <BlogV1 />
            <FooterV1 />
            <CursorEffect />
        </>
    );
};

export default Home4Page;