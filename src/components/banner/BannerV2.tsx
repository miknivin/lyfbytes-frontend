import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import illustration8 from "/assets/img/illustration/8.png"
import shape1 from "/assets/img/shape/1.png"
import illustration15 from "/assets/img/illustration/15.png"

import { Link } from "react-router-dom";

const BannerV2 = () => {
    return (
        <>
            <div className="banner-area banner-style-two navigation-circle navigation-dark overflow-hidden">
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
                        <SwiperSlide className="swiper-slide">
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h2>Super deal Special lunch</h2>
                                            <h4>Purchase today. just <strong>$65</strong></h4>
                                            <p>
                                                Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing know.
                                            </p>
                                            <div className="button mt-40">
                                                <Link className="btn btn-theme btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="thumb">
                                                <img src={illustration8} alt="Image Not Found" />
                                                <img src={shape1} alt="Image Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Single Item */}
                        <SwiperSlide className="swiper-slide">
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h2>Super deal Special lunch</h2>
                                            <h4>Purchase today. just <strong>$65</strong></h4>
                                            <p>
                                                Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing know.
                                            </p>
                                            <div className="button mt-40">
                                                <Link className="btn btn-theme btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="thumb">
                                                <img src={illustration15} alt="Image Not Found" />
                                                <img src={shape1} alt="Image Not Found" />
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

export default BannerV2;