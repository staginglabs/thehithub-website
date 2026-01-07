"use client";
import Link from "next/link";
import { motion } from "framer-motion";

{/* <li key={link.href}>
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
                </li> */}

export const MenuLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative block overflow-hidden whitespace-nowrap uppercase text-lg"
        style={{ lineHeight: 0.8 }}
      >
        {/* Top Layer */}
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>

        {/* Bottom Layer (Hidden below) */}
        <motion.div
          className="absolute inset-0"
          variants={{
            initial: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#18A34B]">{children}</span>
        </motion.div>
      </motion.div>
    </Link>
  );
};