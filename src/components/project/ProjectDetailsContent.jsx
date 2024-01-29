import React from 'react';
import ProjectDetailsTop from './ProjectDetailsTop';
import ProjectDetailsCenter from './ProjectDetailsCenter';
import ProjectDetailsBottom from './ProjectDetailsBottom';
import RelatedProject from './RelatedProject';

const ProjectDetailsContent = () => {
    return (
        <>
            <ProjectDetailsTop />
            <ProjectDetailsCenter />
            <ProjectDetailsBottom />
            <RelatedProject />
        </>
    );
};

export default ProjectDetailsContent;