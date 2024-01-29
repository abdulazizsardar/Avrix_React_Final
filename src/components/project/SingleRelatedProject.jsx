import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';

const SingleRelatedProject = ({ related }) => {
    const { thumb, tag, title, icon, delay } = related

    return (
        <>
            <ReactWOW animation='fadeInUp' delay={delay}>
                <div className="portfolio-style-one">
                    <div className="thumb-zoom">
                        <img src={`/img/projects/${thumb}`} alt="Image Not Found" />
                    </div>
                    <div className="pf-item-info">
                        <div className="content-info">
                            <span>{tag}</span>
                            <h2><Link to="/project-details#">{title}</Link></h2>
                        </div>
                        <div className="button">
                            <Link to="/project-details#" className="pf-btn"><i className={icon}></i></Link>
                        </div>
                    </div>
                </div>
            </ReactWOW>
        </>
    );
};

export default SingleRelatedProject;