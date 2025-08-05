import ContactPageContent from "../../components/contact/ContactPageContent";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV5 from "../../components/layouts/LayoutV5";

const ContactPage = () => {
  return (
    <>
      <LayoutV5 title="Contact Us" breadCrumb="Contact">
        <ContactPageContent />
        <ContactV1 />
      </LayoutV5>
    </>
  );
};

export default ContactPage;
