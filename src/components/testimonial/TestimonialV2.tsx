import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
import shape16 from "/assets/img/shape/16.png";
import shape16Dark from "/assets/img/shape/16-dark.png";
import food1 from "/assets/img/food/1.jpeg";
import team10 from "/assets/img/team/10.jpeg";
import food6 from "/assets/img/food/2.jpeg";
import team11 from "/assets/img/team/11.jpeg";

interface DataType {
  isDark?: boolean;
  hasBg?: boolean;
  sectionClass?: string;
}

const TestimonialV2 = ({ isDark, hasBg, sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`testimonial-style-one-area default-padding bg-gray bg-cover text-center ${sectionClass}`}
        // style={{
        //   backgroundImage: hasBg ? "url(/assets/img/shape/4.jpg)" : "none",
        // }}
      >
        {/* <div className="wavesshape">
          {isDark ? (
            <img src={shape16Dark} alt="Shape" />
          ) : (
            <img src={shape16} alt="Shape" />
          )}
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <Swiper
                className="testimonial-style-one-carousel"
                direction={"horizontal"}
                loop={true}
                autoplay={true}
                pagination={{
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true,
                }}
                // Navigation arrows
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Keyboard, Autoplay, Pagination, Navigation]}
              >
                <div className="swiper-wrapper">
                  {/* Single item */}
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-style-one">
                      <div className="item">
                        <div className="content">
                          <div className="tm-review">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="provider">
                            <h4>Superb Banana chips </h4>
                          </div>
                          <p>
                            {`"Life Bytes banana chips bring back memories of my grandmother's kitchen in Kochi. The perfect balance of salt and crunch makes every bite irresistible. These authentic Kerala banana chips taste exactly like homemade ones - crispy, fresh, and absolutely delicious!"`}
                          </p>
                          <div className="tm-proivder-thumb">
                            <img src={food1} alt="Image Not Found" />
                            <img src={team10} alt="Image Not Found" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Single item */}
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-style-one">
                      <div className="item">
                        <div className="content">
                          <div className="tm-review">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="provider">
                            <h4>A must try Ghee Rice Murukk</h4>
                          </div>
                          <p>
                            {`"I've tried many murukku varieties, but Life Bytes ghee rice murukk is exceptional. The rich ghee flavor combined with perfectly spiced rice creates an addictive crunch. It's my go-to snack for evening tea time. Truly authentic Kerala taste!!"`}
                          </p>
                          <div className="tm-proivder-thumb">
                            <img src={food6} alt="Image Not Found" />
                            <img src={team11} alt="Image Not Found" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="testimonial-pagination">
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialV2;
