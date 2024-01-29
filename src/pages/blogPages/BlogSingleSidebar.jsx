import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import BlogSingleSidebarContent from '../../components/blog/BlogSingleSidebarContent';
import FooterV1 from '../../components/footer/FooterV1';

const BlogSingleSidebar = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Blog Single Sidebar" breadcrumb="blog-single-sidebar" />
            <BlogSingleSidebarContent />
            <FooterV1 />
        </>
    );
};

export default BlogSingleSidebar;