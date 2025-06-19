import { Link } from "react-router-dom";

const SocialShareV1 = () => {
  return (
    <div className="d-flex gap-2">
      <li>
        <Link
          to="https://www.instagram.com/lifexbytes/?next=%2Flovazeinners%2F"
          target="_blank"
          className="bg-light p-2 text-dark rounded-circle d-flex justify-content-center align-items-center"
        >
          <i className="fab fa-instagram" />
        </Link>
      </li>
      {/* <li>
        <Link
          className="bg-light p-2 text-dark rounded-circle d-flex justify-content-center align-items-center"
          to="https://dribbble.com"
          target="_blank"
        >
          <i className="fab fa-dribbble" />
        </Link>
      </li> */}
      <li>
        <Link
          className="bg-light p-2 text-dark rounded-circle d-flex justify-content-center align-items-center"
          to="https://www.facebook.com/lifexbytes/"
          target="_blank"
        >
          <i className="fab fa-facebook"></i>
        </Link>
      </li>
    </div>
  );
};

export default SocialShareV1;
