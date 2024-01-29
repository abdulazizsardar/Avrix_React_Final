import React from 'react';
import ProjectDetailsV1List from '../../jsonData/ProjectDetailsV1List.json'

const ProjectDetailsCenter = () => {
    return (
        <>
            <div className="project-details-style-two project-details default-padding bg-gray">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7">
                            <div className="thumb-grid">
                                <img src="/img/portfolio/v1.jpg" alt="Thumb" />
                                <img src="/img/portfolio/v2.jpg" alt="Thumb" />
                            </div>
                        </div>

                        <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15">
                            <div className="check-list">
                                <div className="single-list">
                                    <h4>Mobile Optimization</h4>
                                    <p>
                                        Tempor nonummy metus lobortis. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum potenti. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                    </p>
                                </div>
                                <div className="single-list">
                                    <h4>Marketing Automation</h4>
                                    <ul className="list-disc">
                                        {ProjectDetailsV1List.map(list =>
                                            <li key={list.id}>{list.list}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsCenter;