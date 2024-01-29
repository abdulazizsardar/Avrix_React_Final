import React from 'react';
import ProjectDetailsV1List from '../../jsonData/ProjectDetailsV1List.json'

const ProjectDetailsBottom = () => {
    return (
        <>
            <div className="project-details-style-two default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item-grid-container">
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>Background</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                        </div>
                                    </div>
                                    <img src="/img/projects/10.jpg" alt="Image Not Found" />
                                </div>

                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>The Challenges</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <h4>Continue indulged speaking the was out horrible for domestic.</h4>
                                            <ul className="list-disc">
                                                {ProjectDetailsV1List.slice(0, 3).map(list =>
                                                    <li key={list.id}>{list.list}</li>
                                                )}
                                            </ul>
                                            <img src="/img/projects/11.jpg" alt="Image Not Found" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>The Solution</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                        </div>
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

export default ProjectDetailsBottom;