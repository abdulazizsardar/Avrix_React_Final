import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleBlog3Column = ({ blog }) => {
    const { thumb2, author, date, title, icon } = blog

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link to="/blog-single-sidebar#"><img src={`/img/blog/${thumb2}`} alt="Image Not Found" /></Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link to="#">{author}</Link></li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h2 className="post-title"><Link to="/blog-single-sidebar#">{title}</Link></h2>
                    <Link to="/blog-single-sidebar#" className="button-regular">
                        Continue Reading <i className={icon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;