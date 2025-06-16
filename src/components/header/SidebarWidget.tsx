import { toast } from "react-toastify";
import SocialShareV3 from "../social/SocialShareV3";

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

const handleForm: FormEventHandler = (event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  form.reset();
  toast.success("Thanks For Your Message");
};

const SidebarWidgets: React.FC = () => {
  return (
    <>
      <div className="widget">
        <p>
          Arrived compass prepare an on as. Reasonable particular on my it in
          sympathize. Size now easy eat hand how. Unwilling he departure
          elsewhere dejection at. Heart large seems may purse means few blind.
        </p>
      </div>
      <div className="widget address">
        <div>
          <ul>
            <li>
              <div className="content">
                <p>Address</p>
                <strong>California, TX 70240</strong>
              </div>
            </li>
            <li>
              <div className="content">
                <p>Email</p>
                <strong>support@validtheme.com</strong>
              </div>
            </li>
            <li>
              <div className="content">
                <p>Contact</p>
                <strong>+44-20-7328-4499</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="widget newsletter">
        <h4 className="title">Get Subscribed!</h4>
        <form onSubmit={handleForm}>
          <div className="input-group stylish-input-group">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="form-control"
              name="email"
              autoComplete="off"
              required
            />
            <span className="input-group-addon">
              <button type="submit">
                <i className="fas fa-arrow-right" />
              </button>
            </span>
          </div>
        </form>
      </div>
      <div className="widget social">
        <ul className="link">
          <SocialShareV3 />
        </ul>
      </div>
    </>
  );
};

export default SidebarWidgets;
