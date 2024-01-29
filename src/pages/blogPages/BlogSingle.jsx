import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import BlogSingleContent from '../../components/blog/BlogSingleContent';
import FooterV1 from '../../components/footer/FooterV1';

const BlogSingle = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Blog Single" breadcrumb="blog-single" />
            <BlogSingleContent />
            <FooterV1 />
        </>
    );
};

export default BlogSingle;