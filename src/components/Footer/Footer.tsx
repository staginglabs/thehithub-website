import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full">

      {/* TOP CTA SECTION */}
      <section
        className="
            relative
            pt-50
            pb-82.5
            bg-[url('/media/ready-to-play.jpg')]
            bg-cover
            bg-center
            bg-no-repeat

            before:content-['']
            before:absolute
            before:left-0
            before:bottom-0
            before:w-full
            before:h-45
            before:bg-[url('/media/ready-to-play-buttom.svg')]
            before:bg-no-repeat
            before:bg-bottom
            before:bg-cover
        "
        >
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-900">
            Ready to Play <br />
            Book Your Turf Now!
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            Ready to play on a professional-grade turf?
            Book your slot at The Hit Hub Turf today and experience high-energy
            matches with premium facilities and perfect lighting.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/book-slot"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full"
            >
              Book A Slot
            </Link>

            <Link
              href="/turf"
              className="bg-white border hover:bg-gray-100 px-6 py-3 rounded-full font-semibold"
            >
              See The Turf
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM INFO SECTION */}
      <section className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-14">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo" width={70} height={70} />
              <p className="text-lg font-semibold">
                Shajapur’s First Multi-Sport Turf Arena
              </p>
            </div>

            <Link
              href="/location"
              className="text-green-300 hover:underline font-semibold"
            >
              VISIT OUR LOCATION →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-green-800/70 p-8 rounded-xl">
            <div>
              <h4 className="font-bold mb-2">OUR LOCATION</h4>
              <p className="text-sm text-green-100">
                Dupada Rd, behind Sahaj Public School, Shajapur
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">REACH OUT</h4>
              <p className="text-sm text-green-100">
                (+91) 98934 59 995 <br />
                (+91) 98062 75 786
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">OPENING HOURS</h4>
              <p className="text-sm text-green-100">
                Monday to Sunday <br />
                10:00 am – Late Night 1:00 am
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-green-300 py-4 border-t border-green-700">
          © Copyright 2025 The Hit Hub. All Rights Reserved.
        </div>
      </section>

    </footer>
  );
};

export default Footer;