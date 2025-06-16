import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    tag?: string;
    btnText?: string;
}

const SingleBlog2Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, tag, title, btnText } = blog

    return (
        <>
            <div className="home-blog-style-one-item">
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}`}>
                        <img src={`/assets/img/blog/${thumb}`} width={800} height={600} alt="Thumb" />
                    </Link>
                    <ul className="blog-meta">
                        <li>
                            <Link to="#">{tag}</Link>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className="info">
                        <h2 className="post-title">
                            <Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h2>
                        <Link to={`/blog-single-with-sidebar/${id}`} className="btn-read-more">{btnText} <i className="fas fa-long-arrow-right" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Column;