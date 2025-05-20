"use client";
import { hotelData } from "./hotelData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

interface HotelPageProps {
  params: { slug: number }
}
const Hotel = ({ params }: HotelPageProps) => {


  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleDoubleClick = (src: string) => {
    setSelectedImage(src)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const hotel = hotelData.find((hotel) => hotel.id == params.slug)

  console.log(hotel)

  if (!hotel) {
    return <div>Hotel not found</div>
  }



  return (
    <section className="">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {hotel.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${hotel.name} image ${index + 1}`}
              width={1200}
              height={800}
              className="w-full h-[600px] object-cover rounded-lg "
              onClick={() => handleDoubleClick(img)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-4 rounded shadow-xl max-w-3xl"
            >
              <Image
                src={selectedImage}
                alt="Image sélectionnée"
                width={1200}
                height={1200}
                className="rounded"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hotel;
