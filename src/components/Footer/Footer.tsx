import { secondary_button } from "@/fonts/fonts";
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
                    max-lg:pt-25
                    max-lg:pb-40
                    bg-[url('/media/ready-to-play.jpg')]
                    bg-cover
                    bg-center
                    bg-no-repeat

                    before:content-['']
                    before:absolute
                    before:left-0
                    before:bottom-0
                    before:w-full
                    before:h-60
                    before:max-lg:h-25
                    before:bg-[url('/media/ready-to-play-buttom.svg')]
                    before:bg-no-repeat
                    before:bg-bottom
                    before:bg-cover
                "
            >
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h2>Ready to Play Book Your Turf Now!</h2>

                    <p className="mt-4 max-w-215.25 mx-auto">
                        Ready to play on a professional-grade turf? Book your slot at The Hit Hub Turf today and experience high-energy matches with premium facilities and perfect lighting.
                    </p>

                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <Link
                            href="/book-slot"
                            className={`${secondary_button}`}
                        >
                            Book A Slot
                            <Image
                                src="/media/s-button.svg"
                                alt="contact"
                                width={31}
                                height={31}
                            />
                        </Link>

                        <Link
                            href="/turf"
                            className="font-semibold text-[16px] underline flex gap-4 items-center text-[#0F351D]"
                        >
                            See The Turf
                            <Image
                                src="/media/play-icon.svg"
                                alt="Turf"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* BOTTOM INFO SECTION */}
            <section className="bg-[#24392B] bg-[url('/media/footer-text.svg')] bg-auto lg:bg-contain xl:bg-auto bg-bottom bg-no-repeat text-white px-3.75">
                <div className="max-w-292.5 mx-auto pt-14">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <Image src="/media/logo.svg" alt="Logo" width={150} height={150} />
                        </div>

                        <div className="">
                            <p className="text-lg ">
                                Shajapur's First Multi-Sport Turf Arena
                            </p>
                            <Link
                                href="#"
                                className="text-[#99CA3C] hover:text-[#ffffff] text-[24px] underline font-semibold italic flex items-center md:justify-center gap-3"
                            >
                                VISIT OUR LOCATION
                                <Image src="/media/s-button.svg" alt="Location" width={25} height={25} />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-[34%_28%_38%] py-21.25 max-lg:py-15 rounded-xl bg-[url('/media/footer-image.jpg')] bg-cover bg-center bg-no-repeat">
                        <div className="text-center px-11.25 lg:px-4 md:px-3 f-col">
                            <Image className="mx-auto mb-5" src="/media/location-icon.svg" alt="Location" width={20} height={20} />
                            <span className="font-bold text-[16px]">OUR LOCATION</span>
                            <p className="text-[#ffffff] mt-2.5">
                                Dupada Rd, behind Sahaj Public School, Shajapur
                            </p>
                        </div>

                        <div className="text-center px-11.25 lg:px-4 md:px-3 border-l border-r border-[#FFFFFF8F] f-col">
                            <Image className="mx-auto mb-5" src="/media/call-icon.svg" alt="Location" width={24} height={24} />
                            <span className="font-bold text-[16px]">REACH OUT</span>
                            <p className="text-[#ffffff] mt-2.5">
                                <a href="tel:9893459995" className="block hover:text-[#99CA3C]">
                                    (+91) 98934 59 995
                                </a>
                                <a href="tel:9806275786" className="block hover:text-[#99CA3C]">
                                    (+91) 98062 75 786
                                </a>
                            </p>
                            {/* Social Media Icons */}
                            <div className="mt-5 flex items-center justify-center gap-3">
                                <a href="#" aria-label="Facebook" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                    <Image src="/media/facebook.svg" alt="Facebook" width={16} height={16} />
                                </a>

                                <a href="#" aria-label="Instagram" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                    <Image src="/media/instagram.svg" alt="Instagram" width={16} height={16} />
                                </a>

                                <a href="#" aria-label="YouTube" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                    <Image src="/media/youtube.svg" alt="YouTube" width={16} height={16} />
                                </a>

                                <a href="#" aria-label="Snapchat" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                    <Image src="/media/snapchat.svg" alt="Snapchat" width={16} height={16} />
                                </a>

                                <a href="#" aria-label="LinkedIn" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                    <Image src="/media/linkedin.svg" alt="LinkedIn" width={16} height={16} />
                                </a>

                                <a href="#" aria-label="X" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                    <Image src="/media/x.svg" alt="X" width={16} height={16} />
                                </a>
                            </div>
                        </div>

                        <div className="text-center px-11.25 lg:px-4 md:px-3 f-col">
                            <Image className="mx-auto mb-5" src="/media/time-icon.svg" alt="Location" width={24} height={24} />
                            <span className="font-bold text-[16px]">Opening Hours</span>
                            <p className="text-[#ffffff] mt-2.5">
                                Monday to Sunday <br />
                                10:00 am – Late Night 1:00 am
                            </p>
                        </div>
                    </div>
                    <div className="text-center py-4 text-[16px]">
                        © Copyright 2025 The Hit Hub. All Rights Reserved.
                    </div>
                </div>
            </section>

        </footer>
    );
};

export default Footer;