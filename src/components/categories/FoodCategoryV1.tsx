import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

const FoodCategoryV1 = () => {
    return (
        <>
            <div className="food-cat-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/3.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Food Category</h4>
                                <h2 className="title">Top category of our menus</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="food-cat-carousel text-light"
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={true}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    }
                                }}
                                modules={[Keyboard, Autoplay]}
                            >

                                <div className="swiper-wrapper">

                                    {/* Single Item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="food-cat-item">
                                            <Link to="/shop" style={{ backgroundImage: 'url(/assets/img/category/1.jpg)' }}>
                                                <h4>Fast food</h4>
                                                <span>80+ Items</span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>

                                    {/* Single Item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="food-cat-item">
                                            <Link to="/shop" style={{ backgroundImage: 'url(/assets/img/category/2.jpg)' }}>
                                                <h4>Sea food</h4>
                                                <span>48+ Items</span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>

                                    {/* Single Item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="food-cat-item">
                                            <Link to="/shop" style={{ backgroundImage: 'url(/assets/img/category/3.jpg)' }}>
                                                <h4>Dessert</h4>
                                                <span>45 Items</span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>

                                    {/* Single Item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="food-cat-item">
                                            <Link to="/shop" style={{ backgroundImage: 'url(/assets/img/category/4.jpg)' }}>
                                                <h4>Beverage</h4>
                                                <span>18 Items</span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>

                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCategoryV1;