import React from 'react';
import BrandV1Data from '../../jsonData/BrandV1Data.json'
import SingleBrandV1 from './SingleBrandV1';

const BrandV1 = ({ brandClass }) => {
    return (
        <>
            <div className={`brand-area relative overflow-hidden ${brandClass}`}>
                <div className="brand-style-one">
                    <div className="container-fill">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="brand-items">
                                    <div className="brand-conetnt">
                                        {BrandV1Data.map(brand =>
                                            <SingleBrandV1 brand={brand} key={brand.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandV1;