"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef, useState, useEffect } from "react"
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

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])

  return isMobile
}

function TurfArea() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile(1024)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  return (
    <div className="turf-section">
      <h2 className="text-center max-w-130 mx-auto mb-10">
        Shajapur's Premier Multi-Sport Turf Arena
      </h2>

      <div
        ref={sectionRef}
        className="stack-wrapper"
        style={{ "--cards": cards.length } as React.CSSProperties}
      >
        {cards.map((card, i) => {
          /* ONLY responsive change */
          const topOffset =
            (isMobile ? 80 : 150) + i * (isMobile ? 40 : 70)

          const steps = cards.length - i - 1
          const range: number[] = []
          const widths: string[] = []

          for (let s = 1; s <= steps; s++) {
            range.push((i + s) / cards.length)

            widths.push(
              `calc(100% - ${s * (isMobile ? 0 : 80)}px)`
            )
          }

          const width = useTransform(
            scrollYProgress,
            range.length ? range : [0],
            widths.length ? widths : ["100%"]
          )

          return (
            <motion.div
              key={i}
              className="stack-card"
              style={{
                background: card.color,
                top: topOffset,
                width,
                zIndex: cards.length + i,
              }}
            >
              <div className="card-header">
                <h3>{card.title}</h3>
                <span>{card.index}</span>
              </div>

              <div className="card-body">
                <div className="card-image flex items-center">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="card-text">
                  <p>{card.desc}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default TurfArea