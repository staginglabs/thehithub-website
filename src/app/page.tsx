import InstagramFeed from "@/components/InstagramFeed";
import Banner from "@/components/Screens/HomePage/Banner";
import HitHubGallery from "@/components/Screens/HomePage/HitHubGallery";
import HomeWelcomeSection from "@/components/Screens/HomePage/HomeWelcomeSection";
import PlayersPrefer from "@/components/Screens/HomePage/PlayersPrefer";
import TurfArea from "@/components/Screens/HomePage/TurfArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Turf in Shajapur & Near Indore | The Hit Hub Turf Arena",
  description: "The Hit Hub offers premium sports turf in Shajapur and near Indore. Book football, cricket & box cricket turf with top facilities. Reserve now!",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full dark:bg-black">
        {/* banner section */}
        <section className="w-full bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat px-3.75">
          <div className="mx-auto flex flex-col w-full max-w-292.5 pt-32 ">
            <Banner />
          </div>
        </section>

        {/* About section */}
        <section className="w-full bg-linear-to-b from-[#F9EBDA] to-[#FFFFFF] px-3.75">
          <div className="mx-auto flex w-full max-w-292.5 flex-col">
            <HomeWelcomeSection />
            {/* <InstagramSection /> */}
            <InstagramFeed />
          </div>
        </section>
         {/* Turf Area section */}
        <section className="w-full bg-[#ffffff] py-30 px-3.75 max-md:py-20">
          <div className="mx-auto flex w-full max-w-292.5 flex-col">
            <TurfArea />
          </div>
        </section>
        {/* Players Prefer section */}
        <section className="w-full bg-[url('/media/gray-abstract.png')] bg-cover bg-center bg-no-repeat px-3.75 relative prefer-section">
          <div className="mx-auto flex w-full max-w-292.5 flex-col">
            <PlayersPrefer />
          </div>
        </section>
        {/* HitHub Gallery section */}
        <section className="w-full px-3.75 py-30 max-md:py-20 relative bg-linear-to-b from-[#f9ebda8a] to-[#FFFFFF]">
          <div className="mx-auto flex w-full max-w-292.5 flex-col">
            <HitHubGallery />
          </div>
        </section>
      </div>
    </>
  );
}
