import React from 'react';
import RatingsFive from '../others/RatingsFive';


const SingleTestimonialV1 = ({ testimonial }) => {
    const { thumb, icon, name, designation, text } = testimonial

    return (
        <>
            <div className="swiper-slide">
                <div className="testimonial-style-one">
                    <div className="provider">
                        <div className="thumb">
                            <img src={`img/team/${thumb}`} alt="Image Not Found" />
                            <div className="quote">
                                <img src={`img/shape/${icon}`} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="info">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="rating">
                            <RatingsFive />
                        </div>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;