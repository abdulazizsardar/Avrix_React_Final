import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import BlogWithSideBarContent from '../../components/blog/BlogWithSideBarContent';
import FooterV1 from '../../components/footer/FooterV1';

const BlogWithSideBar = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Blog Sidebar" breadcrumb="blog-with-sidebar" />
            <BlogWithSideBarContent />
            <FooterV1 />
        </>
    );
};

export default BlogWithSideBar;