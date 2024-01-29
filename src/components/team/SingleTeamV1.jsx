import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';

const SingleTeamV1 = ({ team }) => {
    const { id, thumb, icon1, icon2, icon3, person, designation, delay } = team

    return (
        <>
            <ReactWOW animation='fadeInUp' delay={delay}>
                <div className="team-style-one wow fadeInUp">
                    <div className="thumb">
                        <img src={`/img/team/${thumb}`} alt="Team Image" />
                        <ul className="social">
                            <li className="facebook">
                                <Link to="http://facebook.com" target='_blank'>
                                    <i className={icon1}></i>
                                </Link>
                            </li>
                            <li className="twitter">
                                <Link to="http://twitter.com" target='_blank'>
                                    <i className={icon2}></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        <Link to={`/team-details/${id}#`}><i className={icon3}></i></Link>
                        <div className="info">
                            <h4><Link to={`/team-details/${id}#`}>{person}</Link></h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </ReactWOW>
        </>
    );
};

export default SingleTeamV1;