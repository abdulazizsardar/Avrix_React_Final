import React from 'react';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';

const SingleFactV1 = ({ fact }) => {
    const { end, operator, info, delay } = fact

    return (
        <>
            <ReactWOW animation='fadeInDown'>
                <div className="fun-fact" >
                    <div className="counter">
                        <div className="timer">
                            <CountUp end={end} delay={delay} enableScrollSpy />
                        </div>
                        <div className="operator">{operator}</div>
                    </div>
                    <span className="medium">{info}</span>
                </div>
            </ReactWOW>
        </>
    );
};

export default SingleFactV1;