import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Isotope from 'isotope-layout';
import { PhotoProvider, PhotoView } from "react-photo-view";
import GalleryV2Data from "../../assets/jsonData/gallery/GalleryV2Data.json"

const IsotopeGallery = () => {

    const galleryRef = useRef(null);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const totalImages = GalleryV2Data.length;

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (loadedImagesCount === totalImages && galleryRef.current) {
            const iso = new Isotope(galleryRef.current, {
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
            });

            setTimeout(() => {
                iso.layout();
            }, 500);

            return () => {
                iso.destroy();
            };
        }
    }, [loadedImagesCount, totalImages]);

    return (
        <>
            <div className="gallery-content-items">
                <div id="portfolio-grid" className="gallery-items colums-3" ref={galleryRef}>
                    <PhotoProvider
                        speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        {GalleryV2Data.map(gallery =>
                            <div className="pf-item grid-item" data-aos="fade-up" data-aos-delay="100" key={gallery.id}>
                                <div className="gallery-style-one">
                                    <div className="item">
                                        <img src={`/assets/img/portfolio/${gallery.thumb}`} alt="Image Not Found" width={600} height={1000} onLoad={handleImageLoad} />
                                        <Link to="#" className="popup-gallery">
                                            <PhotoView src={`/assets/img/portfolio/${gallery.thumb}`}>
                                                <i className="fas fa-eye" />
                                            </PhotoView>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </PhotoProvider>
                </div>
            </div>
        </>
    );
};

export default IsotopeGallery;