import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

const BannerV1 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="banner-style-one">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8 banner-one-item">
                            <h4>Creative digital studio</h4>
                            <h2>Build great <strong>portfolio</strong></h2>
                        </div>
                        <div className="col-lg-3 offset-lg-1 banner-one-item text-center">
                            <div className="curve-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text><textPath href="#textPath">Award Winning Agency</textPath></text>
                                </svg>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ipUuoMCEbDQ" onClose={() => setOpen(false)} />
                                <Link className="popup-youtube" onClick={() => setOpen(true)}>
                                    <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;