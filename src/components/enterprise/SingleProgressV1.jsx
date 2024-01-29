import React from 'react';

const SingleProgressV1 = ({ progress }) => {
    const { title, end } = progress

    return (
        <>
            <div className="progress-box">
                <h5>{title}</h5>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" data-width={end} style={{ width: `${end}%` }}>
                        <span>{end}%</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProgressV1;