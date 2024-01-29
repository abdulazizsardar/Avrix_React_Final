import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import WhyChooseV1Data from '../../jsonData/WhyChooseV1Data.json'
import SingleWhyChooseV1 from './SingleWhyChooseV1';

const WhyChooseV1 = ({ chooseClass }) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className={`choose-us-style-one-area default-padding ${chooseClass}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="choose-us-style-one-thumb">
                                <img src="/img/about/2.jpg" alt="Image Not Found" />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ipUuoMCEbDQ" onClose={() => setOpen(false)} />
                                <Link className="popup-youtube video-play-button" onClick={() => setOpen(true)}>
                                    <i className="fa-solid fa-play"></i>
                                    <div className="effect"></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="choose-us-style-one d-flex-between">
                                <div className="top-info">
                                    <h4 className="sub-title">Why Avrix</h4>
                                    <h2 className="title">Unlock revenue growth for your business</h2>
                                </div>
                                <div className="bottom-info">
                                    <ul className="list-item">
                                        {WhyChooseV1Data.map(services =>
                                            <SingleWhyChooseV1 services={services} key={services.id} />
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;