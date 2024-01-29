import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import SingleTeamMemberInfo from '../../components/team/SingleTeamMemberInfo';
import AwardContent from '../../components/awards/AwardContent';
import TeamQualification from '../../components/team/TeamQualification';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import TeamV1Data from '../../jsonData/TeamV1Data.json'

const TeamDetails = () => {

    const { id } = useParams()
    const data = TeamV1Data.filter(team => team.id === parseInt(id))[0]

    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Team Details" breadcrumb="team-details" />
            <SingleTeamMemberInfo teamInfo={data} />
            <AwardContent />
            <TeamQualification />
            <FooterV1 />
        </>
    );
};

export default TeamDetails;