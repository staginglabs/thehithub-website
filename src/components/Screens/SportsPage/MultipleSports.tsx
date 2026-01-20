"use client";

import { motion } from "motion/react";
import Image from "next/image";

const MultipleSports = () => {
  return (
    <div className="w-full">
      {/* Row */}
      <div className="mx-auto max-w-300 px-3.75">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              How One Turf Supports <br /> Multiple Sports
            </h2>
            <p className="mt-6">
              Our turf is designed to stay flexible without compromising safety.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ul className="space-y-3.5 text-[16px] text-[#0F351D] bg-[#FFFFFF99] rounded-3xl p-6 lg:p-7.5">
              <li className="m-0">• Flat, shock-absorbing artificial turf</li>
              <li className="m-0">• Enclosed arena for controlled play</li>
              <li className="m-0">• Adjustable nets and layouts</li>
              <li className="m-0">• Space adaptable based on sport and group size</li>
            </ul>

            <p className="text-[18px] mt-6">
              This allows smooth transitions between different sports and activities.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Image Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full h-80 md:h-120 lg:h-167 mt-10 -mb-25 z-30 support-img"
      >
        <Image
          src="/media/multi-sports.png"
          alt="multi sports"
          fill
          className="object-contain object-left"
        />
      </motion.div>
    </div>
  );
};

export default MultipleSports;