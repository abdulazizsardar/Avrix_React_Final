import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleServiceV3 = ({ service }) => {
    const { icon, title, number, text, list1, list2, icon2, thumb } = service

    return (
        <>
            <li>
                <Link to="/services-details#" className="service-hover-item">
                    <div className="service-hover-content">
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                        <div className="item-title">
                            <h2>{title}</h2>
                            <span>{number}</span>
                        </div>
                        <div className="details">
                            <p>{text}</p>
                            <ul>
                                <li>{list1}</li>
                                <li>{list2}</li>
                            </ul>
                        </div>
                        <div className="arrow">
                            <strong className="btn-animation"><i className={icon2}></i> <span>View More</span></strong>
                        </div>
                    </div>
                    <div className="service-hover-wrapper">
                        <img className="service-hover-placeholder" src={`/img/portfolio/${thumb}`} alt="Image Not Found" />
                    </div>
                </Link>
            </li>
        </>
    );
};

export default SingleServiceV3;