import shape16 from "/assets/img/shape/16.png"
import shape16Dark from "/assets/img/shape/16-dark-secondary.png"
import illustration18 from "/assets/img/illustration/18.png"
import illustration19 from "/assets/img/illustration/19.png"
import TimeV1 from "../time/TimeV1";

interface DataType {
    isDark?: boolean
}

const DiscountV1 = ({ isDark }: DataType) => {
    const time = new Date("Dec 24 2025")
    return (
        <>
            <div className="discount-area default-padding bg-theme bg-cover text-light overflow-hidden" style={{ backgroundImage: 'url(/assets/img/shape/15.jpg)' }}>

                <div className="wavesshape">
                    {isDark ?
                        <img src={shape16Dark} alt="Shape" /> : <img src={shape16} alt="Shape" />
                    }
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="discount-content">
                                <h4>Limited Offer</h4>
                                <h2 style={{ backgroundImage: 'url(/assets/img/shape/27.png)' }}>Delicious Burger</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted lorem the readable content of a page when looking
                                </p>
                                <div className="counter-class" data-date="2025-8-24 23:59:59">
                                    <TimeV1 expiryTimestamp={time} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="offer-item-thumb">
                                <img src={illustration18} alt="Image Not Found" />
                                <img src={illustration19} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiscountV1;