import LayoutV5 from "../../components/layouts/LayoutV5";
import Blog3ColumnContent from "../../components/blog/Blog3ColumnContent";
import BodyWrapper from "../../components/classes/BodyWrapper";

const Blog3ColumnPage = () => {
  return (
    <>
      <LayoutV5 breadCrumb="blog-3-column" title="Latest Blog">
        <Blog3ColumnContent />
        <BodyWrapper />
      </LayoutV5>
    </>
  );
};

export default Blog3ColumnPage;
