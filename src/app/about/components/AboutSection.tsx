'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CricketAnimation from './CricketAnimation';

export default function AboutSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000); // keep short
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          className="h-screen flex items-center justify-center bg-[#f5f1e4] text-black font-semibold tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span className="text-8xl tracking-widest">LOADING</span>
        </motion.div>
      ) : (
        <motion.section
          key="about"
          className="h-screen bg-[#8ed462] text-black flex flex-col justify-center items-center overflow-hidden"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            ABOUT US
          </motion.h1>

          <CricketAnimation />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
