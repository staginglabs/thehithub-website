"use client";

import Image from "next/image";
import { motion } from "motion/react";

const firstList = [
  "High-density turf, no loose rubber",
  "Consistent lighting & night visibility",
  "Safe, family-friendly environment",
];

const secondList = [
  "Easy online booking",
  "Affordable pricing",
  "Perfect for tournaments and leagues",
];

const PlayersPrefer = () => {
  return (
    <div className="flex relative z-1 flex-wrap">
      {/* Heading List */}
      <div className="w-full xl:w-[35%] lg:w-[30%] text-center lg:text-left lg:pt-25 md:pt-0 pt-0 ">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Why Players Prefer <br /> The Hit Hub
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        className="mt-5 mb-12.5"
      >
        Designed for performance, comfort, and safety.
      </motion.p>

        <ul className="prefer-list w-full">
          {firstList.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Player Image */}

      <div className="w-full xl:w-[45%] lg:w-[40%] flex justify-center">
        <Image
          src="/media/players-prefer.png"
          alt="Player hitting"
          className="-mt-12 -ml-10 max-lg:mb-10 max-lg:m-0 prefer-img"
          width={438}
          height={718}
          priority
        />
      </div>

      {/* Second List */}
      <div className="w-full xl:w-[20%] lg:w-[30%] flex items-end pb-30 max-md:pb-20">
        <ul className="prefer-list w-full">
          {secondList.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default PlayersPrefer;