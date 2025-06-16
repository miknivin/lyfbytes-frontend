import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    category?: string;
    date?: string;
    title?: string;
    delay?: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, date, title, category, delay } = blog

    return (
        <>
            <div className="home-blog-style-one-item" data-aos="fade-up" data-aos-delay={delay}>
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}`}>
                        <img src={`/assets/img/blog/${thumb}`} alt="Image not Found" width={800} height={600} />
                    </Link>
                    <ul className="blog-meta">
                        <li>
                            <Link to="#">{category}</Link>
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
                            <li><Link to="#">Md Sohag</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;