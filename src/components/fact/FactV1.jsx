import React from 'react';
import FactV1Data from '../../jsonData/FactV1Data.json'
import SingleFactV1 from './SingleFactV1';

const FactV1 = ({ factClass }) => {
    return (
        <>
            <div className={`fun-factor-circle-area default-padding-bottom ${factClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fun-fact-circle-lists">
                                {FactV1Data.map(fact =>
                                    <SingleFactV1 fact={fact} key={fact.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV1;