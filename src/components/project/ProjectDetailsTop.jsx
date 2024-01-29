import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const ProjectDetailsTop = () => {
    return (
        <>
            <div className="project-details-area project-details-style-two default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-details-thumb">
                                <img src="/img/projects/9.jpg" alt="Image Not Found" />
                                <div className="project-single-tags">
                                    <Link to="#">UX Design</Link>
                                    <Link to="#">Web Design</Link>
                                </div>
                                <h2 className="title">The best digital solutions</h2>
                                <div className="project-author-details mt-50">
                                    <ul>
                                        <li>
                                            <div className="left-info">
                                                <h3>Client</h3>
                                            </div>
                                            <div className="right-info">
                                                <h3>ValidTheme IT</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left-info">
                                                <h3>Desciplines Used</h3>
                                            </div>
                                            <div className="right-info">
                                                <p className="project-inner-tag">
                                                    Branding <br /> Design <br /> Technology <br /> Interior Design
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left-info">
                                                <h3>Project Details</h3>
                                            </div>
                                            <div className="right-info">
                                                <p>
                                                    Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.
                                                </p>
                                            </div>
                                        </li>
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

export default ProjectDetailsTop;