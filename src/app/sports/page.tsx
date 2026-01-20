import MultipleSports from "@/components/Screens/SportsPage/MultipleSports";
import SportsBanner from "@/components/Screens/SportsPage/SportsBanner";
import SportsPlay from "@/components/Screens/SportsPage/SportsPlay";
import TurfFor from "@/components/Screens/SportsPage/TurfFor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Turf in Shajapur Near Indore | The hit hub",
  description: "Looking for a sports turf in Shajapur near Indore? The Hit Hub offers premium turf for football, cricket, volleyball & kabaddi with easy booking.",
};


export default function Sport() {
  return (
    <div className="flex flex-col w-full">
      {/* banner section */}
      <section className="w-full  bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat pt-36 px-3.75 pb-127.5">
        <div className="mx-auto flex flex-col w-full max-w-292.5">
          <SportsBanner />
        </div>
      </section>

      {/* Play at The Hit Hub  */}
      <section className="w-full bg-[url('/media/rules-top.svg')] bg-top bg-repeat-x px-3.75 relative z-10 pb-10">
        <div className="mx-auto flex w-full max-w-292.5 flex-col -mt-108.75">
          <SportsPlay />
        </div>
      </section>

      {/* Multiple Sports  */}
      <section className="w-full relative z-20 bg-[#FFDD55] lg:pt-26 md:pt-20 pt-20 pb-10 md:pb-0">
          <MultipleSports />
      </section>

      {/* Turf For  */}
      <section className="w-full bg-[#ffffff] px-3.75 lg:pt-49 md:pt-20 pt-20 relative z-10">
        <div className="mx-auto flex w-full max-w-292.5 flex-col lg:-mb-26">
          <TurfFor />
        </div>
      </section>
    </div>
  );
}