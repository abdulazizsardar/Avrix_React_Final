import React from 'react'
import { useSwiper } from 'swiper/react'

const ServiceCustomNavigation = () => {
    const swiper = useSwiper();

    return (
        <>
            <div className="service-navigation-wrap">
                <div className="service-navigation-button">
                    <span className='service-previous' onClick={() => swiper.slidePrev()}><i className="fa-solid fa-arrow-left-long"></i></span>
                    <span className='service-next' onClick={() => swiper.slideNext()}><i className="fa-solid fa-arrow-right-long"></i></span>
                </div>
            </div>
        </>
    );
};

export default ServiceCustomNavigation;