const ContactPageContent = () => {
  return (
    <>
      <div className="maps-area overflow-hidden">
        <div className="contact-style-one-items">
          <div className="container">
            <div className="contact-style-one-box mt-5">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="contact-style-one-info">
                    <ul>
                      <li>
                        <div className="content">
                          <h5 className="title fs-2">Contact number</h5>
                          <a href="tel:9847004200" className="fs-5 fw-100">
                            9847004200
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <h5 className="title fs-2">Our Location</h5>
                          <p className="fs-5 fw-100">
                            LIFEX FOODS INDIA PRIVATE LIMITED BUILDING NO
                            47/1576/865, <br /> PALLITHOTTAM JUNCTION,
                            Pallithottam P.O., Kollam-691006, Kerala GST.
                            32AAFCL9060K1ZC
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <h5 className="title fs-2">Official Email</h5>
                          <a href="gm@lifefoods.in" className="fs-5 fw-100">
                            gm@lifefoods.in
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="google-maps">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.1234567890123!2d76.614567!3d8.893456!2m3!1f0!2f0!3f0!3m2!1i1024!2i894!4f13.1!3m3!1m2!1s0x3b05a8f9a9b9b9b9%3A0x1234567890abcdef!2sLIFEX%20FOODS%20INDIA%20PRIVATE%20LIMITED%20BUILDING%20NO%2047%2F1576%2F865%2C%20PALLITHOTTAM%20JUNCTION%2C%20Pallithottam%20P.O.%2C%20Kollam-691006%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1698765432!5m2!1sen!2sin"
                      width="100%"
                      height={600}
                      style={{ border: 0 }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageContent;
