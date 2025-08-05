import about1 from "/assets/img/about/1.jpg";
import SplitText from "../animation/SplitText.jsx";

const AboutV1 = () => {
  return (
    <>
      <div className="about-style-one-area default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-6">
              <div className="thumb-style-one">
                <img
                  src={about1}
                  alt="Image Not Found"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
                <div
                  className="contact-card-one"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <a href="tel:9847004200">
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="info">
                      <span>Contact us</span>
                      <h4>9847004200</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="about-style-one-info">
                <h4 className="sub-heading">Our Story</h4>
                <h2 className="title">
                  <SplitText
                    delay={10}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={() => {}}
                  >
                    PRESERVING KERALA'S CULINARY HERITAGE
                  </SplitText>
                </h2>
                <div className="content mt-50">
                  <p>
                    <SplitText
                      delay={5}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                      onLetterAnimationComplete={() => {}}
                    >
                      Founded by Ibrahim Musaliar and Visakh Radhakrishnan, Life
                      Bytes emerged from a simple mission: to bridge the gap
                      between authentic Kerala traditional snacks and modern
                      convenience. We recognized that genuine, tasty, and
                      healthy Kerala snacks were becoming increasingly rare in
                      today's market, prompting us to preserve our culinary
                      heritage through time-tested recipes.
                    </SplitText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV1;
