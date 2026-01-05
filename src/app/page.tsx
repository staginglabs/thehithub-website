import Banner from "@/components/Screens/HomePage/banner";
import TurfArea from "@/components/Screens/HomePage/TurfArea";
import HomeWelcomeSection from "@/components/Screens/HomePage/HomeWelcomeSection";
import InstagramSection from "@/components/Screens/HomePage/InstagramSection";

export default function Home() {
  return (
    <>
      { <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <main className="flex  w-full max-w-292.5 flex-col items-center justify-between py-32 px-3.75   dark:bg-black sm:items-start ">
          <Banner />
          <HomeWelcomeSection />
          <InstagramSection />
           <TurfArea />
        </main>
      </div>
      }


      {/* HERO / WELCOME SECTION */}
      {/* <section className="bg-[url('/media/banner-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex min-h-screen items-center justify-center font-sans">
          <main className="flex w-full max-w-292.5 flex-col items-center py-32 px-3.75 sm:items-start">
            <Banner />
            <HomeWelcomeSection />
          </main>
        </div>
      </section> */}

      {/* NORMAL SECTIONS (NO BG IMAGE) */}
      {/* <section className="flex bg-linear-to-b from-white/50 to-[#F9EBDA] items-center justify-center font-sans">
        <main className="flex w-full max-w-292.5 flex-col items-center py-32 px-3.75 sm:items-start">
          <InstagramSection />
          <TurfArea />
        </main>
      </section> */}
    </>
  );
}
