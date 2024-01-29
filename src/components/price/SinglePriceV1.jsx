import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SinglePriceV1 = ({ price }) => {
    const { title, subtitle, list1, list2, list3, cost } = price

    return (
        <>
            <div className="pricing-style-one">
                <div className="left">
                    <h4>{title}</h4>
                    <span>{subtitle}</span>
                    <Link className="btn mt-25 btn-sm circle btn-border light" to="/contact-us#">Order Now</Link>
                </div>
                <div className="right">
                    <ul>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                    </ul>
                    <h2><sup>$</sup>{cost}</h2>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV1;