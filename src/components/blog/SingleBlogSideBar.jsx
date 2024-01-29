import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleBlogSideBar = ({ blog }) => {
    const { thumb, postLink, author, date, title, text, icon } = blog

    return (
        <>
            <div className="blog-style-one item">
                <div className="thumb">
                    <Link to={postLink}><img src={`/img/blog/${thumb}`} alt="Image Not Found" /></Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link to="#">{author}</Link></li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h2>
                        <Link to="/blog-single-sidebar#">{title}</Link>
                    </h2>
                    <p> {text}</p>
                    <Link to={postLink} className="button-regular">
                        Continue Reading <i className={icon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogSideBar;