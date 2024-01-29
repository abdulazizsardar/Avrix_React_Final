import React, { useEffect, useRef, useState } from 'react';
import ServiceV1Data from '../../jsonData/ServiceV1Data.json'
import SingleServiceV1 from './SingleServiceV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import ServiceCustomNavigation from './ServiceCustomNavigation';

const ServiceV1 = ({ serviceClass }) => {

    const [leftPosition, setLeftPosition] = useState(0);
    const elementRef = useRef(null);

    const handleScroll = () => {
        const windowTop = window.scrollY;
        const elementTop = elementRef.current.offsetTop;
        const newLeftPosition = -1500 + (windowTop - elementTop);
        setLeftPosition(newLeftPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`creative-services-area overflow-hidden default-padding ${serviceClass ? serviceClass : ""}`}>
                <div className="bg-static" ref={elementRef}>
                    <img className="bg-move" src="/img/shape/5.png" style={{ left: `${leftPosition}px` }} alt="Image Not Found" />
                </div>

                <div className="service-content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h4 className="sub-title">Services We Offer</h4>
                                <h2 className="title">Turn Information <br /> Into Actionable Insights</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container container-stage">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="services-carousel">
                                    <div className="swiper-wrapper-div">
                                        <Swiper
                                            modules={[Keyboard, Autoplay]}
                                            spaceBetween={60}
                                            autoplay={{
                                                delay: 3000,
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
                                                    spaceBetween: 60,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 60,
                                                },
                                                1400: {
                                                    slidesPerView: 2.5,
                                                    spaceBetween: 60,
                                                },
                                                1800: {
                                                    slidesPerView: 2.8,
                                                    spaceBetween: 60,
                                                }
                                            }}
                                        >
                                            {ServiceV1Data.map(service =>
                                                <SwiperSlide key={service.id}>
                                                    <SingleServiceV1 service={service} />
                                                </SwiperSlide>
                                            )}
                                            <ServiceCustomNavigation />
                                        </Swiper>
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

export default ServiceV1;