import React from 'react';
import CountUp from 'react-countup';
import { HashLink as Link } from 'react-router-hash-link'

const BannerV3 = () => {
    return (
        <>
            <div className="banner-style-three">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer">
                                        <CountUp end={38} enableScrollSpy />
                                    </div>
                                    <div className="operator">K</div>
                                </div>
                                <span className="medium">Completed Projects</span>
                            </div>
                            <div className="thumb">
                                <img src="/img/about/4.jpg" alt="about Image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <h2>Better design for your digital products.</h2>
                                <Link className="btn-animation mt-30" to="/services#"><i className="fas fa-arrow-right"></i> <span>Our Services</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV3;