import React from 'react';
import RelatedProjectV1 from '../../jsonData/RelatedProjectV1.json'
import SingleRelatedProject from './SingleRelatedProject';

const RelatedProject = () => {
    return (
        <>
            <div className="related-projects">
                <div className="container">
                    <div className="related-project-items default-padding">
                        <div className="row mb-40 mb-md-0 mb-xs-0">
                            <div className="col-lg-6">
                                <div className="content-left">
                                    <h4 className="sub-title">Need more projects?</h4>
                                    <h2 className="title">Relate Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {RelatedProjectV1.map(related =>
                                <div className="col-lg-6 item-center" key={related.id}>
                                    <SingleRelatedProject related={related} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RelatedProject;