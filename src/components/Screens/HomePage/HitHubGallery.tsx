"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { secondary_button } from "@/fonts/fonts";

const galleryImages: string[] = [
  "/media/gallery_image1.jpg",
  "/media/gallery_image2.jpg",
  "/media/gallery_image3.jpg",
  "/media/gallery_image1.jpg",
  "/media/gallery_image2.jpg",
  "/media/gallery_image3.jpg",
];

const HitHubGallery: React.FC = () => {
  return (
      <div className="w-full mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F351D]">
            The Hit Hub Gallery
          </h2>
          <p className="max-w-xl">
            Premium turf, brilliant lighting, and a safe, match-ready surface.
          </p>
        </div>

        {/* Slider */}
        <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
                prevEl: ".gallery-prev",
                nextEl: ".gallery-next",
            }}
            onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = ".gallery-prev";
                // @ts-ignore
                swiper.params.navigation.nextEl = ".gallery-next";
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="pb-14"
            >

          {galleryImages.map((src: string, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative h-105 rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-8">
         <Link
            href="/"
            className={`${secondary_button} w-max`}
          >
            View Full Gallery
            <Image
              src="/media/s-button.svg"
              alt="contact"
              width={31}
              height={31}
            />
          </Link>

          <div className="flex gap-2">
            <button
              aria-label="Previous slide"
              className="gallery-prev w-12.5 h-12.5 rounded-full border border-[#0F351D] bg-[url('/media/icons/left-arrow.svg')] bg-center bg-no-repeat hover:border-[#F8E108] hover:bg-[#F8E108] cursor-pointer"
            >
            </button>
            <button
              aria-label="Next slide"
              className="gallery-next w-12.5 h-12.5 rounded-full border border-[#0F351D] bg-[url('/media/icons/right-arrow.svg')] bg-center bg-no-repeat hover:border-[#F8E108] hover:bg-[#F8E108] cursor-pointer"
            >
            </button>
          </div>
        </div>

      </div>
  );
};

export default HitHubGallery;