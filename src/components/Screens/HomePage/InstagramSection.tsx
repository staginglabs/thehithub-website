import { primary_button, secondary_button } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InstagramSection = () => {
  return (
    <>
      <div className="home-welcome  mx-auto">
        <div className="">
          <div className="text-center">
            <h2>Follow us on Instagram</h2>
            <p className="max-w-200 mt-4">
              Stay connected with us on Instagram for match updates, exclusive
              offers, and exciting turf moments. Follow now and be part of our
              sports family!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-8.5">
        <div className="flex items-center justify-between w-full max-md:flex-col max-md:gap-6">
          <Image
            src={"./media/icons/instagram.svg"}
            width={167}
            height={40}
            alt="instagram"
          />

          <Link
            href="/"
            className={`${primary_button}  w-max  mx-auto md:mx-0`}
          >
            Read More
            <Image
              src="/media/p-btn-arrow.svg"
              alt="contact"
              width={21}
              height={21}
            />
          </Link>

          <div className="flex gap-2">
            <Image
              src={"./media/icons/arrow.svg"}
              width={50}
              height={50}
              alt="arrow"
              className=" size-12.5 border border-[#0F351D] rounded-full p-5 hover:bg-[#F8E108] hover:border-0"
            />

            <Image
              src={"./media/icons/arrow.svg"}
              width={50}
              height={50}
              alt="arrow"
              className=" size-12.5 border border-[#0F351D] rounded-full p-5 rotate-180 hover:bg-[#F8E108] hover:border-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramSection;
