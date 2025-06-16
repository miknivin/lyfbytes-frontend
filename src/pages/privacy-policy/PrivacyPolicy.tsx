import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV5";

const PrivacyPolicyPage = () => {
  return (
    <LayoutV5 breadCrumb="privacy-policy" title="Privacy Policy">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="about-style-one-info">
              <h4 className="sub-heading">Our Commitment</h4>
              <h2 className="title">Protecting Your Privacy is Our Priority</h2>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Introduction
                </h3>
                <p>
                  Lyf Bytes, a subsidiary of Life Foods, accessible at
                  lifefoods.in, is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, share, and
                  protect your personal information when you use our website to
                  purchase snack items. By using our services, you consent to
                  the practices described in this policy.
                </p>
              </section>
            </div>
            <div className="content mt-50">
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Information We Collect
                </h3>
                <p>
                  We collect information you provide, such as your name, email
                  address, and browsing data, to enhance your experience and
                  provide our services.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Cookies and Tracking Technologies
                </h3>
                <ul>
                  <li>
                    To process and fulfill your orders, including payment
                    processing and delivery.
                  </li>
                  <li>
                    To manage your user account and provide customer support.
                  </li>
                  <li>
                    To send you order confirmations, updates, and promotional
                    communications (you may opt out of marketing emails at any
                    time).
                  </li>
                  <li>
                    To improve our website, products, and services through
                    analytics and user feedback.
                  </li>
                  <li>
                    To comply with legal obligations and prevent fraudulent
                    activities.
                  </li>
                </ul>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Sharing Your Information
                </h3>
                <p>We may share your information with:</p>
                <ul>
                  <li>
                    <b>Service Providers:</b>Third parties such as payment
                    gateways, shipping companies, and IT service providers who
                    assist in operating our website and fulfilling orders.
                  </li>
                  <li>
                    <b>Legal Authorities:</b> When required by law, such as to
                    comply with court orders or regulatory requirements.
                  </li>
                  <li>
                    <b> Business Transfers:</b>In the event of a merger,
                    acquisition, or sale of assets, your information may be
                    transferred to the acquiring entity.
                  </li>
                </ul>
                <p>
                  We do not sell your personal information to third parties for
                  marketing purposes.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Cookies and Tracking Technologies
                </h3>
                <p>
                  Our website may use cookies and similar technologies to
                  enhance your experience, track usage, and deliver personalized
                  content. Cookies are small data files stored on your device.
                  You can manage cookie preferences through your browser
                  settings, but disabling cookies may affect website
                  functionality.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Data Security
                </h3>
                <p>
                  We implement reasonable security measures, such as encryption
                  and secure servers, to protect your personal information from
                  unauthorized access, loss, or misuse. However, no online
                  transmission is completely secure, and we cannot guarantee
                  absolute security.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Your Rights
                </h3>
                <p>
                  Under applicable laws, including the Digital Personal Data
                  Protection Act, 2023, you have the right to:
                </p>
                <ul>
                  <li>Access the personal information we hold about you.</li>
                  <li>Request corrections to inaccurate or incomplete data.</li>
                  <li>
                    Request deletion of your data, subject to legal obligations.
                  </li>
                  <li>Opt out of marketing communications.</li>
                  <li>
                    Withdraw consent for data processing, where applicable.
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the details
                  below. We will respond to your request within the timeframes
                  required by law.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Changes to This Privacy Policy
                </h3>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. Updates will
                  be posted on our website with a revised “Last Updated” date.
                  Continued use of our services after changes are posted
                  constitutes acceptance of the revised policy.
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Contact Us
                </h3>
                <p>
                  For any privacy-related questions, please reach out to us at{" "}
                  <a
                    href="mailto:gm@lifefoods.in"
                    className="text-blue-600 hover:underline"
                  >
                    gm@lifefoods.in
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </LayoutV5>
  );
};

export default PrivacyPolicyPage;
