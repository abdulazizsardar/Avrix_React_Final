import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import TeamPageContent from '../../components/team/TeamPageContent';
import FooterV1 from '../../components/footer/FooterV1';

const Team = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Professional Team Members" breadcrumb="Team" />
            <TeamPageContent />
            <FooterV1 />
        </>
    );
};

export default Team;