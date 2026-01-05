"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import "./home.css"

const cards = [
  {
    title: "Box Cricket",
    index: "01",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/media/cricket.png",
    color: "#FFF4CA",
  },
  {
    title: "Football",
    index: "02",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/media/football.png",
    color: "#FFEA94",
  },
  {
    title: "Volleyball",
    index: "03",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/media/volleyball.png",
    color: "#F6DB6D",
  },
  {
    title: "Badminton",
    index: "04",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
]

function TurfArea() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      ref={sectionRef}
      className="stack-wrapper"
      style={{ "--cards": cards.length } as React.CSSProperties}
    >
      {cards.map((card, i) => {
        const topOffset = 150 + i * 80

        const steps = cards.length - i - 1
        const range: number[] = []
        const widths: string[] = []

        for (let s = 1; s <= steps; s++) {
          range.push((i + s) / cards.length)
          widths.push(`calc(100% - ${s * 80}px)`)
        }

        const width = useTransform(
          scrollYProgress,
          range.length ? range : [0],
          widths.length ? widths : ["100%"]
        )

        // const width = useTransform(scrollYProgress, range, widths)

        return (
          <motion.div
            key={i}
            className="stack-card"
            style={{
              background: card.color,
              top: topOffset,
              width,
              zIndex: i + 1, 
            }}
          >
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
          </motion.div>
        )
      })}
    </section>
  )
}

export default TurfArea