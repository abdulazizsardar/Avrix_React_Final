import React from 'react';
import SocialShare from '../others/SocialShare';
import { HashLink as Link } from 'react-router-hash-link'

const SingleTeamMemberInfo = ({ teamInfo }) => {
    const { person, thumb, designation, age, mail, phone } = teamInfo

    return (
        <>
            <div className="team-single-area default-padding">
                <div className="container">
                    <div className="team-content-top">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 left-info">
                                <div className="thumb">
                                    <img src={`/img/team/${thumb}`} alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="team-right-info">
                                    <h2>{person}</h2>
                                    <span>{designation}</span>
                                    <p>
                                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.
                                    </p>
                                    <ul className="user-location">
                                        <li>
                                            <strong>Age:</strong>
                                            <p>{age} Years</p>
                                        </li>
                                        <li>
                                            <strong>Location:</strong>
                                            <p>Baird House, 15-17 St Cross St London EC1N 8UW</p>
                                        </li>
                                        <li>
                                            <strong>Email:</strong>
                                            <a href={`mailto:${mail}`}>{mail}</a>
                                        </li>
                                        <li>
                                            <strong>Phone:</strong>
                                            <a href={`tel:${phone}`}>{phone}</a>
                                        </li>
                                    </ul>
                                    <div className="social">
                                        <Link className="btn circle btn-sm btn-gradient animation" to="/contact-us#">Contact Me</Link>
                                        <div className="share-link">
                                            <i className="fas fa-share-alt"></i>
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamMemberInfo;