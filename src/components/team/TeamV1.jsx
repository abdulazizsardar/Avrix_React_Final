import React from 'react';
import TeamV1Data from '../../jsonData/TeamV1Data.json'
import SingleTeamV1 from './SingleTeamV1';

const TeamV1 = () => {
    return (
        <>

            <div className="team-style-one-area bg-cover default-padding bottom-less" style={{ backgroundImage: "url(/img/shape/10.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Team Members</h4>
                                <h2 className="title">Meet our experts</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {TeamV1Data.slice(0, 4).map(team =>
                            <div className="col-xl-3 col-md-6 mb-30" key={team.id}>
                                <SingleTeamV1 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV1;