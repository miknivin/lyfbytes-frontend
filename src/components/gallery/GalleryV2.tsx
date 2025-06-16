import IsotopeGallery from "./IsotopeGallery";

const GalleryV2 = () => {
    return (
        <>
            <div className="gallery-style-two-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Food Item</h4>
                                <h2 className="title">Our Restaurant Gallery</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <IsotopeGallery />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryV2;