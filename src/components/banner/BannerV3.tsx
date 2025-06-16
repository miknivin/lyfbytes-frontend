import BackgroundVideo from "../videos/BackgroundVideo";

const BannerV3 = () => {
    return (
        <>
            <div className="banner-style-three-area text-light text-center video-bg-live bg-cover" style={{ backgroundImage: 'url(/assets/img/banner/2.jpg)' }}>
                <BackgroundVideo starts={103} videoId={'uMAbWsMnKYk'} />
                <div className="banner-style-three-content shadow dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <h4 data-aos="fade-up" data-aos-delay="100">The Great</h4>
                                <h2 data-aos="fade-up" data-aos-delay="300">Restaurant</h2>
                                <div className="box mt-40" data-aos="fade-up" data-aos-delay="600">
                                    <span>Since</span>
                                    <h3>1856</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV3;