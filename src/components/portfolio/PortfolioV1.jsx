import React from 'react';
import PortfolioV1Data from '../../jsonData/PortfolioV1Data.json'
import SinglePortfolioV1 from './SinglePortfolioV1';

const PortfolioV1 = ({ portfolioClass, para = true, title = true }) => {
    return (
        <>
            <div className={`portfolio-style-one-area default-padding ${portfolioClass ? portfolioClass : ""}`}>
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            {title && <>
                                <div className="col-lg-6">
                                    <div className="content-left">
                                        <h4 className="sub-title">Popular Projects</h4>
                                        <h2 className="title">Featured Works</h2>
                                    </div>
                                </div>
                            </> || <></>}
                            <div className="col-lg-5 offset-lg-1">
                                {para && <>
                                    <p>
                                        Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy themselves.
                                    </p>
                                </> || <></>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt--50">
                        {PortfolioV1Data.map(portfolio =>
                            <div className="col-lg-6 item-center" key={portfolio.id}>
                                <SinglePortfolioV1 portfolio={portfolio} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV1;