"use client";

import { secondary_button } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const HomeWelcomeSection = () => {
  return (
    <div className="home-welcome">
      <div className="flex flex-col items-center gap-y-8.75 md:gap-y-0 md:items-baseline md:grid grid-cols-[297px_1fr] gap-x-15 lg:gap-x-18.75 pb-14.5 lg:pb-30">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="welcome-heading font-bold text-center md:text-left">
            Welcome To The Hit Hub
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            Where passion meets performance. Our turf is built for players who don't just play the game — they live it. Whether it's Football, Cricket, Volleyball, Badminton or Kabaddi, we provide a premium space designed for high-energy play and competitive action.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            With top-quality synthetic grass, excellent lighting, and a safe, well-maintained surface, we ensure every match feels professional and enjoyable. Our goal is to create an environment where players can focus on the game, improve their skills, and enjoy every moment on the field.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center md:justify-start"
          >
            <Link
              href="/"
              className={`${secondary_button} w-max mt-6.25 lg:mt-10`}
            >
              Read More
              <Image
                src="/media/s-button.svg"
                alt="contact"
                width={31}
                height={31}
              />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default HomeWelcomeSection;