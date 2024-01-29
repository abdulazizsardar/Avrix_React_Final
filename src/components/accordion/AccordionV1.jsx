import React, { useState } from 'react'
import AccordionModalV1 from './AccordionModalV1'
import AccordionV1Data from '../../jsonData/AccordionV1Data.json'
import { Link } from 'react-router-dom';

const AccordionV1 = () => {

    const [activeIndex, setActiveIndex] = useState(1)

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    }

    return (
        <>
            <div className="accrdion-portfolio-area">
                <div className="container-fluid">
                    <div className="row">
                        <ul className="accordion-portfolio-lists text-light" id="accordion">
                            {AccordionV1Data.map((data, id) =>
                                <li key={data.id}
                                    className={activeIndex === id ? 'out' : ''}
                                    onMouseEnter={() => handleMouseEnter(id)}
                                    style={{ backgroundImage: `url(/img/portfolio/${data.thumb})` }}>
                                    <h3>{data.subTitle}</h3>
                                    <span>{data.number}</span>
                                    <div className="accordion-overlay">
                                        <span>{data.category}</span>
                                        <h2><Link to="#" data-bs-toggle="modal" data-bs-target={data.dataTarget}>{data.title}</Link></h2>
                                        <p>{data.textFirst} <br /> {data.textLast}</p>
                                        <Link to="#" data-bs-toggle="modal" data-bs-target={data.dataTarget}><i className={data.icon}></i></Link>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="popup-single-modal modal fade text-light" id="projectSingleModal" tabIndex="-1" aria-hidden="true">
                <AccordionModalV1 />
            </div>
        </>
    );
};

export default AccordionV1;