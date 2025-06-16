import LayoutV5 from "../../components/layouts/LayoutV5";
import Blog2ColumnContent from "../../components/blog/Blog2ColumnContent";
import BodyWrapper from "../../components/classes/BodyWrapper";

const Blog2ColumnPage = () => {
  return (
    <>
      <LayoutV5 breadCrumb="blog-2-column" title="Latest Blog">
        <BodyWrapper />
        <Blog2ColumnContent />
      </LayoutV5>
    </>
  );
};

export default Blog2ColumnPage;
