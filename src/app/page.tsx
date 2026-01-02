import Banner from "@/components/Screens/HomePage/banner";
import Area from "@/components/Screens/HomePage/turf-area";
import HomeWelcomeSection from "@/components/Screens/HomePage/HomeWelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <main className="flex  w-full max-w-292.5 flex-col items-center justify-between py-32 px-3.75   dark:bg-black sm:items-start ">

        <Banner />
        <HomeWelcomeSection />
        <Area />

      </main>
    </div>
  );
}
