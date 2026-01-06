import GalleryTabs from "@/components/Screens/GalleryPage/GalleryTabs";
import SportsBanner from "@/components/Screens/SportsPage/SportsBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports - Create Next App",
  description: "Sports page of the application",
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
    </div>
  );
}