import { Link } from "react-router-dom";

interface Datatype {
    id: number;
    thumb: string;
}

const SingleGalleryV2 = ({ gallery }: { gallery: Datatype }) => {
    const { thumb } = gallery

    return (
        <>
            <div className="pf-item">
                <div className="gallery-style-one">
                    <div className="item">
                        <Link to={`/assets/img/portfolio/${thumb}`} className="popup-gallery">
                            <img src={`/assets/img/portfolio/${thumb}`} alt="Image Not Found" width={740} height={1010} />
                            <i className="fas fa-eye" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleGalleryV2;