import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import BlogStandardContent from '../../components/blog/BlogStandardContent';
import FooterV1 from '../../components/footer/FooterV1';

const BlogStandard = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Blog Standard" breadcrumb="blog-standard" />
            <BlogStandardContent />
            <FooterV1 />
        </>
    );
};

export default BlogStandard;