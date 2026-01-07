import { CTAButton } from "@/components/CTA";
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
        <h1>Every Shot Has A Story</h1>
      </div>

      <div className="flex flex-col lg:grid grid-cols-1 md:grid-cols-3  sm:gap-y-14 md:gap-10 banner-plyer pb-17.5 mt-10 lg:pb-55.5 lg:mt-0 ">
        {/* Left Content */}
        <div className="banner-text flex flex-col  items-center lg:items-baseline  order-3 lg:order-1 text-center md:text-left  mt-42 sm:mt-37.5 md:mt-21.25 lg:mt-0  ">
          <p className=" sm:max-w-[63%] text-center lg:text-left lg:max-w-full">
            A premium turf space designed for high-energy play and unforgettable
            moments.
          </p>
          <CTAButton label='Contact Us' href='/contact' className={`${secondary_button} w-max mt-6.25 lg:mt-10`} />
        </div>

        {/* Center Image */}
        <div className="banner-image relative w-full h-75 md:h-105 flex justify-center -mt-22.5  lg:ml-1.5  order-2">
          <Image
            src="/media/plyers.png"
            alt="Players"
            width={975}
            height={600}
            style={{ height: 'auto' }}
            className="object-contain md:max-w-175 lg:max-w-200 h-143.25"
            priority
          />
        </div>

        {/* Right List */}
        <div className="flex justify-center  lg:justify-end banner-list order-1 lg:order-3 ">
          <ul className="space-y-5 flex flex-wrap justify-center lg:block space-x-5 lg:space-x-0">
            {bannerListItems.map((item, index) => {
              return (
                <li className={banner_list_text} key={index}>
                  <Image
                    src={item.bannerListImage}
                    width={30}
                    height={30}
                    alt="box-cricket"
                    style={{ height: 'auto' }}
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
