import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from "react-router-dom";

const BannerV1 = () => {
    return (
        <>
            <div className="banner-area banner-style-one navigation-circle overflow-hidden text-light">
                <Swiper
                    direction={"horizontal"}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    className="banner-fade"
                    modules={[Keyboard, Autoplay, Pagination, Navigation, EffectFade]}
                >
                    <div className="swiper-wrapper">

                        {/* Single Item */}
                        <SwiperSlide className="swiper-slide bg-cover shadow dark" style={{ background: 'url(/assets/img/banner/5.jpg)' }}>
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-xl-7 col-lg-9">
                                            <h4>Buffet</h4>
                                            <h2>Family Packages</h2>
                                            <ul>
                                                <li>
                                                    <i className="flaticon-hamburger" /> 40 Food
                                                </li>
                                                <li>
                                                    <i className="flaticon-champagne-glass" /> 19 Drinks
                                                </li>
                                                <li>
                                                    <i className="flaticon-coffee-cup" /> 28 Soup
                                                </li>
                                            </ul>
                                            <div className="button mt-40">
                                                <Link className="btn btn-theme btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Single Item */}
                        <SwiperSlide className="swiper-slide bg-cover shadow dark" style={{ background: 'url(/assets/img/banner/4.jpg)' }}>
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-xl-7 col-lg-9">
                                            <h4>Buffet</h4>
                                            <h2>Official Packages</h2>
                                            <ul>
                                                <li>
                                                    <i className="flaticon-hamburger" /> 40 Food
                                                </li>
                                                <li>
                                                    <i className="flaticon-champagne-glass" /> 19 Drinks
                                                </li>
                                                <li>
                                                    <i className="flaticon-coffee-cup" /> 28 Soup
                                                </li>
                                            </ul>
                                            <div className="button mt-40">
                                                <Link className="btn btn-theme btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>

                    {/* Navigation */}
                    <div className="swiper-nav-left">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default BannerV1;