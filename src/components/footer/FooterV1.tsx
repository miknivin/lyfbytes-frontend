import { Link } from "react-router-dom";
import logo1 from "/assets/img/logo-1.png";
import SocialShareV1 from "../social/SocialShareV1";
import FooterNewsletter from "./FooterNewsletter";

const FooterV1 = () => {
  return (
    <>
      <footer className="bg-dark footer-style-one text-light">
        <div className="container">
          <div className="row">
            {/* Single Item */}
            <div className="col-lg-3 col-md-6 footer-item mt-50">
              <div className="f-item about">
                <img
                  style={{ height: "61px" }}
                  src={logo1}
                  alt="Image Not Found"
                />
                <p>
                  Discover culinary delights recipes and inspiration in our food
                  haven.
                </p>
                <ul className="opening-list">
                  <li>
                    Mon - Fri{" "}
                    <span className="text-end">8:00 AM - 6:00 PM</span>
                  </li>
                  <li>
                    Saturday <span className="text-end">9:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-lg-2 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
              <div className="f-item link">
                <h4 className="widget-title">Explore</h4>
                <ul>
                  {/* <li>
                    <Link to="/about-us">Company Profile</Link>
                  </li> */}
                  <li>
                    <Link to="/about-us">About</Link>
                  </li>
                  {/* <li>
                    <Link to="/contact">Help Center</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/contact">Career</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/about-us">Features</Link>
                  </li> */}
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms&Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/delivery-return">Return and Refund</Link>
                  </li>
                  <li>
                    <Link to="/shipping">Shipping</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-lg-3 col-md-6 footer-item mt-50">
              <div className="f-item contact">
                <h4 className="widget-title">Contact Info</h4>
                <ul className="contact-widget">
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      LIFEX FOODS INDIA PRIVATE LIMITED BUILDING NO 47/1576/865,
                      PALLITHOTTAM JUNCTION, Pallithottam P.O., Kollam- 691006,
                      Kerala GST. 32AAFCL9060K1ZC
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="content">
                      <a href="tel:9847004200">9847004200</a> <br />{" "}
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:name@email.com">gm@lifefoods.in</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Single Item */}
            <div className="col-lg-4 col-md-6 footer-item mt-50">
              <div className="f-item newsletter">
                <h4 className="widget-title">Newsletter</h4>
                <p>
                  Join our subscribers list to get the latest news and special
                  offers.
                </p>
                <FooterNewsletter />
                <div className="footer-socila-items mt-30">
                  <h4>Social Media: </h4>
                  <ul className="footer-social">
                    <SocialShareV1 />
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row align-center">
              <div className="col-lg-6">
                <p>
                  © Copyright {new Date().getFullYear()} LYFBITES. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
