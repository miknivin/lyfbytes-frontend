import { Link } from "react-router-dom";
import illustration8 from "/assets/img/illustration/8.png";
import illustration17 from "/assets/img/illustration/17.png";
import shape26 from "/assets/img/shape/26.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const BannerV6 = () => {
    return (
        <>
            <div className="banner-area banner-style-six navigation-circle bg-dark text-light overflow-hidden bg-dark bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/14.jpg)' }}>
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
                        <SwiperSlide>
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h4>The best in town</h4>
                                            <h2>Super deal Special lunch</h2>
                                            <p>
                                                Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing know.
                                            </p>
                                            <div className="button mt-40">
                                                <Link className="btn btn-theme btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="thumb">
                                                <img src={illustration17} alt="Image Not Found" />
                                                <img src={shape26} alt="Image Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Single Item */}
                        <SwiperSlide>
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h4>The best in town</h4>
                                            <h2>Super deal Special Dinner</h2>
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
                                                <img src={shape26} alt="Image Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className="swiper-nav-left">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>


                </Swiper>
            </div >
        </>
    );
};

export default BannerV6;