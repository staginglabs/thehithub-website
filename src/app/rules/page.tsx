import Rulebanner from "@/components/Screens/RulesPage/Rulebanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Turf Rules in Shajapur | Guidelines for Players",
  description: "View sports turf rules & regulations at The Hit Hub in Shajapur. Safe play guidelines for football & cricket turf, followed by Indore players too.",
};

export default function Rules() {
  return (
    <div className="flex  items-center justify-center  dark:bg-black bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <main className="flex  w-full max-w-292.5 flex-col items-center justify-between py-32 px-3.75   dark:bg-black">
        <Rulebanner />
      </main>
    </div>
  );
}
