import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ServicesDetailsContent from '../../components/service/ServicesDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';

const ServicesDetails = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Turn Information Into Actionable Insights" breadcrumb="Services-details" />
            <ServicesDetailsContent />
            <FooterV1 />
        </>
    );
};

export default ServicesDetails;