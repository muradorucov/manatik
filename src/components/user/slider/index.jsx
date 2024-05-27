import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Keyboard, Autoplay } from 'swiper/modules';


function Slider() {
    return <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            keyboard={{
                enabled: true
            }}
            modules={[Keyboard, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://cdn.dsmcdn.com/ty1320/pimWidgetApi/mobile_20240521073717_az1451.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.dsmcdn.com/ty1310/pimWidgetApi/mobile_20240513085808_az1325.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.dsmcdn.com/ty1292/pimWidgetApi/mobile_20240503215210_az1329.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.dsmcdn.com/ty1322/pimWidgetApi/mobile_20240521073007_az1450.jpg" alt="" />
            </SwiperSlide>

        </Swiper>
    </>
}

export default Slider