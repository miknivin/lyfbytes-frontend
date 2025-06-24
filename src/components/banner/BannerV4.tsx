import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";
import illustration3 from "/assets/img/illustration/3.webp";
import pizza from "/assets/img/illustration/pizza.png";
import murukku from "/assets/img/illustration/murukku.webp";
import popcorn from "/assets/img/illustration/corn.webp";
import sesame from "/assets/img/illustration/sesame.webp";
import shape22 from "/assets/img/shape/22.webp";
import shape23 from "/assets/img/shape/23.webp";
import shape24 from "/assets/img/shape/24.webp";
import shape25 from "/assets/img/shape/25.webp";
import shape26 from "/assets/img/shape/26.webp";
import shape27 from "/assets/img/shape/27.webp";
import shape28 from "/assets/img/shape/28.webp";
import shape29 from "/assets/img/shape/29.png";
import shape30 from "/assets/img/shape/30.png";
import { Link } from "react-router-dom";

const BannerV4 = () => {
  return (
    <>
      <div
        className="banner-area banner-style-four navigation-circle overflow-hidden bg-theme text-light bg-cover"
        style={{ backgroundImage: "url(/assets/img/shape/1.webp)" }}
      >
        <Swiper
          direction={"horizontal"}
          loop={true}
          speed={3000}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: true,
          // }}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="banner-fade"
          modules={[Keyboard, Pagination, Navigation, EffectFade]}
        >
          <div className="swiper-wrapper">
            {/* Single Item */}
            <SwiperSlide className="swiper-slide">
              <div className="container">
                <div className="content">
                  <div className="shape">
                    <img src={shape23} alt="Image Not Found" />
                    <img src={shape24} alt="Image Not Found" />
                  </div>
                  <div className="row align-center">
                    <div className="col-lg-6 position-relative z-3">
                      {/* <h4>Purchase today.</h4> */}
                      <h2 className="slide-head">
                        LIFE BYTES <br /> BANANA CHIPS
                      </h2>
                      <p>
                        Get crunchy banana chips made using authentic coconut
                        oil. Bring life to your every bite with Life Bytes
                      </p>
                      <div className="button mt-40">
                        <Link
                          className="btn btn-theme btn-md animation"
                          to="/shop-single-thumb/684a70f1935b6e99fc9d286f"
                        >
                          Order Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="thumb">
                        <img
                          src={illustration3}
                          alt="Image Not Found"
                          className="position-relative"
                          style={{ zIndex: 99 }}
                        />
                        {/* <img src={shape22} alt="Image Not Found" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide 2 */}
            {/* Single Item */}
            <SwiperSlide className="swiper-slide">
              <div className="container">
                <div className="content">
                  <div className="shape">
                    <img src={shape25} alt="Image Not Found" />
                    <img src={shape26} alt="Image Not Found" />
                  </div>
                  <div className="row align-center">
                    <div className="col-lg-6 position-relative z-3">
                      {/* <h4>
                        Purchase today. just <strong>$58</strong>
                      </h4> */}
                      <h2 className="slide-head">
                        LIFE BYTES <br /> TOMATO MURUKKU
                      </h2>
                      <p>
                        Traditional Kerala murukku gets a delicious makeover
                        with tangy tomato flavoring in these crispy,
                        spiral-shaped snacks
                      </p>
                      <div className="button mt-40">
                        <Link
                          className="btn btn-theme btn-md animation"
                          to="/shop-single-thumb/684bce8e3086ec1d0a13d14a"
                        >
                          Order Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="thumb">
                        <img src={murukku} alt="Murukku" />
                        {/* <img src={shape22} alt="Image Not Found" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container">
                <div className="content">
                  <div className="shape">
                    <img src={shape27} style={{ left: "-227px" }} alt="shape" />
                    <img src={shape28} alt="shape" />
                  </div>
                  <div className="row align-center">
                    <div className="col-lg-6 position-relative z-3">
                      {/* <h4>
                        Purchase today. just <strong>$58</strong>
                      </h4> */}
                      <h2 className="slide-head">
                        LIFE BYTES <br /> JACKFRUIT CHIPS
                      </h2>
                      <p>
                        Kerala's beloved jackfruit transforms into golden,
                        crispy chips that celebrate tropical flavors in every
                        bite
                      </p>
                      <div className="button mt-40">
                        <Link
                          className="btn btn-theme btn-md animation"
                          to="/shop-single-thumb/684fec1e4c79c2acb46e2741"
                        >
                          Order Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="thumb">
                        <img src={popcorn} alt="Murukku" />
                        {/* <img src={shape22} alt="Image Not Found" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container">
                <div className="content">
                  <div className="shape">
                    <img src={shape29} style={{ left: "-227px" }} alt="shape" />
                    <img src={shape30} alt="shape" />
                  </div>
                  <div className="row align-center">
                    <div className="col-lg-6 position-relative z-3">
                      {/* <h4>
                        Purchase today. just <strong>$58</strong>
                      </h4> */}
                      <h2 className="slide-head">
                        LIFE BYTES <br /> SESAME BALLS
                      </h2>
                      <p>
                        Experience the authentic taste of Kerala with our Sesame
                        Ball Black Bytes — golden, crispy, and bursting with
                        traditional South Indian flavors
                      </p>
                      <div className="button mt-40">
                        <Link
                          className="btn btn-theme btn-md animation"
                          to="/shop-single-thumb/68515c2d1a40946a0ec21b2d"
                        >
                          Order Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="thumb">
                        <img src={sesame} alt="sesame" />
                        {/* <img src={shape22} alt="Image Not Found" /> */}
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

export default BannerV4;
