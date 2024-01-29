import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SinglePortfolioV1 = ({ portfolio }) => {
    const { thumb, tag, title, icon } = portfolio

    return (
        <>
            <div className="portfolio-style-one overflow-hidden">
                <div className="thumb-zoom">
                    <img src={`/img/projects/${thumb}`} alt="projects" />
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
        </>
    );
};

export default SinglePortfolioV1;