import { secondary_button } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeWelcomeSection = () => {
  return (
    <>
      <div className="home-welcome">
        <div className="flex flex-col items-center gap-y-8.75 md:gap-y-0 md:items-baseline md:grid grid-cols-[297px_1fr] gap-x-15 lg:gap-x-18.75 pb-14.5 lg:pb-30">
          <div>
            <p className="welcome-heading font-bold text-center md:text-left">
              Welcome To The Hit Hub
            </p>
          </div>

          <div className="space-y-5 ">
            <p className="text-center md:text-left">
              Where passion meets performance. Our turf is built for players who
              don&#39;t just play the game — they live it. Whether it&#39;s
              Football, Cricket, Volleyball, Badminton or Kabaddi, we provide a
              premium space designed for high-energy play and competitive
              action.
            </p>
            <p className="text-center md:text-left">
              With top-quality synthetic grass, excellent lighting, and a safe,
              well-maintained surface, we ensure every match feels professional
              and enjoyable. Our goal is to create an environment where players
              can focus on the game, improve their skills, and enjoy every
              moment on the field.
            </p>

            <Link
              href="/"
              className={`${secondary_button} w-max mt-6.25 lg:mt-10 mx-auto md:mx-0`}
            >
              Read More
              <Image
                src="/media/p-btn-arrow.svg"
                alt="contact"
                width={21}
                height={21}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWelcomeSection;
