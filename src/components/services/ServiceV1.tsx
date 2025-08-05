import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import ServicesV1Data from "../../assets/jsonData/services/ServicesV1Data.json"
import SingleServiceV1 from './SingleServiceV1';

const ServiceV1 = () => {
    return (
        <>
            <div className="services-style-one-area default-padding-top text-light">
                <div className="container">
                    <div className="heading-left text-light">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <h4 className="sub-heading">Food Bundles</h4>
                                <h2 className="title">Convenient bundles of delicious food items</h2>
                            </div>
                            <div className="col-xl-5 offset-xl-1 col-lg-4 offset-lg-1">
                                <div className="services-swiper-nav">
                                    <div className="services-pagination" />
                                    <div className="services-button-prev" />
                                    <div className="services-button-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="service-carousel"
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={false}
                                // pagination
                                pagination={{
                                    el: '.services-pagination',
                                    type: 'fraction',
                                    clickable: true,
                                }}
                                // Navigation
                                navigation={{
                                    nextEl: ".services-button-next",
                                    prevEl: ".services-button-prev"
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 15,
                                    }
                                }}
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                            >
                                <div className="swiper-wrapper">
                                    {ServicesV1Data.map(service =>
                                        <SwiperSlide key={service.id}>
                                            <SingleServiceV1 service={service} />
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ServiceV1;