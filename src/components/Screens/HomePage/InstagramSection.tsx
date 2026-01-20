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
         <Link href="https://www.instagram.com/thehithubofficial/" target="_blank">
          <Image
            src="/media/icons/instagram.svg"
            width={167}
            height={40}
            alt="instagram"
            style={{ height: "auto" }}
          />
        </Link>

          <Link
            href="https://www.instagram.com/thehithubofficial/"
            target="_blank"
            className={`${primary_button} w-max mx-auto md:mx-0`}
          >
            Read More
            <Image
              style={{ height: 'auto' }}
              src="/media/p-btn-arrow.svg"
              alt="contact"
              width={31}
              height={31}
            />
          </Link>
        </div>
      </div>

       <div className="w-full overflow-hidden -mb-10">
      <iframe
        src="//lightwidget.com/widgets/451a99990e515b9c9412540607daff92.html"
        style={{ border: "0", height: "1100px" }}
        className="w-full h-112.5 border-0"
        />
    </div>
    </>
  );
};

export default InstagramSection;
