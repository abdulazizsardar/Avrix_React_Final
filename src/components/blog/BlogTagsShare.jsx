import React from 'react';
import SocialShare from '../others/SocialShare';
import { HashLink as Link } from 'react-router-hash-link'

const BlogTagsShare = () => {
    return (
        <>
            <div className="post-tags share">
                <div className="tags">
                    <h4>Tags: </h4>
                    <Link to="/blog-with-sidebar#">Algorithm</Link>
                    <Link to="/blog-with-sidebar#">Data science</Link>
                </div>
                <div className="social">
                    <h4>Share:</h4>
                    <SocialShare />
                </div>
            </div>
        </>
    );
};

export default BlogTagsShare;