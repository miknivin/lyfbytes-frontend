import { toast } from "react-toastify";

interface FormEventHandler {
  // eslint-disable-next-line no-unused-vars
  (event: React.FormEvent<HTMLFormElement>): void;
}

interface DataType {
  sectionClass?: string;
}

const ContactV1 = ({ sectionClass }: DataType) => {
  const handleForm: FormEventHandler = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    form.reset();
    toast.success("Thanks For Your Message");
  };

  return (
    <>
      <div
        className={`contact-style-one-area default-padding overflow-hidden ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-12">
              <div className="contact-form-style-one">
                <div className="heading text-center">
                  <h5 className="sub-title">Keep in touch</h5>
                  <h2 className="heading">Send us a Massage</h2>
                </div>
                <form className="contact-form" onSubmit={handleForm}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group my-3">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          type="text"
                          required
                          autoComplete="off"
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email*"
                          type="email"
                          required
                          autoComplete="off"
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control no-arrows"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          type="number"
                          required
                          autoComplete="off"
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <div className="form-group comments">
                        <textarea
                          className="form-control"
                          id="comments"
                          name="comments"
                          placeholder="Your Message *"
                          required
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="submit" name="submit" id="submit">
                        <i className="fa fa-paper-plane" /> Get in Touch
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1;
