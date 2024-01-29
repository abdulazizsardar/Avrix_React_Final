import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleProjectV1 = ({ project }) => {
    const { thumb, icon, tag, category } = project

    return (
        <>
            <div className="swiper-slide">
                <div className="project-style-one">
                    <img src={`/img/portfolio/${thumb}`} alt="Thumb" />
                    <div className="overlay">
                        <div className="link">
                            <Link to="/project-details#"><i className={icon}></i></Link>
                        </div>
                        <div className="content">
                            <span>{tag}</span>
                            <h4><Link to="/project-details#">{category}</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1;