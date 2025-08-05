import { Link } from "react-router-dom";
import SocialShareV1 from "../social/SocialShareV1";

interface DataType {
    memberThumb?: string;
    designation?: string;
    name?: string;
    id?: number;
    delay?: string
}

const SingleChefV1 = ({ team }: { team: DataType }) => {
    const { id, memberThumb, designation, name, delay } = team

    return (
        <>
            <div className="chef-style-one-item" data-aos="fade-up" data-aos-delay={delay}>
                <div className="thumb">
                    <img src={`/assets/img/team/${memberThumb}`} alt="Image Not Found" width={600} height={800} />
                    <ul className="chef-one-social">
                        <SocialShareV1 />
                    </ul>
                </div>
                <div className="info">
                    <h4><Link to={`/chef-details/${id}`}>{name}</Link></h4>
                    <span>{designation}</span>
                </div>
            </div>
        </>
    );
};

export default SingleChefV1;