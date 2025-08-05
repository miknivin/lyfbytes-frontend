import { Link } from "react-router-dom";
import handleSmoothScroll from "../utilities/handleSmoothScroll";

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    text?: string;
    tags?: string[] | undefined;
    price?: number;
    filterClass?: string[];
    delay?: string;
}

const SingleIsotopeContent = ({ food }: { food: DataType }) => {
    const { id, thumb, title, text, price, tags, delay } = food

    return (
        <>
            <div className="item" data-aos="fade-up" data-aos-delay={delay}>
                <div className="thumb">
                    <Link to={`/shop-single-thumb/${id}`}>
                        <img src={`/assets/img/menu/${thumb}`} alt="Thumb" width={600} height={600} />
                    </Link>
                </div>
                <div className="info">
                    <h4><Link to={`/shop-single-thumb/${id}`}>{title}</Link></h4>
                    <p>{text}</p>
                    <div className="food-cats">
                        {tags && tags.map((data, index) =>
                            <span key={index}>
                                {data}
                                {index < tags.length - 1 && ' / '}
                            </span>
                        )}
                    </div>
                    <div className="item-price">
                        <div className="left">
                            <span>Price</span>
                            <h5>${price?.toFixed(2)}</h5>
                        </div>
                        <div className="right">
                            <Link to="#" onClick={handleSmoothScroll}><i className="fa fa-heart" /></Link>
                        </div>
                    </div>
                    <div className="button">
                        <Link to={`/shop-single-thumb/${id}`}>Order Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleIsotopeContent;