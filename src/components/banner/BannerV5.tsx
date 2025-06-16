import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import BackgroundVideo from "../videos/BackgroundVideo";

interface DataType {
    isDark?: boolean
}

const BannerV5 = ({ isDark }: DataType) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="banner-style-five-area text-center bg-gray" style={{
                backgroundImage: `url(${isDark ? "/assets/img/shape/20-light.png" : "/assets/img/shape/20.png"
                    })`,
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="content">
                                <h2 data-aos="fade-up" data-aos-delay="300">The <strong>Great</strong> Restaurant</h2>
                                <div className="curve-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                        <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z" />
                                        <text><textPath href="#textPath">Best Food Since - 1865</textPath></text>
                                    </svg>
                                    <Link to="#" className="popup-youtube" onClick={() => setOpen(true)}>
                                        <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-style-five-thumb bg-cover video-bg-live">
                    <BackgroundVideo starts={103} videoId="uMAbWsMnKYk" />
                </div>
            </div>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="NX7koN9Y2Ys" onClose={() => setOpen(false)} />
        </>
    );
};

export default BannerV5;