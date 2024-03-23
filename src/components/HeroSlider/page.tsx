"use client";

// Import Swiper styles
import "swiper/css";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30} 
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://marketplace.canva.com/EAFED0hv9G0/1/0/1600w/canva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg"
            alt=""
            title=""
            height={1000}
            width={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://marketplace.canva.com/EAFED0hv9G0/1/0/1600w/canva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg"
            alt=""
            title=""
            height={1000}
            width={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://marketplace.canva.com/EAFED0hv9G0/1/0/1600w/canva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg"
            alt=""
            title=""
            height={1000}
            width={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://marketplace.canva.com/EAFED0hv9G0/1/0/1600w/canva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg"
            alt=""
            title=""
            height={1000}
            width={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://marketplace.canva.com/EAFED0hv9G0/1/0/1600w/canva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg"
            alt=""
            title=""
            height={1000}
            width={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://marketplace.canva.com/EAFED0hv9G0/1/0/1600w/canva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg"
            alt=""
            title=""
            height={1000}
            width={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
         jh
        </SwiperSlide>
      </Swiper>
    </>
  );
}
