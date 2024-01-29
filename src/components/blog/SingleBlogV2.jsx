import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleBlogV2 = ({ blog }) => {
    const { thumb, date, month, author, comments, title, icon } = blog

    return (
        <>
            <div className="home-blog-two">
                <div className="thumb">
                    <Link to="/blog-single-sidebar#"><img src={`/img/blog/${thumb}`} alt="Image Not Found" /></Link>
                    <div className="date">{date}<strong>{month}</strong></div>
                </div>
                <div className="info">
                    <div className="content">
                        <div className="meta">
                            <ul>
                                <li><Link to="#">{author}</Link></li>
                                <li><Link to="#">{comments}</Link></li>
                            </ul>
                        </div>
                        <h3 className="post-title"><Link to="/blog-single-sidebar#">{title}</Link></h3>
                        <Link to="/blog-single-sidebar#" className="button-regular">
                            Continue Reading <i className={icon}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV2;