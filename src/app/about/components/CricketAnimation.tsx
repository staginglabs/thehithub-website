'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Bowler from './silhouettes/Bowler.svg';
import Batsman from './silhouettes/Batsman.svg';

export default function CricketAnimation() {

  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="relative w-full max-w-4xl h-64 flex justify-between items-end">
        <img src={Bowler.src} alt="Bowler" className="h-48" />
        <img src={Batsman.src} alt="Batsman" className="h-48" />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl h-64">
      {/* Bowler */}
      <motion.div
        className="absolute left-0 bottom-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.img
          src={Bowler.src}
          alt="Bowler"
          className="h-48"
          initial={{ rotate: 0 }}
          animate={{ rotate: -20 }}
          transition={{
            delay: 1,
            duration: 0.4,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Ball */}
      <motion.div
        className="absolute bottom-20 left-24 w-3 h-3 rounded-full bg-white"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 380 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          ease: 'linear',
        }}
      />

      {/* Batsman */}
      <motion.div
        className="absolute right-0 bottom-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.img
          src={Batsman.src}
          alt="Batsman"
          className="h-48 origin-bottom-left"
          initial={{ rotate: 0 }}
          animate={{ rotate: 30 }}
          transition={{
            delay: 1.6,
            duration: 0.3,
            ease: 'easeOut',
          }}
        />
      </motion.div>
    </div>
  );
}
