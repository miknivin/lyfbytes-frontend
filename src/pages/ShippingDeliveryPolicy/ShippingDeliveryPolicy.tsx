import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV5";

const ShippingDeliveryPolicyPage = () => {
  return (
    <LayoutV5 breadCrumb="shipping-policy" title="Shipping Policy">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="about-style-one-info">
              <h4 className="sub-heading">Our Commitment</h4>
              <h2 className="title">Ensuring Timely and Reliable Delivery</h2>
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1. Introduction</h3>
                <p>
                  At lyf bites, we strive to provide a seamless shopping
                  experience, including efficient and reliable shipping. We
                  partner with trusted third-party delivery services to ensure
                  your orders reach you safely and on time.
                </p>
              </section>
            </div>
            <div className="content mt-50">
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  2. Shipping Process
                </h3>
                <p>
                  Once your order is placed, it is processed within 1-2 business
                  days. We then hand over your package to our third-party
                  delivery partners, who handle the transportation and delivery
                  to your specified address.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  3. Third-Party Delivery Services
                </h3>
                <p>
                  We collaborate with reputable delivery companies to ensure
                  reliable service. Delivery times and tracking information may
                  vary depending on the third-party provider and your location.
                  You can view order status on our website
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Shipping Costs and Times
                </h3>
                <p>
                  Shipping costs are calculated at checkout based on your
                  location and the weight of your order. Estimated delivery
                  times range from 3-7 business days for domestic orders and
                  7-14 business days for international orders, subject to the
                  third-party carrier’s schedule.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  5. Contact Us
                </h3>
                <p>
                  For questions, complaints, or enquiries please contact us at:
                </p>
                <p style={{ fontSize: "1em", color: "#666", marginBottom: 20 }}>
                  <b>Email: </b>gm@lifefoods.in
                  <br />
                  <b>Phone: </b>+91 9847004200
                  <br />
                  <b>Address: </b>Life Bytes, c/o LIFEX FOODS INDIA PRIVATE
                  LIMITED, Building No. 47/1576/865, Pallithottam Junction,
                  Pallithottam P.O., Kollam-691006, Kerala, India
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </LayoutV5>
  );
};

export default ShippingDeliveryPolicyPage;
