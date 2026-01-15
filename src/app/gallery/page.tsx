import GalleryBanner from "@/components/Screens/GalleryPage/GalleryBanner";
import GalleryTabs from "@/components/Screens/GalleryPage/GalleryTabs";
import RealPeople from "@/components/Screens/GalleryPage/RealPeople";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Turf Gallery in Shajapur | The Hit Hub ",
  description: "Explore The Hit Hub sports turf in Shajapur. View football, cricket & box cricket turf photos. Trusted by players from Indore & nearby areas.",
};


export default function Gallery() {
  return (
    <div className="flex flex-col w-full">
      {/* banner section */}
      <section className="w-full  bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat pt-36 px-3.75 pb-127.5">
        <div className="mx-auto flex flex-col w-full max-w-292.5">
          <GalleryBanner />
        </div>
      </section>

      {/* Tabs sections  */}
      <section className="w-full bg-[url('/media/rules-top.svg')] bg-top bg-repeat-x px-3.75 relative z-10">
        <div className="mx-auto flex w-full max-w-292.5 flex-col -mt-108.75">
          <GalleryTabs />
        </div>
      </section>

      {/* Real People Section */}
      <section className="w-full bg-[#F9EBDAB2] px-3.75 pt-30 relative z-1">
        <div className="mx-auto flex w-full max-w-292.5 flex-col -mb-10">
          <RealPeople />
        </div>
      </section>
    </div>
  );
}