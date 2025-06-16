import shape10 from "/assets/img/shape/10.png";
import illustration7 from "/assets/img/illustration/7.webp";
import illustration6 from "/assets/img/illustration/6.webp";
import illustration9 from "/assets/img/illustration/9.webp";
import { Link } from "react-router-dom";

const FeatureV2 = () => {
  return (
    <>
      <div className="feature-style-two-area default-padding bg-dark text-light">
        <div className="shape">
          <img src={shape10} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row">
            {/* Single item */}
            <div className="col-lg-5 feature-product-item">
              <Link
                to="/shop"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ backgroundImage: "url(/assets/img/shape/7.jpg)" }}
              >
                <div className="info">
                  <h2>Spicy CHANA MASALA</h2>
                  {/* <span className="btn circle btn-md btn-light animation">
                    Make an order
                  </span> */}
                </div>
                <div className="thumb">
                  <img src={illustration7} alt="Image Not Found" />
                  <div
                    className="offer"
                    style={{ backgroundImage: "url(/assets/img/shape/12.png)" }}
                  >
                    10% Off{" "}
                  </div>
                </div>
              </Link>
            </div>

            {/* Single item */}
            <div className="col-lg-7 feature-product-item">
              <Link
                to="/shop"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ backgroundImage: "url(/assets/img/shape/9.jpg)" }}
              >
                <div className="info">
                  <h2>MADURA SEVA</h2>
                  <div className="py-4"></div>
                  {/* <span className="btn circle btn-md btn-theme animation">
                    Make an order
                  </span> */}
                </div>
                <div className="thumb">
                  <img src={illustration6} alt="Image Not Found" />
                  {/* <div
                    className="offer"
                    style={{ backgroundImage: "url(/assets/img/shape/12.png)" }}
                  >
                    Best Deal
                  </div> */}
                </div>
              </Link>

              <Link
                to="/shop"
                data-aos="fade-up"
                data-aos-delay="400"
                style={{ backgroundImage: "url(/assets/img/shape/8.jpg)" }}
              >
                <div className="info">
                  <h2>PAKKA VADA</h2>
                  <div className="py-4"></div>
                  {/* <span className="btn circle btn-md btn-dark animation">
                    Make an order
                  </span> */}
                </div>
                <div className="thumb">
                  <img src={illustration9} alt="Image Not Found" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureV2;
