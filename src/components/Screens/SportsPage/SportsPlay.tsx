"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { sports } from "./sports";

const SportsPlay = () => {
    return (
        <div className="w-full mx-auto">

            {/* Heading */}
            <div className="text-center mb-16">
                <motion.h2
                    className="text-[#15A34A]"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Sports You Can Play at The Hit Hub
                </motion.h2>
            </div>

            {/* Rows */}
            <div className="space-y-8">
                {sports.map((sport, index) => (
                    <motion.div
                        key={index}
                        className={`flex gap-7.5 items-center play-wrapper`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Content */}
                        <div className="content-col">
                            <h2 className="mb-4">
                                {sport.title}
                            </h2>

                            <p className="text-[#0F351D] mb-5">{sport.text}</p>

                            <ul className="space-y-2">
                                {sport.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[#0F351D]">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[#0F351D] mt-5">{sport.subtext}</p>
                        </div>

                         {/* Image */}
                        <div className="relative w-full h-142.5 image-col">
                            <Image
                                src={sport.image}
                                alt={sport.title}
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SportsPlay;