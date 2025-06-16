"use client"
import shape24 from "/assets/img/shape/24.png"
import icon12 from "/assets/img/icon/12.png"
import thumb4 from "/assets/img/thumb/4.jpg"
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const WhyChooseV1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area default-padding-bottom bg-gray">
                <div className="container">
                    <div className="choose-us-style-one-items">
                        <div className="row align-center">
                            <div className="col-xl-6 choose-us-style-one-info">
                                <h2 className="title split-text">Enjoy your favorite food to the fullest</h2>
                                <p className="split-text">
                                    The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in Paris in 1765. The sign above his door advertised restoratives, or restaurants, referring to the soups and broths available within.
                                </p>
                                <ul className="list-style-one">
                                    <li>The food is amazing</li>
                                    <li>The atmosphere is perfect</li>
                                    <li>We offer something unique</li>
                                </ul>
                                <Link className="btn btn-theme btn-md animation mt-30" to="/food-menu">Book A Table</Link>
                            </div>
                            <div className="col-xl-6 text-light choose-us-style-one-content">
                                <div className="choose-us-style-one-item bg-cover bg-theme" style={{ backgroundImage: 'url(/assets/img/shape/7.jpg)' }}>
                                    <div className="fun-fact-style-one text-center">
                                        <div className="icon">
                                            <img src={icon12} alt="Image Not Found" />
                                        </div>
                                        <div className="counter">
                                            <div className="timer"> <CountUp end={500} /> </div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Menu and Dishes</span>
                                    </div>
                                </div>
                                <div className="choose-us-style-one-item">
                                    <div className="thumb">
                                        <img src={thumb4} alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="shape">
                            <img src={shape24} alt="Image Not Found" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;