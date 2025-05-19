"use client";
import { hotelData } from "./hotelData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
const Hotel = () => {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hotelData.map((hotel) => (
              <div
                key={hotel.id}
                className="overflow-hidden rounded-lg bg-white shadow-1 dark:bg-dark-2 dark:shadow-card"
              >
                {/* Image Swiper inside the card */}
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  className="h-[240px] w-full"
                >
                  {hotel.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image
                      width={1200}
                      height={1200}
                        src={img}
                        alt={`${hotel.name} image ${index + 1}`}
                        className="w-full h-[240px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                    {hotel.name}
                  </h3>
                  <p className="mb-4 text-base text-body-color dark:text-dark-6">
                    {hotel.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-primary mr-1">
                        ${hotel.price}
                      </span>
                      <span className="text-sm text-body-color">/night</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                      <span className="ml-1 text-body-color">{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-body-color">{hotel.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
