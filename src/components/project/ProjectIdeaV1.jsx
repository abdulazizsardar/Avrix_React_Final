import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const ProjectIdeaV1 = () => {
    return (
        <>
            <div className="contact-panel-bg" style={{ backgroundImage: "url(/img/about/3.jpg)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className="sub-title">Have you project in mind?</h4>
                        <h2 className="title">For instant support please reach us</h2>
                        <Link className="btn-round-animation dark mt-40" to="/contact-us#">Send Mail <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectIdeaV1;