import React from 'react';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import { HashLink as Link } from 'react-router-hash-link';

const AboutV1 = ({ aboutClass }) => {
    return (
        <>
            <div className={`about-area ${aboutClass}`}>
                <div className="blur-bg-theme"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <ReactWOW duration="1s" animation="fadeInUp">
                                <div className="about-style-one-thumb" >
                                    <img src="/img/about/1.jpg" alt="Image Not Found" />
                                    <div className="fun-fact text-light" >
                                        <div className="counter">
                                            <div className="timer">
                                                <CountUp end={38} duration={5} enableScrollSpy />
                                            </div>
                                            <div className="operator">K</div>
                                        </div>
                                        <span className="medium">Completed Projects</span>
                                    </div>
                                </div>
                            </ReactWOW>
                        </div>
                        <div className="col-xl-5 col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-one">
                                <h2 className="title mb-30">Creative process in our agency</h2>
                                <p>
                                    From traditional and thought leadership campaigns
                                    to compress. storytelling and creative social media management
                                    we’ve got you covered. Something is not your average
                                    order-taking vendor. We are proud to be the go-to
                                    partner for some of the world’s biggest international agencies
                                    andbrands. Seeing rather her.
                                </p>
                                <ul className="list-simple">
                                    <li>Amazing communication.</li>
                                    <li>Best trendinf designing experience.</li>
                                </ul>
                                <Link to="/about-us#" className="arrow-btn"><i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;