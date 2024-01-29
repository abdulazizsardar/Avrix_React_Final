import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ProjectDetailsContent from '../../components/project/ProjectDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';

const ProjectDetails = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Natural plus modern" breadcrumb="project-details" />
            <ProjectDetailsContent />
            <FooterV1 />
        </>
    );
};

export default ProjectDetails;