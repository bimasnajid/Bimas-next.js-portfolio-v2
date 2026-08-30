"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

import FixedButton from "./FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -15,
  },
};

export default function Navbar(): React.ReactElement {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const router = useRouter();

  const toggleMenu = (): void => {
    setIsNavOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsNavOpen(false);
  };

  const handleBack = (): void => {
    router.push("/");
  };

  return (
    <>
      <nav
        className="
          fixed top-0 left-0
          flex h-14 w-full items-center justify-between
 bg-white/5 
  border-b border-white/20
  z-[60]
          px-4
          shadow-sm
          backdrop-blur-md
          sm:h-16
          sm:px-6
          md:px-10
          lg:px-16
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          <FixedButton onClick={handleBack}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-lg text-black sm:text-xl"
            />
          </FixedButton>

          {/* BRAND - tidak menggunakan h1/h2 */}
          <div className="text-lg font-medium text-black sm:text-xl">
            Bimasni
          </div>
        </div>

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

      {/* OVERLAY */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="
              fixed inset-0 z-[50]
              flex items-center justify-center
              bg-white/70
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center gap-6 text-black"
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                staggerChildren: 0.15,
              }}
            >
              {/* JANGAN gunakan h1 di sini */}
              <motion.div
                variants={itemVariants}
                className="mb-4 text-4xl font-bold sm:text-5xl"
              >
                Menu
              </motion.div>

              <motion.a
                variants={itemVariants}
                href="/#home"
                onClick={closeMenu}
                className="text-xl font-semibold"
              >
                Home
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="/about"
                onClick={closeMenu}
                className="text-xl font-semibold"
              >
                About
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="/projects"
                onClick={closeMenu}
                className="text-xl font-semibold"
              >
                Projects
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="/#contact"
                onClick={closeMenu}
                className="text-xl font-semibold"
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
