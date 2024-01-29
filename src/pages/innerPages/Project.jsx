import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import PortfolioV1 from '../../components/portfolio/PortfolioV1';
import FooterV1 from '../../components/footer/FooterV1';

const Project = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle={`Take a look some of our recent case studies`} breadcrumb="project" />
            <PortfolioV1 para={false} title={false} />
            <FooterV1 />
        </>
    );
};

export default Project;