"use client";

import { motion, scale } from "motion/react";
import "./home.css";

const cards = [
  {
    title: "Box Cricket",
    index: "01",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/media/cricket.png",
    color: "#FFF4CA",
  },
  {
    title: "Football",
    index: "02",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/media/football.png",
    color: "#FFEA94",
  },
  {
    title: "Volleyball",
    index: "03",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/media/volleyball.png",
    color: "#F6DB6D",
  },
  {
    title: "Badminton",
    index: "04",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/media/badminton.png",
    color: "#C8D030",
  },
  {
    title: "Kabaddi",
    index: "05",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/media/kabaddi.png",
    color: "#9ACA3C",
  },
];

function Area() {
  return (
    <section
      className="stack-wrapper"
      style={{ "--cards": cards.length } as React.CSSProperties}
    >
      {cards.map((card, i) => {
        const topOffset = 150 + i * 80;

        return (
          <motion.div
            key={i}
            className="stack-card"
            style={
              {
                background: card.color,
                zIndex: i + 1,
                top: topOffset,
              } as React.CSSProperties
            }
            initial={{ opacity: 0.9 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.6 }}
            transition={{ type: "spring", stiffness: 120, damping: 30 }}
          >
            <div className="card-content">
              <div className="card-header">
                <h3>{card.title}</h3>
                <span>{card.index}</span>
              </div>

              <div className="card-body">
                <div className="card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="card-text">
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

export default Area;
