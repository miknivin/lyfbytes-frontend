import shape7 from "/assets/img/shape/7.png";
import thumb5 from "/assets/img/thumb/5.jpg";

const AboutV3 = () => {
  return (
    <>
      <div className="about-style-three-area default-padding-bottom">
        <div className="container container-stage">
          <div className="about-style-three-items bg-gray-secondary">
            <div className="row">
              <div className="col-xl-4">
                <div className="about-style-three-content text-center">
                  <img src={shape7} alt="Image Not Found" />
                  <h2>Welcome To Our Luxury Restaurant</h2>
                  <p>
                    The first restaurant proprietor is believed to have been one
                    A. Boulanger, a soup vendor, who opened his business in
                    Paris in 1765. The sign above his door advertised
                    restoratives, or restaurants, referring to the soups and
                    broths available within.
                  </p>
                  <div className="contact-card-one">
                    <a href="tel:9847004200">
                      <div className="icon">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="info">
                        <span>HOTLINE 24/7</span>
                        <h4>+473337890</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="about-style-one-thumb">
                  <img src={thumb5} alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div
                  className="opening-hours-style-one bg-theme text-light bg-cover"
                  style={{ backgroundImage: "url(/assets/img/shape/8.png)" }}
                >
                  <h2>Opening Hours</h2>
                  <ul>
                    <li>
                      <span> Saturday :</span>
                      <div className="text-right"> 6.00 am - 12.00 pm </div>
                    </li>
                    <li>
                      <span> Sunday :</span>
                      <div className="text-right"> 8.30 am - 11.00 pm </div>
                    </li>
                    <li>
                      <span> Monday :</span>
                      <div className="text-right"> 9.00 am - 10.30 pm </div>
                    </li>
                    <li>
                      <span> Tuesday :</span>
                      <div className="text-right"> 8.00 am - 12.00 pm </div>
                    </li>
                    <li>
                      <span> Wednesday :</span>
                      <div className="text-right"> 9.45 am - 10.00 pm </div>
                    </li>
                    <li>
                      <span> Thursday :</span>
                      <div className="pull-right"> 8.15 am - 12.00 pm </div>
                    </li>
                    <li>
                      <span> Friday : </span>
                      <div className="pull-right closed"> Closed </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV3;
