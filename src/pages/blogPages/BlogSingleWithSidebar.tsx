import BlogSingleWithSidebarContent from "../../components/blog/BlogSingleWithSidebarContent";
import BodyWrapper from "../../components/classes/BodyWrapper";
import LayoutV5 from "../../components/layouts/LayoutV6";
import BlogData from "../../assets/jsonData/blog/BlogData.json";
import { useParams } from "react-router-dom";

const BlogSingleWithSidebarPage = () => {
  const { id } = useParams();
  const data = BlogData.find((blog) => blog.id === parseInt(id || "0"));

  return (
    <>
      <LayoutV5 title="Blog Sidebar" breadCrumb="blog-single-with-sidebar">
        {data && <BlogSingleWithSidebarContent blogInfo={data} />}
        {!data && <div>No Data Found</div>}
        <BodyWrapper />
      </LayoutV5>
    </>
  );
};

export default BlogSingleWithSidebarPage;
