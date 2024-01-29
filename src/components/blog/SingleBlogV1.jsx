import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'


const SingleBlogV1 = ({ blog }) => {
    const { thumb, author, date, title, icon } = blog

    return (
        <>
            <div className="home-blog-style-one">
                <div className="thumb">
                    <Link to="/blog-single-sidebar#"><img src={`/img/blog/${thumb}`} alt="Blog Image" /></Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link to="#">{author}</Link> </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h4 className="post-title"><Link to="/blog-single-sidebar#">{title}</Link></h4>
                    <Link to="/blog-single-sidebar#" className="button-regular">
                        Continue Reading <i className={icon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;