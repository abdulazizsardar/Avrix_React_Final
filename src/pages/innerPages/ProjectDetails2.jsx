import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ProjectDetails2Content from '../../components/project/ProjectDetails2Content';
import FooterV1 from '../../components/footer/FooterV1';

const ProjectDetails2 = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Natural plus modern." breadcrumb="project-details-2" />
            <ProjectDetails2Content />
            <FooterV1 />
        </>
    );
};

export default ProjectDetails2;