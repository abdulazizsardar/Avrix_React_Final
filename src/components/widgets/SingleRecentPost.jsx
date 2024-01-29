import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const SingleRecentPost = ({ post }) => {
    const { thumb, date, title } = post

    return (
        <>
            <li>
                <div className="thumb">
                    <Link to="/blog-single-sidebar#">
                        <img src={`/img/gallery/${thumb}`} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta-title">
                        <span className="post-date">{date}</span>
                    </div>
                    <Link to="/blog-single-sidebar#">{title}</Link>
                </div>
            </li>
        </>
    );
};

export default SingleRecentPost;