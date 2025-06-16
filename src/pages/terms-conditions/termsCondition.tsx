import LayoutV5 from "../../components/layouts/LayoutV5";
import { Link } from "react-router-dom";
export default function TermsConditionsPage() {
  return (
    <LayoutV5 breadCrumb="terms-conditions" title="Terms & Conditions">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="about-style-one-info">
              <h4 className="sub-heading">Our Terms</h4>

              <h2 className="title">Terms and Conditions</h2>
              <section className="mb-8">
                {/* <h3 className="text-xl font-semibold text-white mb-4">
                  1. Website Usage
                </h3> */}
                <p>
                  Welcome to Lyf Bytes, a subsidiary of Life Foods, accessible
                  at lifefoods.in. By using our website to purchase snack items,
                  you agree to these Terms and Conditions. Please read them
                  carefully.
                </p>
              </section>
            </div>
            <div className="content mt-50">
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  1. Intellectual Property
                </h3>
                <ul className="tag-list">
                  <li>
                    All content on the Lyf Bytes website, including but not
                    limited to logos, product images, graphics, text, and
                    designs, is owned by or licensed to Lyf Bytes or its parent
                    company, Life Foods.
                  </li>
                  <li>
                    You may not copy, reproduce, distribute, or create
                    derivative works from our content without prior written
                    permission, except for personal, non-commercial use.
                    Unauthorized use may violate copyright, trademark, and other
                    applicable laws.
                  </li>
                </ul>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  2. Limitation of Liability
                </h3>
                <p>
                  To the fullest extent permitted by law, Lyf Bytes, Life Foods,
                  and their affiliates shall not be liable for any indirect,
                  incidental, special, or consequential damages arising from
                  your use of our website or products, including but not limited
                  to loss of profits, data, or goodwill. Our total liability for
                  any claim shall not exceed the amount you paid for the
                  product(s) giving rise to the claim. We are not responsible
                  for delays or failures due to circumstances beyond our
                  control, such as shipping delays, natural disasters, or
                  technical issues.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  3. Governing Law
                </h3>
                <p>
                  These Terms and Conditions are governed by and construed in
                  accordance with the laws of the State of Kerala, India,
                  without regard to its conflict of law principles. You agree to
                  submit to the exclusive jurisdiction of the courts located in
                  Kollam, Kerala, for any legal actions arising from these
                  terms.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Payment Terms
                </h3>
                <ul className="tag-list">
                  <li>
                    All purchases on the Lyf Bytes website must be paid through
                    approved payment methods, including credit cards, debit
                    cards, or digital wallets, as displayed at checkout.
                  </li>
                  <li>
                    Prices are subject to change without notice. Payment is due
                    at the time of order placement. Refunds, if applicable, are
                    processed per our refund policy, available on our website.
                    Non-payment or chargebacks may result in order cancellation
                    or account suspension.
                  </li>
                  <li>
                    All prices are listed in Indian Rupees (INR) and are
                    inclusive of applicable taxes.
                  </li>
                </ul>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  5. Shipping and Delivery
                </h3>
                <ul className="tag-list">
                  <li>
                    Please refer to our{" "}
                    <Link
                      to="/delivery-return"
                      className="text-blue-600 hover:underline"
                    >
                      Shipping Policy
                    </Link>{" "}
                    for details about shipping timelines, delivery areas, and
                    handling of delays or lost packages.
                  </li>
                  <li>
                    We strive to deliver your orders promptly, but we are not
                    responsible for delays caused by unforeseen circumstances
                    (e.g., natural disasters, courier delays).
                  </li>
                </ul>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  6. User Accounts
                </h3>
                <ul className="tag-list">
                  <li>
                    To place an order, you must create and log in to a user
                    account on the Lyf Bytes website.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account credentials and for all activities under your
                    account
                  </li>
                  <li>
                    Lyf Bytes reserves the right to suspend or terminate
                    accounts for violations of these terms, including providing
                    false information, unauthorized use, or fraudulent activity.
                  </li>
                </ul>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  7. Dispute Resolution
                </h3>
                <ul className="tag-list">
                  <li>
                    Any disputes arising from these Terms or your use of Lyf
                    Bytes’ website or products shall be resolved through
                    good-faith negotiation.
                  </li>
                  <li>
                    If unresolved, disputes will be submitted to binding
                    arbitration in Kollam, Kerala, under the Arbitration and
                    Conciliation Act, 1996
                  </li>
                  <li>
                    Each party shall bear its own costs, and the arbitrator’s
                    decision shall be final. This provision does not preclude
                    seeking injunctive relief in court.
                  </li>
                </ul>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  8. Updates to Terms
                </h3>
                <ul className="tag-list">
                  <li>
                    Lyf Bytes may update these Terms and Conditions from time to
                    time. Changes will be posted on our website with an updated
                    “Last Updated” date.
                  </li>
                  <li>
                    Continued use of our website or services after changes are
                    posted constitutes acceptance of the revised terms. We
                    encourage you to review these terms periodically.
                  </li>
                </ul>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  9. Contact Us
                </h3>
                <p>
                  For questions, complaints, or inquiries about these Terms or
                  our services, please contact us at:
                </p>
                <p style={{ fontSize: "1em", color: "#666", marginBottom: 20 }}>
                  <b>Email: </b>gm@lifefoods.in
                  <br />
                  <b>Phone: </b>++91 9847004200
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
}
