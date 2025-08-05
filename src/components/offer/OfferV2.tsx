import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, EffectFade } from 'swiper/modules';
import illustration4 from "/assets/img/illustration/4.png";
import thumb1 from "/assets/img/thumb/1.jpg";
import thumb2 from "/assets/img/thumb/2.jpg";
import { Link } from "react-router-dom";

const OfferV2 = () => {
    return (
        <>
            <div className="food-offera-rea default-padding bg-dark text-light bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="offser-carousel"
                                direction={"horizontal"}
                                loop={true}
                                effect={"fade"}
                                fadeEffect={{
                                    crossFade: true
                                }}
                                speed={3000}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Keyboard, Autoplay, EffectFade]}
                            >
                                <div className="swiper-wrapper">

                                    {/* Single Item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="offer-style-one">
                                            <div className="shape">
                                                <img src={illustration4} alt="Image Not Found" />
                                            </div>
                                            <div className="row align-center">
                                                <div className="col-xl-6 col-lg-5">
                                                    <div className="thumb">
                                                        <img src={thumb1} alt="Image Not Found" />
                                                        <div className="discount-badge">
                                                            <strong>15%</strong> Discount
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                                                    <div className="info">
                                                        <h2>Birthday Party</h2>
                                                        <p>
                                                            use only the utensils provided for each food item. not use their fingers to touch any food items (“Please use the tongs provided.”) use clean plates, cutlery and napkins when they revisit the buffet for refills. supervise children who are serving themselves at the buffet.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <h5>Guest allowed</h5>
                                                                <div className="line-seperator" />
                                                                <h5>30 Person</h5>
                                                            </li>
                                                            <li>
                                                                <h5>Food Items </h5>
                                                                <div className="line-seperator" />
                                                                <h5>120+ Item</h5>
                                                            </li>
                                                            <li>
                                                                <h5>Time Timit</h5>
                                                                <div className="line-seperator" />
                                                                <h5>5 Hours</h5>
                                                            </li>
                                                        </ul>
                                                        <Link className="btn circle btn-md btn-light animation mt-10" to="/contact">Book A Table</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Single Item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="offer-style-one">
                                            <div className="shape">
                                                <img src={illustration4} alt="Image Not Found" />
                                            </div>
                                            <div className="row align-center">
                                                <div className="col-xl-6 col-lg-5">
                                                    <div className="thumb">
                                                        <img src={thumb2} alt="Image Not Found" />
                                                        <div className="discount-badge">
                                                            <strong>15%</strong> Discount
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                                                    <div className="info">
                                                        <h2>Wedding Cremony</h2>
                                                        <p>
                                                            use only the utensils provided for each food item. not use their fingers to touch any food items (“Please use the tongs provided.”) use clean plates, cutlery and napkins when they revisit the buffet for refills. supervise children who are serving themselves at the buffet.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <h5>Guest allowed</h5>
                                                                <div className="line-seperator" />
                                                                <h5>500 Person</h5>
                                                            </li>
                                                            <li>
                                                                <h5>Food Items </h5>
                                                                <div className="line-seperator" />
                                                                <h5>120+ Item</h5>
                                                            </li>
                                                            <li>
                                                                <h5>Time Timit</h5>
                                                                <div className="line-seperator" />
                                                                <h5>5 Hours</h5>
                                                            </li>
                                                        </ul>
                                                        <Link className="btn circle btn-md btn-light animation mt-10" to="/contact">Book A Table</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default OfferV2;