import Image from "next/image";

const firstList = [
  "High-density turf, no loose rubber",
  "Consistent lighting & night visibility",
  "Safe, family-friendly environment",
];

const secondList = [
  "Easy online booking",
  "Affordable pricing",
  "Perfect for tournaments and leagues",
];

const PlayersPrefer = () => {
  return (
      <div className="flex relative z-1 flex-wrap">
        {/* Section 1: Heading + First List */}
        <div className="w-full xl:w-[35%] lg:w-[30%] text-center lg:text-left pt-25 max-md:pt-20">
          <h2>Why Players Prefer <br /> The Hit Hub</h2>
          <p className="mt-5 mb-12.5">Designed for performance, comfort, and safety. </p>

          {/* First List */}
          <ul className="prefer-list w-full">
            {firstList.map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>

        {/* Section 2: Player Image */}
        <div className="w-full xl:w-[45%] lg:w-[40%] flex justify-center">
            <Image
              src="/media/players-prefer.png"
              alt="Player hitting"
              className="-mt-12 -ml-10 max-lg:mb-10 max-lg:m-0 prefer-img"
              width={438}
              height={718}
              style={{ objectFit: "contain" }}
              priority
            />
        </div>

        {/* Section 3: Second List */}
        <div className="w-full xl:w-[20%] lg:w-[30%] flex items-end pb-30 max-md:pb-20">
        <ul className="prefer-list w-full">
            {secondList.map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default PlayersPrefer;