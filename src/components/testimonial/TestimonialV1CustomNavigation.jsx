import React from 'react'
import { useSwiper } from 'swiper/react'

const TestimonialV1CustomNavigation = () => {
    const swiper = useSwiper()

    return (
        <>
            <div className="testimonial-navigation-wrap">
                <div className="testimonial-navigation-button">
                    <span className='testimonial-previous' onClick={() => swiper.slidePrev()}><i className="fa-solid fa-angle-left"></i></span>
                    <span className='testimonial-next' onClick={() => swiper.slideNext()}><i className="fa-solid fa-angle-right"></i></span>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1CustomNavigation