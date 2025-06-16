import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV5";

const DeliveryReturnPage = () => {
  return (
    <LayoutV5 breadCrumb="delivery-return" title="Delivery & Returns">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="about-style-one-info">
              <h4 className="sub-heading">Our Policy</h4>

              <h2 className="title">Returns and Refunds Policy</h2>
              <p>
                Lyf Bytes, a subsidiary of Life Foods, accessible at
                lifefoods.in, is dedicated to your satisfaction with our snack
                items. Due to the perishable nature of our products, this Return
                and Refund Policy outlines specific conditions for returning
                products and requesting refunds. Please read it.
              </p>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Eligibility for Returns
                </h3>
                <p>
                  You may return snack items purchased from lifefoods.in only
                  under the following conditions:
                </p>
                <ul className="tag-list">
                  <li>To be eligible for a return, the product must be:</li>
                  <ul
                    style={{
                      listStyleType: "disc !important",
                      marginLeft: 20,
                      color: "#000",
                      fontSize: "1em",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>
                      The product is damaged, defective, or spoiled upon
                      delivery.
                    </li>
                    <li>
                      The product is incorrect or different from what you
                      ordered.
                    </li>
                    <li>
                      You must initiate the return within 7 days of delivery.
                    </li>
                  </ul>
                </ul>
              </section>
            </div>
            <div className="content mt-50">
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  To initiate a return, follow these steps:
                </h3>
                <ul className="tag-list">
                  <li>
                    Contact our customer support team at gm@lifefoods.in or +91
                    9847004200 within 7 days of delivery, providing your order
                    number, reason for return, and photos of the product (e.g.,
                    showing damage or incorrect item).
                  </li>
                  <li>
                    We will provide a return authorization and instructions,
                    including a return shipping address or pickup arrangement.
                  </li>
                  <li>
                    Package the product securely in its original, unopened
                    packaging and ship it back to us. For eligible returns
                    (e.g., defective or incorrect items), Lyf Bytes will cover
                    return shipping costs.
                  </li>
                </ul>
                <p>
                  Once we receive and inspect the returned product, we will
                  notify you via email or WhatsApp of the approval or rejection
                  of your return.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Refund Process
                </h3>
                <p>
                  If your return is approved, we will process your refund within
                  7-14 business days to the original payment method used for the
                  purchase. The refund will include the cost of the product and
                  applicable taxes, excluding any original shipping fees unless
                  the return is due to our error (e.g., defective or incorrect
                  product). You will receive a confirmation email once the
                  refund is processed.
                </p>
                <p>
                  If you do not receive your refund within the specified
                  timeframe, please contact us at gm@lifefoods.in.
                </p>
              </section>
              {/* <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Refund Process
                </h3>
                <ul className="tag-list">
                  <li>
                    Once we receive and inspect the returned product, we will
                    notify you of the approval or rejection of your refund.
                  </li>
                  <li>
                    If approved, your refund will be processed within 3-5
                    business days.
                  </li>
                  <li>
                    Refunds will be issued through the original payment method
                    or via bank transfer, depending on your preference.
                  </li>
                </ul>
              </section> */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Non-Returnable Items
                </h3>
                <p>
                  Due to the perishable nature of our snack items and strict
                  hygiene standards, the following are non-returnable unless
                  defective, spoiled, or incorrect:
                </p>
                <ul>
                  <li>
                    Opened or partially consumed snack items (e.g., banana
                    chips, jackfruit chips).
                  </li>
                  <li>
                    Products returned without original, unopened packaging or
                    proof of purchase.
                  </li>
                  <li>
                    Products damaged due to improper handling or storage by the
                    customer.
                  </li>
                </ul>
              </section>
              {/* <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  6. Exchanges
                </h3>
                <p>
                  At this time, Sytro does not offer exchanges. If you wish to
                  replace an item, please return the original product and place
                  a new order.
                </p>
              </section> */}
              {/* <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  7. Damaged or Defective Products
                </h3>
                <p>
                  If you receive a damaged or defective product, please contact
                  us immediately. We will arrange for a replacement or refund at
                  no additional cost to you.
                </p>
              </section> */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  8. Contact Us
                </h3>
                <p>
                  For questions, concerns, or return requests regarding this
                  Return and Refund Policy, please contact us at:
                </p>
                <p style={{ fontSize: "1em", color: "#666", marginBottom: 20 }}>
                  <b>Email: </b>gm@lifefoods.in <br />
                  <b>Phone: </b>+91 9847004200
                  <br />
                  <b>Address: </b>Lyf Bytes, c/o LIFEX FOODS INDIA PRIVATE
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

export default DeliveryReturnPage;
