import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import AboutV2Data from '../../jsonData/AboutV2Data.json'
import SingleAboutV2Accordion from './SingleAboutV2Accordion';

const AboutV2 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="about-style-two-area relative">
                <div className="about-style-two-thumb">
                    <div className="experience-style-one">
                        <div className="video-button">
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="LlCwHnp3kL4" onClose={() => setOpen(false)} />
                            <Link className="video-play-button light" onClick={() => setOpen(true)}>
                                <i className="fas fa-play"></i>
                                <div className="effect"></div>
                            </Link>
                        </div>
                        <h3>We’ve over <br /> 28 Years of Experience</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-7">
                            <div className="about-style-two-info">
                                <h4 className="sub-title">Our Benefits</h4>
                                <h2 className="title">Unlock revenue Growth to start Business</h2>
                                <div className="faq-style-one mt-40">
                                    <div className="accordion" id="faqAccordion">
                                        {AboutV2Data.map(accordion =>
                                            <SingleAboutV2Accordion accordion={accordion} key={accordion.id} />
                                        )}
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

export default AboutV2;