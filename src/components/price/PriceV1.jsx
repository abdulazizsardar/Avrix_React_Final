import React from 'react';
import PriceV1Data from '../../jsonData/PriceV1Data.json'
import SinglePriceV1 from './SinglePriceV1';

const PriceV1 = ({ priceClass }) => {
    return (
        <>
            <div className={`pricing-style-one-area default-padding-bottom bg-gray ${priceClass}`}>
                <div className="shape-left-top">
                    <img src="/img/shape/11.png" alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="pricing-items">
                        <div className="row align-center">
                            <div className="col-xl-5 col-lg-4">
                                <h4 className="sub-title">Best Pricing</h4>
                                <h2 className="title">Affordable pricing. <br /> - checkout Now</h2>
                                <p>
                                    Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                </p>
                                <h5>Join today and get <strong>50%</strong> Off</h5>
                            </div>
                            <div className="col-xl-6 offset-xl-1 col-lg-7 offset-lg-1" >
                                <div className="price-style-wrap">
                                    {PriceV1Data.map(price =>
                                        <SinglePriceV1 price={price} key={price.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;