import React from 'react'
import { useSwiper } from 'swiper/react'

const ProjectCustomNavigation = () => {
    const swiper = useSwiper();

    return (
        <>
            <div className="project-navigation-wrap">
                <div className="project-navigation-button">
                    <span className='project-previous' onClick={() => swiper.slidePrev()}><i className="fa-solid fa-arrow-left-long"></i></span>
                    <span className='project-next' onClick={() => swiper.slideNext()}><i className="fa-solid fa-arrow-right-long"></i></span>
                </div>
            </div>
        </>
    );
};

export default ProjectCustomNavigation;
