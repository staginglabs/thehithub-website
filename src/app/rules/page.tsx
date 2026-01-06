import GameRules from "@/components/Screens/RulesPage/GameRules";
import Rulebanner from "@/components/Screens/RulesPage/Rulebanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Turf Rules in Shajapur | Guidelines for Players",
  description: "View sports turf rules & regulations at The Hit Hub in Shajapur. Safe play guidelines for football & cricket turf, followed by Indore players too.",
};

export default function Rules() {
  return (
    <div className="flex flex-col w-full">
      {/* banner section */}
      <section className="w-full  bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat pt-36 px-3.75 pb-127.5">
        <div className="mx-auto flex flex-col w-full max-w-292.5">
          <Rulebanner />
        </div>
      </section>

      {/* Other sections  */}
      <section className="w-full bg-[url('/media/rules-top.svg')] bg-top bg-repeat-x px-3.75 relative z-10 -mb-23
        before:content-['']
        before:absolute
        before:left-0
        before:bottom-0
        before:w-full
        before:h-500
        before:bg-[url('/media/rules-bottom.svg')]
        before:bg-repeat-x
        before:bg-bottom">
        <div className="mx-auto flex w-full max-w-292.5 flex-col  border-2 border-[#FFFFFF] bg-[#FFFFFF66] p-20 max-md:px-5 rounded-[20px] -mt-108.75 relative z-10">
          <GameRules />
        </div>
      </section>
    </div>
  );
}