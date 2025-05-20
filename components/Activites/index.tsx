"use client";
import { ActiviteData } from "./ActiviteData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { truncateText } from "@/lib/Helper"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link";
import Image from "next/image";

const Activites = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleDoubleClick = (src: string) => {
    setSelectedImage(src)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }



  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ActiviteData.map((activite) => (
              <div
                key={activite.id}
                className="overflow-hidden rounded-lg bg-white shadow dark:bg-dark dark:shadow-card hover:shadow-lg transition-all duration-300"
              >
                {/* Image Swiper inside the card */}
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  className="h-[340px] w-full"
                >
                  {activite.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image
                      lazyBoundary="200px"
                        src={img}
                        width={800}
                        height={600}
                        alt={`${activite.name} image ${index + 1}`}
                        className="w-full h-[340px] object-cover"
                        onClick={() => handleDoubleClick(img)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Card content */}
                <div className="p-4 ">
                  <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                  <Link href={`${activite.path}`} >
                    {activite.name}
                  </Link>
                  </h3>
                  <p className="mb-4 text-base text-body-color dark:text-white">
                    {  truncateText(activite.description, 120)}
                    
                    <Link href={`${activite.path}`} className="text-primary hover:underline text-sm">
                    Lire plus
                    </Link>
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      
                      <span className="text-sm text-body-color dark:text-gray-dark">/Nuit</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-yellow-400 dark:text-white "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                      <span className="ml-1 text-body-color dark:text-dark-6">{activite.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-body-color dark:text-dark-6">{activite.location}</div>
                </div>
              </div>
            ))}
          </div>
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

export default Activites;
