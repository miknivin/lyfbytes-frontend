import about2 from "/assets/img/about/2.jpg"
import { Link } from "react-router-dom";

const AboutV2 = () => {
    return (
        <>
            <div className="about-style-two-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-two" data-aos="fade-up" data-aos-delay="100">
                                <img src={about2} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="about-style-two-info">
                                <h4 className="sub-heading">Welcome At</h4>
                                <h2 className="title">Restan Restaurant</h2>
                                <p>
                                    Codulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                                </p>
                                <Link className="btn btn-theme btn-md animation" to="/food-menu">Explore menu</Link>
                                <ul className="launch-time">
                                    <li data-aos="fade-up">
                                        <h4>Lunch</h4>
                                        <ul>
                                            <li>Saturday and Sunday</li>
                                            <li>Reservations from 12pm to 1.30pm</li>
                                        </ul>
                                    </li>
                                    <li data-aos="fade-up">
                                        <h4>Dinner</h4>
                                        <ul>
                                            <li>Thursday to Sunday</li>
                                            <li>Reservations from 6pm to 8.45pm</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;