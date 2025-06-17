import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import LayoutV5 from "../../components/layouts/LayoutV5";
import NotFoundContent from "../../components/NotFound/NotFoundContent";

const NotFoundPage = () => {
  return (
    <>
      <LayoutV5>
        <BreadCrumb title="Error Page" breadCrumb="not-found" />
        <NotFoundContent />
      </LayoutV5>
    </>
  );
};

export default NotFoundPage;
