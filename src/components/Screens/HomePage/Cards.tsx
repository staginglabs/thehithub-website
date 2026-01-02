"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "@/components/Screens/HomePage/home.css";

const FINAL_WIDTHS = ["75%", "85%", "95%", "100%"];
// const FINAL_WIDTHS = ["770px", "870px", "970px", "1070px", "1170px"];

const Card = ({
  bg,

  index,
}: {
  bg: string;

  index: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Scale animation
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    index === 0 ? [1.1, 0.9, 0.9] : [1.1, 0.9, 0.9]
  );

  // Width animation
  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", FINAL_WIDTHS[index]]
  );
  //   ["100%", FINAL_WIDTHS[index]]
  //   index === 0 ? ["100%", "80%"] : ["80%", "100%"];
  return (
    <motion.div ref={ref} style={{ scale, width }} className={`card ${bg}`}>
      <h1 className="text-white text-4xl font-bold">Card {index + 1}</h1>
    </motion.div>
  );
};

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <Card bg="bg-amber-700 card-1" index={0} />
      <Card bg="bg-amber-300 card-2" index={1} />
      <Card bg="bg-green-500 card-3" index={2} />
      <Card bg="bg-black card-4" index={3} />
    </div>
  );
};

export default Cards;
