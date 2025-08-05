import SocialShareV1 from '../social/SocialShareV1';
import { Link } from "react-router-dom";
import SkillProgress from '../progress/SkillProgress';
import SingleChefList from './SingleChefList';

interface DataType {
    activeClass?: string;
    memberThumb?: string;
    designation?: string;
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    skillProgress: {
        id?: number;
        title?: string;
        end?: number;
    }[];
    memberData: {
        // eslint-disable-next-line no-unused-vars
        map(arg0: (list: any) => React.JSX.Element): React.ReactNode;
        id?: number;
        listTitle?: string;
        memberInfo?: {
            id?: number;
            title?: string;
            info?: string;
            timeSpan?: string;
        }[] | undefined;
    }
}

const ChefDetailsContent = ({ teamInfo }: { teamInfo: DataType }) => {
    const { name, memberThumb, email, phone, skillProgress, address, memberData } = teamInfo

    return (
        <>
            <div className="chef-single-area bg-gray default-padding-top">
                <div className="container">
                    <div className="chef-content-top">
                        <div className="row align-center">
                            <div className="col-lg-5 left-info">
                                <div className="thumb" data-aos="fade-up">
                                    <img src={`/assets/img/team/${memberThumb}`} alt="Thumb" width={600} height={800} />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info pl-80 pl-md-15 pl-xs-15" data-aos="fade-down" data-aos-delay="100">
                                <h2>{name}</h2>
                                <p>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from.
                                </p>
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt" />
                                        <p>
                                            {address}
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope" />
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone-alt" />
                                        <a href={`tel:${phone}`}>{phone}</a>
                                    </li>
                                </ul>
                                <div className="social">
                                    <Link className="btn circle btn-sm btn-theme animation" to="/contact">Contact Me</Link>
                                    <div className="share-link">
                                        <i className="fas fa-share-alt" />
                                        <ul>
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-info bg-light default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="chef-single-list">
                                    {memberData.map(list =>
                                        <SingleChefList list={list} key={list.id} />
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill-items">
                                    <h3>Personal Skills</h3>
                                    {skillProgress.map(skill =>
                                        <SkillProgress skill={skill} key={skill.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefDetailsContent;