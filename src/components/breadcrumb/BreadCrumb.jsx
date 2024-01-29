import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const BreadCrumb = ({ pageTitle, breadcrumb }) => {
    return (
        <>
            <div className="breadcrumb-area bg-gray bg-cover">
                <div className="container">
                    <div className="breadcrumb-item">
                        <div className="breadcrum-shape">
                            <img src="/img/shape/bg-shape-3.png" alt="shape" />
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li><Link to="/#"><i className="fa-solid fa-home"></i> Home</Link></li>
                                        <li className="active">{breadcrumb ? breadcrumb : "Not Found"}</li>
                                    </ol>
                                </nav>
                                <h1>{pageTitle ? pageTitle : "Not Found"}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;