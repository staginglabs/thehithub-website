import Rulebanner from "@/components/Screens/RulesPage/Rulebanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules - Create Next App",
  description: "Rules page of the application",
};

export default function Rules() {
  return (
    <div className="flex flex-col w-full dark:bg-black">
      {/* banner section */}
      <section
        className="w-full 
    bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="mx-auto flex flex-col w-full max-w-292.5 pt-32 px-3.75">
          <Rulebanner />
        </div>
      </section>

      {/* Other sections  */}

      <section className="w-full bg-linear-to-b from-[#F9EBDA] to-[#F9EBDA00]">
        <div className="mx-auto px-3.75 flex w-full max-w-292.5 flex-col">
          <Rules />
        </div>
      </section>
    </div>
  );
}
