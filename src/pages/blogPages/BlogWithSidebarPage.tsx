import BlogWithSidebarContent from "../../components/blog/BlogWithSidebarContent";
import BodyWrapper from "../../components/classes/BodyWrapper";
import LayoutV5 from "../../components/layouts/LayoutV6";

const BlogWithSidebarPage = () => {
  return (
    <>
      <LayoutV5 breadCrumb="blog-with-sidebar" title="Latest Blog">
        <BlogWithSidebarContent sectionClass="default-padding" />
        <BodyWrapper />
      </LayoutV5>
    </>
  );
};

export default BlogWithSidebarPage;
