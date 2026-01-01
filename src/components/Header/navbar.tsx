"use client";

import { useState } from "react";
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

  return (
    <>
      {/* Navbar */}
      <nav className="w-full px-3.75 py-1.25">
        <div className="mx-auto flex max-w-347.5 items-center">
          {/* Logo*/}
          <div className="w-[20%]">
            <Link href="/">
              <Image
                src="/media/logo.svg"
                alt="The Hit Hub"
                width={100}
                height={90}
                priority
              />
            </Link>
          </div>

          {/* Link */}
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

          {/* Contact Botton */}
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

            {/* Toggle */}
            <button onClick={() => setOpen(true)} className="lg:hidden">
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 ${
          open ? "block" : "hidden"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.href
                    ? "text-[#18A34B]"
                    : "text-[#000000]"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t p-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`inline-flex ${primary_button}`}
          >
            Contact Us
              <Image
                src="/media/p-btn-arrow.svg"
                alt="contact"
                width={21}
                height={21}
              />
          </Link>
        </div>
      </aside>
    </>
  );
}