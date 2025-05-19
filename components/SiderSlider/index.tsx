"use client";
// SiderSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SiderSliderProps {
  images: string[];
}

const SiderSlider: React.FC<SiderSliderProps> = ({ images }) => {
  return (
    <aside >
      <Swiper
      
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}

      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`صورة ${index + 1}`}
              width={1700}
              height={1700}
           
              className="w-full h-auto rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
};

export default SiderSlider;
