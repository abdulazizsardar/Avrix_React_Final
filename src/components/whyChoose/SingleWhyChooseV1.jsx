import React from 'react';

const SingleWhyChooseV1 = ({ services }) => {
    const { service, number } = services

    return (
        <>
            <li>{service} <strong>{number}</strong></li>
        </>
    );
};

export default SingleWhyChooseV1;