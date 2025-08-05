import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Sample images and corresponding URLs for the banner
const slides = [
  //tomato murukku
  {
    image:
      "https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-07-10%20at%205.39.44%20PM%20(1).jpeg?updatedAt=1752488236794",
    url: "/shop-single-thumb/684bce8e3086ec1d0a13d14a",
  },
  //banana chips
  {
    image:
      "https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-07-10%20at%206.05.42%20PM.jpeg?updatedAt=1752488236853",
    url: "/shop-single-thumb/684a70f1935b6e99fc9d286f",
  },
  //cornflakes mixture
  {
    image:
      "https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-07-11%20at%2011.11.13%20AM.jpeg?updatedAt=1752488236724",
    url: "/shop-single-thumb/684bd3153086ec1d0a13d337",
  },
  //sharkara varatty
  {
    image:
      "https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-07-11%20at%2011.30.30%20AM.jpeg?updatedAt=1752488236567",
    url: "/shop-single-thumb/684a81b17d8f44334a7c72e8",
  },
  //kuzhalapam
  {
    image:
      "https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-07-11%20at%2011.28.13%20AM.jpeg?updatedAt=1752488236505",
    url: "/shop-single-thumb/6852704921d4ac2f835fa51b",
  },
];

const SwiperBanner = () => {
  useEffect(() => {
    // Ensure Swiper styles are applied after component mounts
    import("swiper/css").then(() => {
      import("swiper/css/navigation");
      import("swiper/css/pagination");
    });
  }, []);

  return (
    <div className="swiper-banner-container container-fluid p-0">
      <div className="position-relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link to={slide.url}>
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="img-fluid w-100"
                  style={{
                    minHeight: "140px",
                    maxHeight: "600px",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-nav-left">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
          <div
            className="swiper-pagination position-absolute bottom-0 start-50 translate-middle-x"
            style={{
              bottom: "10px",
            }}
          ></div>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperBanner;
