"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { primary_button } from "@/fonts/fonts";

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
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300
          ${scrolled ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2 px-3.75" : "bg-transparent py-4 px-3.75"}
        `}
      >
        <div className="mx-auto flex max-w-347.5 items-center">
          {/* Logo */}
          <div className="w-[20%] transition-all duration-300">
            <Link href="/">
              <Image
                src="/media/logo.svg"
                alt="The Hit Hub"
                width={scrolled ? 70 : 100}  
                height={scrolled ? 50 : 90}
                priority
              />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden w-[60%] justify-center lg:flex">
            <ul className="flex gap-8 text-sm text-[16px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition ${
                      pathname === link.href
                        ? "text-[#18A34B]"
                        : "text-[#000000] hover:text-[#18A34B]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button + Menu Toggle */}
          <div className="flex w-[80%] items-center justify-end gap-3 lg:w-[20%]">
            <Link
              href="/contact"
              className={`hidden lg:flex ${primary_button} py-2.5! h-11! pl-4! pr-4!`}
            >
              Contact Us
              <Image
                src="/media/p-btn-arrow.svg"
                alt="contact"
                width={21}
                height={21}
              />
            </Link>

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