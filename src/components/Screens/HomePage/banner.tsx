import { banner_list_text, secondary_button } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

const bannerListItems = [
  {
    text: "Football",
    bannerListImage: "/media/icons/football.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
  {
    text: "Box Cricket",
    bannerListImage: "/media/icons/box-cricket.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
  {
    text: "Badminton",
    bannerListImage: "/media/icons/badminton.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
  {
    text: "Volleyball",
    bannerListImage: "/media/icons/volleyball.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
  {
    text: "Kabaddi",
    bannerListImage: "/media/icons/kabaddi.svg",
    listClass: "bg-white rounded-full size-7.5 p-1.25",
  },
];

const Banner = () => {
  return (
    <>
      <div className="mx-auto">
        <h1 className="">Every Shot Has A Story</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 banner-plyer ">
        {/* Left Content */}
        <div className="text-center md:text-left banner-text ">
          <p className=" ">
            A premium turf space designed for high-energy play and unforgettable
            moments.
          </p>
          <Link href="/" className={`${secondary_button} w-max mt-10`}>
            Contact Us
            <Image
              src="/media/p-btn-arrow.svg"
              alt="contact"
              width={21}
              height={21}
            />
          </Link>
        </div>

        {/* Center Image */}
        <div className="relative w-full h-75 md:h-105 flex justify-center -mt-22 ml-1.5 banner-image">
          <Image
            src="/media/plyers.png"
            alt="Players"
            width={975}
            height={600}
            className="object-contain max-w-200 h-143.25"
            priority
          />
        </div>

        {/* Right List */}
        <div className="flex  md:justify-end banner-list">
          <ul className="space-y-5">
            {bannerListItems.map((item, index) => {
              return (
                <li className={banner_list_text}>
                  <Image
                    src={item.bannerListImage}
                    width={30}
                    height={30}
                    alt="box-cricket"
                    className={item.listClass}
                  />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Banner;
