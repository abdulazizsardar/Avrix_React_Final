import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ServiceTagsWidgetData from '../../jsonData/ServiceTagsWidgetData.json'

const ServiceTagsWidget = () => {
    return (
        <>
            <div className="single-widget services-list-widget">
                <h4 className="widget-title">Services</h4>
                <ul>
                    {ServiceTagsWidgetData.map(tag =>
                        <li className={tag.activated} key={tag.id}><Link to="/services-details#">{tag.tags}<i className={tag.icon}></i></Link></li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default ServiceTagsWidget;