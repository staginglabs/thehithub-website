import Banner from "@/components/Screens/HomePage/banner";
import Cards from "@/components/Screens/HomePage/Cards";
import HomeWelcomeSection from "@/components/Screens/HomePage/HomeWelcomeSection";
import InstagramSection from "@/components/Screens/HomePage/InstagramSection";
import TurfArea from "@/components/Screens/HomePage/TurfArea";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full dark:bg-black">
        {/* banner section */}
        <section
          className="w-full bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="mx-auto flex flex-col w-full max-w-292.5 pt-32 px-3.75">
            <Banner />
          </div>
        </section>

        {/* Other sections  */}
        <section className="w-full bg-linear-to-b from-[#F9EBDA] to-[#FFFFFF]">
          <div className="mx-auto px-3.75 flex w-full max-w-292.5 flex-col">
            <HomeWelcomeSection />
            <InstagramSection />
          </div>
        </section>

        <section className="w-full bg-[#ffffff] py-30">
          <div className="mx-auto px-3.75 flex w-full max-w-7xl flex-col relative">
            <TurfArea />
          </div>
        </section>
      </div>
    </>
  );
}