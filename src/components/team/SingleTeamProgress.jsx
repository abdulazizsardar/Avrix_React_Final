import React from 'react';

const SingleTeamProgress = ({ progress }) => {
    const { title, width, operator } = progress

    return (
        <>
            <div className="progress-box">
                <h5>{title}</h5>
                <div className="progress">
                    <div className="progress-bar progress-bar-timing" role="progressbar" style={{ width: `${width}%` }}>
                        <span>{width}{operator}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamProgress;