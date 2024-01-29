import React from 'react'
import BlogCommentData from '../../jsonData/BlogCommentData.json'
import SingleBlogComment from './SingleBlogComment';

const BlogComment = () => {
    return (
        <>
            <div className="comments-title">
                <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                <div className="comments-list">
                    {BlogCommentData.map(comment =>
                        <SingleBlogComment comment={comment} key={comment.id} />
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogComment;