"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { primary_button } from "@/fonts/fonts";
import { CTAButton } from '../CTA';
import { MenuLink } from '../MenuLink';


/* SVG Icons */
const MenuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = [
  { name: "Booking", href: "/booking" },
  { name: "Pricing", href: "/pricing" },
  { name: "Sports", href: "/sports" },
  { name: "Gallery", href: "/gallery" },
  { name: "Rules & Regulations", href: "/rules" },
  { name: "About Us", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
      className={`px-3.75 py-1.25 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      >
        <div 
        className={`mx-auto flex max-w-347.5 justify-between items-center transition-transform duration-300 ease-in-out ${
          isScrolled ? 'scale-80' : 'scale-100'
        }`}
        >
          {/* Logo*/}
          <div className="w-[20%]">
            <Link href="/" className="w-25">
              <Image
                src="/media/logo.svg"
                alt="The Hit Hub"
                width={100}
                height={90}
                className='transition-all'
                style={{ width: 'auto', height: '90px' }}
              />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden w-[60%] justify-center lg:flex">
            <ul className="flex gap-6 lg:gap-6 xl:gap-8 text-base">
              {navLinks.map((link) => (
                <MenuLink href={link.href} key={link.href}>{link.name}</MenuLink>
              ))}
            </ul>
          </div>

          {/* Contact Button + Menu Toggle */}
          <div className="flex w-[80%] items-center justify-end gap-3 lg:w-[20%]">
            <CTAButton label='Contact Us' href='/contact' className={`${primary_button} py-2.5! h-11! pl-4! pr-4!`} />

            {/* Toggle Menu Button */}
            <button onClick={() => setOpen(true)} className="lg:hidden">
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-99 bg-black/70 transition-opacity menu-overlay ${
          open ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-999 h-full w-80 bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6 pb-10 border-[#0000001A]">
          <span>
            <Link href="/">
              <Image
                src="/media/logo.svg"
                alt="The Hit Hub"
                width={60}  
                height={60}
                priority
              />
            </Link>
          </span>
          <button onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <ul className="flex flex-col gap-2 py-10 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={pathname === link.href ? "bg-[#18A34B] text-[#ffffff] px-6 py-2 w-full block" : "text-[#000000] hover:bg-[#18A34B] hover:text-[#ffffff] px-6 py-2 w-full block"}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`inline-flex w-full justify-between! h-10! ${primary_button}`}
          >
            Contact Us
              <Image
                src="/media/p-btn-arrow.svg"
                alt="contact"
                width={21}
                height={21}
                style={{ height: 'auto' }}
              />
          </Link>

          {/* SOCIAL MEDIA ICONS */}
          <div className="mt-8 flex items-center justify-between gap-3">
              <a href="#" aria-label="Facebook" className="social-icon w-7.5 h-7.5 p-2 bg-[#18A34B] flex justify-center align-middle rounded-full">
                  <Image src="/media/icons/facebook.svg" alt="Facebook" width={16} height={16} />
              </a>

              <a href="#" aria-label="Instagram" className="social-icon w-7.5 h-7.5 p-2 bg-[#18A34B] flex justify-center align-middle rounded-full">
                  <Image src="/media/icons/instagram-icon.svg" alt="Instagram" width={16} height={16} />
              </a>

              <a href="#" aria-label="YouTube" className="social-icon w-7.5 h-7.5 p-2 bg-[#18A34B] flex justify-center align-middle rounded-full">
                  <Image src="/media/icons/youtube.svg" alt="YouTube" width={16} height={16} />
              </a>

              <a href="#" aria-label="Snapchat" className="social-icon w-7.5 h-7.5 p-2 bg-[#18A34B] flex justify-center align-middle rounded-full">
                  <Image src="/media/icons/snapchat.svg" alt="Snapchat" width={16} height={16} />
              </a>

              <a href="#" aria-label="LinkedIn" className="social-icon w-7.5 h-7.5 p-2 bg-[#18A34B] flex justify-center align-middle rounded-full">
                  <Image src="/media/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
              </a>

              <a href="#" aria-label="X" className="social-icon w-7.5 h-7.5 p-2 bg-[#18A34B] flex justify-center align-middle rounded-full">
                  <Image src="/media/icons/x.svg" alt="X" width={16} height={16} />
              </a>
          </div>
        </div>
        
      </aside>
    </>
  );
}