import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleBannerV5 = ({ banner }) => {
    const { thumb, strokeTitle, title, tag, tag2, icon, btnText } = banner

    return (
        <>
            <div className="swiper-slider bg-cover" style={{ background: `url(/img/projects/${thumb})` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8">
                            <div className="content">
                                <div className="text-fixed">
                                    <h1>{strokeTitle}</h1>
                                </div>
                                <h2>{title}</h2>
                                <div className="tags">
                                    <Link to="/#">{tag}</Link>
                                    <Link to="/#">{tag2}</Link>
                                </div>
                                <div className="button">
                                    <Link className="btn-animation" to="/services#"><i className={icon}></i> <span>{btnText}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV5;