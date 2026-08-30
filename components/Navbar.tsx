"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const itemVariants: Variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -15 },
};

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => setIsNavOpen((prev) => !prev);
  const closeMenu = () => setIsNavOpen(false);

  return (
    <>
      {/* ================= NAVBAR GLASS ================= */}
      <nav
        className="
        fixed top-0 left-0 w-full
        h-12 sm:h-14
        px-4 sm:px-6 md:px-10 lg:px-16
        flex items-center justify-between
        z-[60]
      "
      >
        {/* LOGO */}
        <h1
          className="text-lg sm:text-3xl px-5 
        text-black "
        >
          Bimasni
        </h1>

        {/* HAMBURGER */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="relative w-8 h-8 flex items-center justify-center"
        >
          {/* Top Line */}
          <span
            className={`absolute block h-[4px] w-10 bg-black rounded transition-all duration-300 ease-in-out
      ${isNavOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
    `}
          />

          {/* Bottom Line */}
          <span
            className={`absolute block h-[4px] w-10 bg-black rounded transition-all duration-300 ease-in-out
      ${isNavOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}
    `}
          />
        </button>
      </nav>

      {/* ================= OVERLAY MENU ================= */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="fixed inset-0 z-[50] bg-gray-400/10 backdrop-blur-md flex items-center justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center gap-6 text-black"
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ staggerChildren: 0.2 }}
            >
              <div className="text-4xl sm:text-5xl font-bold">Menu</div>

              <motion.a
                variants={itemVariants}
                href="/#home"
                onClick={closeMenu}
                className="relative text-xl font-semibold cursor-pointer
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0"
              >
                Home
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="/about"
                onClick={closeMenu}
                className="relative text-xl font-semibold cursor-pointer
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0"
              >
                About
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="/projects"
                onClick={closeMenu}
                className="relative text-xl font-semibold cursor-pointer
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0"
              >
                Projects
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="/#contact"
                onClick={closeMenu}
                className="relative text-xl font-semibold cursor-pointer
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0"
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
