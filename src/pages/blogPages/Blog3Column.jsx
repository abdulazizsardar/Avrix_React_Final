import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import Blog3ColumnContent from '../../components/blog/Blog3ColumnContent';
import FooterV1 from '../../components/footer/FooterV1';

const Blog3Column = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Blog Grid" breadcrumb="blog-3-column" />
            <Blog3ColumnContent />
            <FooterV1 />
        </>
    );
};

export default Blog3Column;