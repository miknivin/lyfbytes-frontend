import { Link } from "react-router-dom";

const SocialShareV3 = () => {
    return (
        <>
            <li>
                <Link to="https://www.facebook.com" target="_blank">
                    <i className="fab fa-facebook-f" />
                </Link>
            </li>
            <li>
                <Link to="https://dribbble.com" target="_blank">
                    <i className="fab fa-dribbble" />
                </Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com" target="_blank">
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
            <li>
                <Link to="https://www.behance.com" target="_blank">
                    <i className="fab fa-behance" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV3;