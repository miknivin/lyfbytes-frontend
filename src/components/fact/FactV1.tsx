import illustration16 from "/assets/img/illustration/16.jpg";
import CountUp from "react-countup";
import SplitText from "../animation/SplitText.jsx";

const FactV1 = () => {
  return (
    <>
      <div className="fun-fact-style-one-area default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-6">
              <div className="fun-fact-style-one-items">
                <h2 className="split-heading-lyf">
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
                    PREMIUM QUALITY, GENUINE KERALA FLAVORS
                  </SplitText>
                </h2>
                <div className="fun-fact-style-one-content">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={10} enableScrollSpy />
                      </div>
                      <div className="operator">K</div>
                    </div>
                    <span className="medium">Daily Orders</span>
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={30} enableScrollSpy />
                      </div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Crunchy Snacks</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="thumb" data-aos="fade-right" data-aos-delay="100">
                <img src={illustration16} alt="Image Not Found" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactV1;
