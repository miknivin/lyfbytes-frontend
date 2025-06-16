import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumbFull?: string;
    date?: string;
    title?: string;
    text?: string;
}

const SingleBlogStandard = ({ blog }: { blog: DataType }) => {
    const { id, thumbFull, date, title, text } = blog

    return (
        <>
            <div className="item">
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}`}>
                        <img src={`/assets/img/blog/${thumbFull}`} alt="Image Not Found" width={1500} height={750} />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link to="#"><i className="far fa-calendar-alt" /> {date}</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="far fa-user-circle" /> Admin</Link>
                            </li>
                        </ul>
                    </div>
                    <h2 className="title">
                        <Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                    </h2>
                    <p>{text}</p>
                    <Link className="btn mt-10 btn-md circle btn-theme animation" to={`/blog-single-with-sidebar/${id}`}>Continue Reading</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogStandard;