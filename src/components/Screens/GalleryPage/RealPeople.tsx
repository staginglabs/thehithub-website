"use client";

import { motion } from "motion/react";
import Image from "next/image";

const images = [
  "/media/Real_People_Image1.jpg",
  "/media/Real_People_Image2.jpg",
  "/media/Real_People_Image3.jpg",
];

const RealPeople: React.FC = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Real People, Real Groups
        </motion.h2>
      </div>

      {/* Images */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-7.5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-87.75 overflow-hidden"
          >
            <Image
              src={src}
              alt={`Real people ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RealPeople;