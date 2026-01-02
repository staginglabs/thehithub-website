import Banner from "@/components/Screens/HomePage/banner";
import HomeWelcomeSection from "@/components/Screens/HomePage/HomeWelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  items-center justify-center   bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <main className="flex  w-full max-w-292.5 flex-col items-center justify-between  px-3.75    ">
        {/* banner start  */}

        <Banner />
        <HomeWelcomeSection />

        {/* banner end  */}
      </main>
    </div>
  );
}
