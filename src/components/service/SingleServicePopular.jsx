import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleServicePopular = ({ popular }) => {
    const { icon, title, text } = popular

    return (
        <>
            <div className="item">
                <img src={`/img/icon/${icon}`} alt="Image Not Found" />
                <h4><Link to="#">{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleServicePopular;