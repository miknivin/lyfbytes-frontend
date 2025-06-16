import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    tag?: string;
    date?: string;
    author?: string;
}

const SingleBlog3Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, title, tag, date, author } = blog

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
                        <h4 className="post-title">
                            <Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h4>
                        <ul className="meta-tags">
                            <li>{date}</li>
                            <li><Link to="#">{author}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;