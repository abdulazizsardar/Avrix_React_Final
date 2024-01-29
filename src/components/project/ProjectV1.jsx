import React, { useState } from 'react';
import ProjectV1Data from '../../jsonData/ProjectV1Data.json'
import SingleProjectV1 from './SingleProjectV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import ProjectCustomNavigation from './ProjectCustomNavigation';

const ProjectV1 = () => {

    // eslint-disable-next-line no-unused-vars
    const [activeSlide, setActiveSlide] = useState(1);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            <div className="project-style-one-area default-padding bg-gray">
                <div className="container-fill">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-content-wrap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="content-left">
                                                <h4 className="sub-title">Popular Projects</h4>
                                                <h2 className="title">Featured Works</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-style-one-items">
                                    <div className="project-center-stage-carousel">
                                        <div className="swiper-wrapper-div">
                                            <Swiper
                                                initialSlide={1} onSlideChange={handleSlideChange}
                                                modules={[Keyboard, Autoplay]}
                                                spaceBetween={80}
                                                centeredSlides={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    stopOnLastSlide: false,
                                                    disableOnInteraction: false,
                                                }}
                                                loop={true}
                                                keyboard={{
                                                    enabled: true,
                                                }}
                                                breakpoints={{
                                                    320: {
                                                        slidesPerView: 1,
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 30,
                                                        centeredSlides: false
                                                    },
                                                    1200: {
                                                        slidesPerView: 2.5,
                                                        spaceBetween: 60,
                                                        centeredSlides: true
                                                    },
                                                    1800: {
                                                        slidesPerView: 2.8,
                                                        spaceBetween: 60,
                                                    }
                                                }}
                                            >
                                                {ProjectV1Data.map(project =>
                                                    <SwiperSlide key={project.id}>
                                                        <SingleProjectV1 project={project} />
                                                    </SwiperSlide>
                                                )}
                                                <ProjectCustomNavigation />
                                            </Swiper>
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

export default ProjectV1;