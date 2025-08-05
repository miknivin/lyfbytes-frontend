import BackgroundVideo from "./BackgroundVideo";
import { Link } from "react-router-dom";

const VideoV2 = () => {
    return (
        <>
            <div className="video-bg-area text-center text-light video-bg-live bg-fixed" style={{ backgroundImage: 'url(/assets/img/banner/3.jpg)' }}>
                <BackgroundVideo starts={5} videoId="hoiGV-N-2Gs" />
                <div className="video-bg-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h2 className="title">We Always serve the vaping hot and delicious foods</h2>
                                <Link className="btn btn-theme btn-md animation mt-30" to="/shop">Book a table</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoV2;