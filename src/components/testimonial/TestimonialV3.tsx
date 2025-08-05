import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import food1 from "/assets/img/food/1.jpg"
import team10 from "/assets/img/team/10.jpg"
import food6 from "/assets/img/food/6.jpg"
import team11 from "/assets/img/team/11.jpg"

interface DataType {
    sectionClass?: string
}

const TestimonialV3 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`testimonial-style-one-area default-padding text-center ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: 'url(/assets/img/shape/4.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <Swiper
                                direction={"horizontal"}
                                loop={true}
                                autoplay={true}
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }}
                                className="testimonial-style-one-carousel"
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
                                                        <h4>Best Chicken Fry</h4>
                                                    </div>
                                                    <p>
                                                        {`"Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."`}
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
                                                        <h4>This pizza is so good</h4>
                                                    </div>
                                                    <p>
                                                        {`"Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."`}
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

                            {/* Navigation */}
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

export default TestimonialV3;