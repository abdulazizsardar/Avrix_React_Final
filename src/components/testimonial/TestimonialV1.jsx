import React from 'react';
import TestimonialV1Data from '../../jsonData/TestimonialV1Data.json'
import SingleTestimonialV1 from './SingleTestimonialV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';
import TestimonialV1CustomNavigation from './TestimonialV1CustomNavigation';

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-style-one-area default-padding-top">
                <div className="testimonial-content-wrap">
                    <div className="container">
                        <div className="heading-left">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content-left">
                                        <h4 className="sub-title">Testimonials</h4>
                                        <h2 className="title">What people say</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="testimonial-one-carousel-box">
                                <div className="testimonial-style-one-carousel">
                                    <Swiper
                                        modules={[Keyboard, Autoplay, Pagination]}
                                        slidesPerView={1}
                                        spaceBetween={25}
                                        autoplay={{
                                            delay: 3000,
                                            stopOnLastSlide: false,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        pagination={{
                                            type: 'fraction',
                                        }}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                    >
                                        {TestimonialV1Data.map(testimonial =>
                                            <SwiperSlide key={testimonial.id}>
                                                <SingleTestimonialV1 testimonial={testimonial} />
                                            </SwiperSlide>
                                        )}
                                        <TestimonialV1CustomNavigation />
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default TestimonialV1;