import BlogStandardContent from "../../components/blog/BlogStandardContent";
import LayoutV5 from "../../components/layouts/LayoutV6";

const BlogStandardPage = () => {
  return (
    <>
      <LayoutV5 title="Blog Standard" breadCrumb="blog-standard">
        <BlogStandardContent sectionClass="default-padding" />
      </LayoutV5>
    </>
  );
};

export default BlogStandardPage;
