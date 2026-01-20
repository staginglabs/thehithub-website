"use client";

import { motion } from "motion/react";
import Image from "next/image";

const TurfFor = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-9">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2>Who is This Turf For?</h2>
          <p className="mt-3.5 max-w-139.25 mx-auto">
            Whether it's a serious practice or a fun match, the turf fits your game.
          </p>
        </motion.div>
      </div>

      {/* Images Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">

        {/* LEFT BIG IMAGE */}
        <div className="relative rounded-[10px] turf-for-img overflow-hidden lg:col-span-1 h-96 lg:h-118">
          <Image
            src="/media/friends-teams.jpg"
            alt="Friends & Local Teams"
            fill
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 text-white z-10 font-semibold text-[18px] leading-7">
            Friends & Local Teams
          </span>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="grid grid-rows-2 gap-2.5">
          {/* Top */}
          <div className="relative rounded-[10px] turf-for-img overflow-hidden h-57.75">
            <Image
              src="/media/fitness-training.jpg"
              alt="Fitness & Training"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 text-white z-10 font-semibold text-[18px] leading-7">
              Fitness & Training Sessions
            </span>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="relative rounded-[10px] turf-for-img overflow-hidden h-57.75">
              <Image
                src="/media/womens-groups.jpg"
                alt="Women Groups"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 text-white z-10 font-semibold text-[18px] leading-7">
                Women's Groups
              </span>
            </div>

            <div className="relative rounded-[10px] turf-for-img overflow-hidden h-57.75">
              <Image
                src="/media/kids-students.jpg"
                alt="Kids & Students"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 text-white z-10 font-semibold text-[18px] leading-7">
                Kids & Students
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT TALL IMAGE */}
        <div className="relative rounded-[10px] turf-for-img overflow-hidden lg:col-span-1 h-96 lg:h-118">
          <Image
            src="/media/kids-students.jpg"
            alt="Schools & Community Play"
            fill
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 text-white z-10 font-semibold text-[18px] leading-7">
            Schools, Colleges & Community Play
          </span>
        </div>

      </div>
    </div>
  );
};

export default TurfFor;