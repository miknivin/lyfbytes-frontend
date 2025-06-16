import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import BrandData from "../../assets/jsonData/brand/BrandData.json";

const BrandV1 = () => {
  return (
    <>
      <div className="brand-area overflow-hidden default-padding bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-heaidng mb-50">
                <h3>1k+ HAPPY STORES WITH US </h3>
              </div>
              <Swiper
                loop={true}
                slidesPerView={2}
                spaceBetween={30}
                autoplay={true}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1400: {
                    slidesPerView: 5,
                    spaceBetween: 60,
                  },
                }}
                className="brand-style-one-carousel"
                modules={[Keyboard, Autoplay]}
              >
                <div className="swiper-wrapper">
                  {BrandData.map((data: any) => (
                    <SwiperSlide key={data.id}>
                      <img
                        src={`/assets/img/brand/${data.thumb}`}
                        alt="Thumb"
                        width={500}
                        height={300}
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandV1;
