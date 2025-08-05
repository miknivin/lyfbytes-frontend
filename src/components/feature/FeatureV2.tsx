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
          <div className="row gap-3 gap-md-0">
            {/* Single item */}
            <div className="col-lg-5 feature-product-item">
              <Link
                to="/shop-single-thumb/684bce8e3086ec1d0a13d14a"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ backgroundImage: "url(/assets/img/shape/7.jpg)" }}
              >
                <div className="info">
                  <h2>Tomato Murukku</h2>
                  <span className="btn circle btn-md btn-light animation">
                    Make an order
                  </span>
                </div>
                <div className="thumb">
                  <img src={illustration7} alt="Image Not Found" />
                  {/* <div
                    className="offer"
                    style={{ backgroundImage: "url(/assets/img/shape/12.png)" }}
                  >
                    10% Off{" "}
                  </div> */}
                </div>
              </Link>
            </div>

            {/* Single item */}
            <div className="col-lg-7 feature-product-item">
              <Link
                to="/shop-single-thumb/684a81b17d8f44334a7c72e8"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ backgroundImage: "url(/assets/img/shape/9.jpg)" }}
              >
                <div className="info">
                  <h2>Sharkaravaratti</h2>
                  <div className="py-4"></div>
                  <span className="btn circle btn-md btn-theme animation">
                    Make an order
                  </span>
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
                to="/shop-single-thumb/684fec1e4c79c2acb46e2741"
                data-aos="fade-up"
                data-aos-delay="400"
                style={{
                  backgroundImage: "url(/assets/img/shape/8.jpg)",
                  marginTop: "15px",
                }}
              >
                <div className="info">
                  <h2>Jackfruit chips</h2>
                  <div className="py-4"></div>
                  <span className="btn circle btn-md btn-dark animation">
                    Make an order
                  </span>
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
