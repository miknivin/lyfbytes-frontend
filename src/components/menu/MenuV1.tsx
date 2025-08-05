import illustration2 from "/assets/img/illustration/2.png"
import shape9 from "/assets/img/shape/9.png"
import illustration13 from "/assets/img/illustration/13.png"
import illustration14 from "/assets/img/illustration/14.png"

import { Link } from "react-router-dom";

const MenuV1 = () => {
    return (
        <>
            <div className="menu-type-area overflow-hidden default-padding bottom-less bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Food Menu</h4>
                                <h2 className="title">Discover Our Menu</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        {/* Single Item */}
                        <div className="col-xl-4 col-md-6 menu-type-single mb-30">
                            <div className="menu-type-item active" data-aos="fade-up" data-aos-delay="100">
                                <div className="thumb">
                                    <img src={illustration2} alt="Image Not Found" />
                                    <img src={shape9} alt="Image Not Found" />
                                </div>
                                <div className="info">
                                    <h3>Breakfast</h3>
                                    <ul className="menu-type-list">
                                        <li>
                                            <h6>Breakfast casserole</h6>
                                            <div className="line-seperator" />
                                            <h6>$20</h6>
                                        </li>
                                        <li>
                                            <h6>Reek yogurt</h6>
                                            <div className="line-seperator" />
                                            <h6>$15</h6>
                                        </li>
                                        <li>
                                            <h6>Cottage cheese</h6>
                                            <div className="line-seperator" />
                                            <h6>$18</h6>
                                        </li>
                                    </ul>
                                    <Link to="/shop" className="btn mt-40 circle btn-sm btn-theme effect">Make Order</Link>
                                </div>
                            </div>
                        </div>

                        {/* Single Item */}
                        <div className="col-xl-4 col-md-6 menu-type-single mb-30">
                            <div className="menu-type-item" data-aos="fade-up" data-aos-delay="200">
                                <div className="thumb">
                                    <img src={illustration13} alt="Image Not Found" />
                                    <img src={shape9} alt="Image Not Found" />
                                </div>
                                <div className="info">
                                    <h3>Lunch</h3>
                                    <ul className="menu-type-list">
                                        <li>
                                            <h6>Buffalo Chicken Grain</h6>
                                            <div className="line-seperator" />
                                            <h6>$20</h6>
                                        </li>
                                        <li>
                                            <h6>Creamy Rotisserie</h6>
                                            <div className="line-seperator" />
                                            <h6>$15</h6>
                                        </li>
                                        <li>
                                            <h6>Ve ggie Mason</h6>
                                            <div className="line-seperator" />
                                            <h6>$18</h6>
                                        </li>
                                    </ul>
                                    <Link to="/shop" className="btn mt-40 circle btn-sm btn-theme effect">Make Order</Link>
                                </div>
                            </div>
                        </div>

                        {/* Single Item */}
                        <div className="col-xl-4 col-md-6 menu-type-single mb-30">
                            <div className="menu-type-item" data-aos="fade-up" data-aos-delay="400">
                                <div className="thumb">
                                    <img src={illustration14} alt="Image Not Found" />
                                    <img src={shape9} alt="Image Not Found" />
                                </div>
                                <div className="info">
                                    <h3>Dinner</h3>
                                    <ul className="menu-type-list">
                                        <li>
                                            <h6>Fried chicken</h6>
                                            <div className="line-seperator" />
                                            <h6>$20</h6>
                                        </li>
                                        <li>
                                            <h6>Pizza</h6>
                                            <div className="line-seperator" />
                                            <h6>$15</h6>
                                        </li>
                                        <li>
                                            <h6>Tossed salad</h6>
                                            <div className="line-seperator" />
                                            <h6>$18</h6>
                                        </li>
                                    </ul>
                                    <Link to="/shop" className="btn mt-40 circle btn-sm btn-theme effect">Make Order</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuV1;