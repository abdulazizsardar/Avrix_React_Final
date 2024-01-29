import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import Blog2ColumnContent from '../../components/blog/Blog2ColumnContent';
import FooterV1 from '../../components/footer/FooterV1';

const Blog2Column = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Blog Grid" breadcrumb="blog-2-column" />
            <Blog2ColumnContent />
            <FooterV1 />
        </>
    );
};

export default Blog2Column;