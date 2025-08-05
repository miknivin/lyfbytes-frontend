import SocialShareV2 from '../social/SocialShareV2';
import icon10 from "/assets/img/icon/10.png";
import icon11 from "/assets/img/icon/11.png";
import iconFlag from "/assets/img/icon/flag.png";
import { Link } from "react-router-dom";

interface DataType {
    sectionClass?: string;
}

const HeaderTopV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`top-bar-area top-bar-style-one bg-theme text-light ${sectionClass}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7">
                            <ul className="item-flex">
                                <li>
                                    <a href="tel:91 9633332389">
                                        <img src={icon10} alt="Icon" /> Phone:91 9633332389
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:gm@lifefoods.in">
                                        <img src={icon11} alt="Icon" /> Email: gm@lifefoods.in
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 text-end">
                            <div className="item-flex">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={iconFlag} alt="Image Not Found" />
                                        English <i className="fas fa-angle-down" />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item" to="#">Spanish</Link></li>
                                        <li><Link className="dropdown-item" to="#">Arabic</Link></li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul>
                                        <SocialShareV2 />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV1;