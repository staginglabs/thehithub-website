"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { primary_button } from "@/fonts/fonts";

interface NavButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export const CTAButton = ({ href, className, label = "Contact Us" }: NavButtonProps) => {
  // className={`hidden lg:flex ${primary_button} py-2.5! h-11! pl-4! pr-4!`}
  // Your existing styles
  // const primary_button = "bg-blue-600 text-white rounded-full items-center gap-2 overflow-hidden relative";

  // Animation variants for the arrow icon
  const arrowVariants = {
  initial: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: { 
      duration: 0.6, 
      ease: "easeInOut" as const // Add 'as const' here
    }
  }
};

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      className="hidden lg:flex"
    >
      <Link
        href={href}
        className={`${className} flex overflow-hidden relative items-center gap-2`}
      >
        {/* The Text and Icon - Higher Z-index to stay above the shimmer */}
        <span className="relative z-10 flex items-center gap-2">
          {label}
          {/* Animated Arrow Container */}
          <motion.div variants={arrowVariants} className="flex items-center justify-center">
            <Image
              src="/media/p-btn-arrow.svg"
              alt="contact"
              width={21}
              height={21}
              style={{ height: 'auto' }} 
            />
          </motion.div>
        </span>

        {/* The Shiny Shimmer Layer */}
        <motion.div
          variants={{
            initial: { x: "-150%", skewX: "-20deg" },
            hover: { x: "150%", skewX: "-20deg" }
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 0.5, // Pause for 0.5s between loops for a cleaner look
            duration: 1,      // Speed of the shimmer sweep
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-white/30 to-transparent w-full h-full"
        />
      </Link>
    </motion.div>
  );
};