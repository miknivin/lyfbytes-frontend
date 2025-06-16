import { Link } from "react-router-dom";

interface DataType {
    icon?: string;
    bgImage?: string;
    title?: string;
    text?: string;
}

const SingleServiceV1 = ({ service }: { service: DataType }) => {
    const { icon, bgImage, title, text } = service

    return (
        <>
            <div className="services-style-one bg-cover" style={{ backgroundImage: `url(/assets/img/service/${bgImage})` }}>
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <h4><Link to="/shop">{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleServiceV1;