import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV1 = ({ service }) => {
    const { icon, title, text, number } = service

    return (
        <>
            <div className="swiper-slide">
                <div className="cteative-service-item">
                    <img src={`/img/icon/${icon}`} alt="Icon" />
                    <h4><Link to="/services-details#">{title}</Link></h4>
                    <p>{text}</p>
                    <span>{number}</span>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV1;