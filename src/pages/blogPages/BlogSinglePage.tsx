import BlogSingleContent from "../../components/blog/BlogSingleContent";
import BodyWrapper from "../../components/classes/BodyWrapper";
import LayoutV6 from "../../components/layouts/LayoutV6";
import BlogData from "../../assets/jsonData/blog/BlogData.json";
import { useParams } from "react-router-dom";

const BlogSinglePage = () => {
  const { id } = useParams();
  const data = BlogData.find((blog: any) => blog.id === parseInt(id || "0"));

  return (
    <>
      <LayoutV6 breadCrumb="blog-single" title="Blog Single">
        {data && <BlogSingleContent blogInfo={data} />}
        {!data && <div>No Data Found</div>}
        <BodyWrapper />
      </LayoutV6>
    </>
  );
};

export default BlogSinglePage;
