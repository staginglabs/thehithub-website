"use client";

import { banner_list_text, secondary_button } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const bannerListItems = [
  {
    text: "Football",
    bannerListImage: "/media/icons/football.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
  {
    text: "Box Cricket",
    bannerListImage: "/media/icons/box-cricket.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
  {
    text: "Badminton",
    bannerListImage: "/media/icons/badminton.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
  {
    text: "Volleyball",
    bannerListImage: "/media/icons/volleyball.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
  {
    text: "Kabaddi",
    bannerListImage: "/media/icons/kabaddi.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
];

const Banner = () => {
  return (
    <>
      {/* Heading */}
      <div className="mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-180 mx-auto text-center"
        >
          Every Shot Has A Story
        </motion.h1>
      </div>

      <div className="flex flex-col lg:grid grid-cols-1 md:grid-cols-3 sm:gap-y-14 md:gap-10 banner-plyer pb-17.5 mt-10 lg:pb-55.5 lg:mt-0">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="banner-text flex flex-col items-center lg:items-baseline order-3 lg:order-1 text-center md:text-left mt-42 sm:mt-37.5 md:mt-21.25 lg:mt-0"
        >
          <p className="sm:max-w-[63%] text-center lg:text-left lg:max-w-full">
            A premium turf space designed for high-energy play and unforgettable
            moments.
          </p>

          <Link
            href="/"
            className={`${secondary_button} w-max mt-6.25 lg:mt-10`}
          >
            Contact Us
            <Image
              src="/media/s-button.svg"
              alt="contact"
              width={31}
              height={31}
            />
          </Link>
        </motion.div>

        {/* Center Image (Floating Effect) */}
        <motion.div
          className="banner-image relative w-full h-75 md:h-105 flex justify-center -mt-22.5 lg:ml-1.5 order-2"
          // animate={{ y: [0, -12, 0] }}
          // transition={{
          //   duration: 6,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          // }}
        >
          <Image
            src="/media/plyers.png"
            alt="Players"
            width={975}
            height={600}
            className="object-contain md:max-w-175 lg:max-w-200 h-143.25"
            priority
          />
        </motion.div>

        {/* Right List */}
        <div className="flex justify-center lg:justify-end banner-list order-1 lg:order-3">
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex flex-wrap justify-center gap-6 flex-col max-lg:flex-row"
          >
            {bannerListItems.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={banner_list_text}
              >
                <Image
                  src={item.bannerListImage}
                  width={30}
                  height={30}
                  alt={item.text}
                  className={item.listClass}
                />
                {item.text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Banner;