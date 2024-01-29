import React from 'react';
import BlogStandardData from '../../jsonData/BlogStandardData.json'
import SingleBlogStandard from './SingleBlogStandard';
import Pagination from '../others/Pagination';

const BlogStandardContent = () => {
    return (
        <>
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                {BlogStandardData.map(blog =>
                                    <SingleBlogStandard blog={blog} key={blog.id} />
                                )}
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStandardContent;