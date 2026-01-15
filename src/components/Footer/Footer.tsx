"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { secondary_button } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [openVideo, setOpenVideo] = useState(false);

    return (
        <>
            <footer className="relative w-full">

                {/* TOP CTA SECTION */}
                <section
                    className="relative px-3.5 pt-50 pb-82.5 max-lg:pt-25 max-lg:pb-40 bg-[url('/media/ready-to-play.jpg')] bg-cover bg-top bg-no-repeat before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-60 before:max-lg:h-25 before:bg-[url('/media/ready-to-play-buttom.svg')] before:bg-no-repeat before:bg-bottom before:bg-cover"
                >
                    <div className="relative max-w-7xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.4 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Ready to Play Book Your Turf Now!
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.4 }}
                            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                            className="mt-4 max-w-215.25 mx-auto"
                        >
                            Ready to play on a professional-grade turf? Book your slot at The Hit Hub Turf
                            today and experience high-energy matches with premium facilities and perfect
                            lighting.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.4 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                            className="mt-8 flex justify-center gap-4 flex-wrap"
                        >
                            <Link href="/book-slot" className={secondary_button}>
                                Book A Slot
                                <Image src="/media/s-button.svg" alt="contact" width={31} height={31} />
                            </Link>

                            {/* SEE THE TURF (POPUP) */}
                            <button
                                type="button"
                                onClick={() => setOpenVideo(true)}
                                className="font-semibold text-[16px] underline flex gap-4 items-center text-[#0F351D] hover:text-[#15A34A] cursor-pointer"
                            >
                                See The Turf
                                <Image src="/media/icons/play-icon.svg" alt="Turf" width={50} height={50} />
                            </button>
                        </motion.div>

                    </div>

                </section>

                {/* BOTTOM INFO SECTION */}
                <section className="bg-[#24392B] bg-[url('/media/footer-text.svg')] bg-contain xl:bg-auto bg-bottom bg-no-repeat text-white px-3.75">
                    <div className="max-w-292.5 mx-auto pt-14">

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <Link href="/">
                                    <Image
                                        src="/media/logo.svg"
                                        alt="The Hit Hub"
                                        width={150}
                                        height={150}
                                        priority
                                    />
                                </Link>
                            </div>

                            <div>
                                <p className="text-lg">
                                    Shajapur's First Multi-Sport Turf Arena
                                </p>
                                <Link
                                    href="#"
                                    className="text-[#99CA3C] hover:text-[#ffffff] text-[24px] underline font-semibold italic flex items-center max-md:justify-center gap-3"
                                >
                                    VISIT OUR LOCATION
                                    <Image src="/media/s-button.svg" alt="Location" width={25} height={25} />
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[34%_28%_38%] py-21.25 max-lg:py-15 rounded-xl bg-[url('/media/footer-image.jpg')] bg-cover bg-center bg-no-repeat">

                            <div className="text-center px-11.25 lg:px-4 md:px-3 f-col">
                                <Image className="mx-auto mb-5" src="/media/icons/location-icon.svg" alt="Location" width={20} height={20} />
                                <span className="font-bold text-[16px]">OUR LOCATION</span>
                                <p className="text-[#ffffff] mt-2.5">
                                    Dupada Rd, behind Sahaj Public School, Shajapur
                                </p>
                            </div>

                            <div className="text-center px-11.25 lg:px-4 md:px-3 max-lg:border-l-0 max-lg:border-r-0 max-lg:border-t max-lg:border-b border-l border-r border-[#FFFFFF8F] f-col">
                                <Image className="mx-auto mb-5" src="/media/icons/call-icon.svg" alt="Location" width={24} height={24} />
                                <span className="font-bold text-[16px]">REACH OUT</span>
                                <p className="text-[#ffffff] mt-2.5">
                                    <a href="tel:9893459995" className="block hover:text-[#99CA3C]">
                                        (+91) 98934 59 995
                                    </a>
                                    <a href="tel:9806275786" className="block hover:text-[#99CA3C]">
                                        (+91) 98062 75 786
                                    </a>
                                </p>

                                {/* SOCIAL MEDIA ICONS */}
                                <div className="mt-5 flex items-center justify-center gap-3">
                                    <a href="#" aria-label="Facebook" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                        <Image src="/media/icons/facebook.svg" alt="Facebook" width={16} height={16} />
                                    </a>

                                    <a href="#" aria-label="Instagram" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                        <Image src="/media/icons/instagram-icon.svg" alt="Instagram" width={16} height={16} />
                                    </a>

                                    <a href="#" aria-label="YouTube" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                        <Image src="/media/icons/youtube.svg" alt="YouTube" width={16} height={16} />
                                    </a>

                                    <a href="#" aria-label="Snapchat" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                        <Image src="/media/icons/snapchat.svg" alt="Snapchat" width={16} height={16} />
                                    </a>

                                    <a href="#" aria-label="LinkedIn" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                        <Image src="/media/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
                                    </a>

                                    <a href="#" aria-label="X" className="social-icon w-7.5 h-7.5 p-2 bg-[#FFFFFF29] hover:bg-[#99CA3C] flex justify-center align-middle rounded-full">
                                        <Image src="/media/icons/x.svg" alt="X" width={16} height={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="text-center px-11.25 lg:px-4 md:px-3 f-col">
                                <Image className="mx-auto mb-5" src="/media/icons/time-icon.svg" alt="Location" width={24} height={24} />
                                <span className="font-bold text-[16px]">Opening Hours</span>
                                <p className="text-[#ffffff] mt-2.5">
                                    Monday to Sunday <br />
                                    10:00 am – Late Night 1:00 am
                                </p>
                            </div>
                        </div>

                        <div className="text-center py-4 text-[16px]">
                            © Copyright {currentYear} The Hit Hub. All Rights Reserved.
                        </div>
                    </div>
                </section>
            </footer>

            {/* VIDEO POPUP */}
            {openVideo && (
                <div
                    className="fixed inset-0 z-999 bg-black/70 flex items-center justify-center px-4"
                    onClick={() => setOpenVideo(false)}
                >
                    <div
                        className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpenVideo(false)}
                            className="absolute top-3 right-3 text-white text-2xl z-10 w-8.75 h-8.75 rounded-[5px] bg-[#000000] hover:bg-[#15A34A] cursor-pointer"
                        >
                            ✕
                        </button>

                        <div className="aspect-video">
                            <video
                                src="/media/videos.mp4"
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;