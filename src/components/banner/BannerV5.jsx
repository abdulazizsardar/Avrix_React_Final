import React from 'react';
import BannerV5Data from '../../jsonData/BannerV5Data.json'
import SingleBannerV5 from './SingleBannerV5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Mousewheel, Pagination } from 'swiper/modules';

const BannerV5 = () => {
    return (
        <>
            <div className="banner-area navigation-icon-solid navigation-between-bottom navigation-custom-large overflow-hidden text-light banner-style-five">
                <div className="banner-slide-counter">
                    <div className="swiper-wrapper-div">
                        <Swiper
                            mousewheel={true}
                            modules={[Keyboard, Autoplay, Mousewheel, Pagination]}
                            slidesPerView={1}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheelControl={true}
                            speed={1200}
                            autoplay={{
                                delay: 4000,
                                stopOnLastSlide: false,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            keyboard={{
                                enabled: true,
                            }}
                        >
                            {BannerV5Data.map(banner =>
                                <SwiperSlide key={banner.id}>
                                    <SingleBannerV5 banner={banner} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV5;