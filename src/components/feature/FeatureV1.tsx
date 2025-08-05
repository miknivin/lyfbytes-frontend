import icon6 from "/assets/img/icon/6.png"
import icon7 from "/assets/img/icon/7.png"
import icon8 from "/assets/img/icon/8.png"
import icon9 from "/assets/img/icon/9.png"

interface DataType {
    sectionClass?: string
}

const FeatureV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`feature-style-one-area default-padding-top overflow-hidden ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">

                        {/* Single Item */}
                        <div className="col-lg-3 col-md-6 feature-one-single">
                            <div className="feature-style-one-item" data-aos="fade-up" data-aos-delay="200">
                                <img src={icon6} alt="Image Not Found" />
                                <h4>Best Quality Food</h4>
                                <p>
                                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                </p>
                            </div>
                        </div>

                        {/* Single Item */}
                        <div className="col-lg-3 col-md-6 feature-one-single">
                            <div className="feature-style-one-item" data-aos="fade-down" data-aos-delay="200">
                                <img src={icon7} alt="Image Not Found" />
                                <h4>Home delivery</h4>
                                <p>
                                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                </p>
                            </div>
                        </div>

                        {/* Single Item */}
                        <div className="col-lg-3 col-md-6 feature-one-single">
                            <div className="feature-style-one-item" data-aos="fade-up" data-aos-delay="200">
                                <img src={icon8} alt="Image Not Found" />
                                <h4>Real Taste</h4>
                                <p>
                                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                </p>
                            </div>
                        </div>

                        {/* Single Item */}
                        <div className="col-lg-3 col-md-6 feature-one-single">
                            <div className="feature-style-one-item" data-aos="fade-down" data-aos-delay="200">
                                <img src={icon9} alt="Image Not Found" />
                                <h4>Traditional food</h4>
                                <p>
                                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;