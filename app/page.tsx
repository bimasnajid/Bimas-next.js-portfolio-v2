"use client";
import ReactFullpage from "@fullpage/react-fullpage";
// components
import Link from "next/link";
import Button from "../components/Button";
import Hr from "../components/Hr";
import { motion } from "framer-motion";

// incons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faD, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Import Image
import Images from "next/image";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const HomePage: React.FC = () => (
  <div className="flex flex-col z-50">
    <div className="flex">
      <Sidebar />
      <Navbar />
    </div>

    <div className="w-full">
      <ReactFullpage
        anchors={["home", "about", "projects", "contact"]}
        menu="#Sidebar"
        licenseKey="gplv3-license"
        scrollingSpeed={1200}
        easingcss3="cubic-bezier(0.65, 0, 0.35, 1)"
        easing="easeInOutCubic"
        autoScrolling={true}
        fitToSection={true}
        fitToSectionDelay={300}
        scrollBar={false}
        navigation={false}
        keyboardScrolling={true}
        continuousVertical={false}
        loopTop={false}
        loopBottom={false}
        touchSensitivity={15}
        bigSectionsDestination="top"
        credits={{
          enabled: false,
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div
                  className="
      section-container
      mx-auto
      grid
      min-h-[100svh]
      w-full
      max-w-[1500px]
      grid-cols-1
      items-center
      gap-8
      px-6
      py-10

      sm:px-8

      md:grid-cols-[2fr_1fr]
      md:gap-12
      md:px-12

      lg:gap-20
      lg:px-16

      xl:gap-28
      xl:px-20
    "
                >
                  {/* ================= TEXT ================= */}

                  <motion.div
                    className="
        flex
        w-full
        flex-col
        items-center
        justify-center
        text-center

        md:items-start
        md:text-left
      "
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* MOBILE IMAGE */}

                    <div
                      className="
          mb-6
          mt-4
          flex
          w-full
          justify-center
          md:hidden
        "
                    >
                      <div
                        className="
            aspect-square
            w-40
            overflow-hidden
            rounded-full
            bg-slate-500
            grayscale
            transition-all
            duration-500
            hover:grayscale-0
            sm:w-48
          "
                      >
                        <img
                          src="/images/bymni.jpg"
                          alt="Bimas Najid Ilmansyah"
                          className="
              block
              h-full
              w-full
              object-cover
            "
                        />
                      </div>
                    </div>

                    {/* NAME */}

                    <motion.h3
                      className="
          w-full
          px-4
          text-center
          text-xs
          font-normal
          uppercase
          tracking-[0.2rem]
          text-gray-500

          sm:text-sm
          sm:tracking-[0.3rem]

          md:px-0
          md:text-left

          lg:text-base
          lg:tracking-[0.45rem]
        "
                      initial={{ x: -80, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      Bimas Najid Ilmansyah
                    </motion.h3>

                    {/* TITLE */}

                    <motion.h1
                      className="
          my-3
          w-full
          px-4
          text-center
          text-4xl
          font-bold
          leading-[1.05]
          text-black

          sm:text-5xl

          md:my-5
          md:px-0
          md:text-left
          md:text-6xl

          lg:text-7xl

          xl:text-[5.5rem]
        "
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      Full Stack Developer
                    </motion.h1>

                    {/* DESCRIPTION */}

                    <motion.p
                      className="
          title
          mt-5
          w-full
          max-w-2xl
          px-4
          text-center
          text-sm
          leading-7
          tracking-wide
          text-gray-500

          sm:text-base
          sm:leading-8

          md:px-0
          md:text-left

          lg:text-lg
          lg:leading-8

          xl:text-xl
        "
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      A junior fullstack developer who currently focused on Web
                      Development. Other than that, I also interested in UX/UI
                      Design, Mobile and AI Development. I love to learn new
                      things and always open to new opportunities.
                    </motion.p>

                    {/* BUTTONS */}

                    <motion.div
                      className="
          buttons
          mt-8
          flex
          w-full
          flex-row
          items-center
          justify-center
          gap-4
          px-4

          md:mt-10
          md:w-auto
          md:justify-start
          md:px-0
        "
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Button variation="primary">
                        <Link href="/docs/cv.pdf">Download CV</Link>
                      </Button>

                      <Button variation="secondary">
                        <a href="#contact">Contact Me</a>
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* ================= DESKTOP IMAGE ================= */}

                  <motion.div
                    className="
        hidden
        w-full
        items-center
        justify-center

        md:flex
        md:justify-end
      "
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className="
          w-full
          max-w-[300px]
          overflow-hidden
          rounded-[999px]
          grayscale
          transition-all
          duration-500
          hover:grayscale-0

          md:max-w-[330px]
          lg:max-w-[360px]
          xl:max-w-[380px]
        "
                    >
                      <img
                        src="/images/HIMA_BIMAS.png"
                        alt="Bimas Najid Ilmansyah"
                        className="
            block
            h-auto
            w-full
            object-cover
          "
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="section">
                <div
                  className="
      w-full
      min-h-[100svh]
      px-5
      py-20
      sm:px-8
      md:px-12
      lg:px-20
      xl:px-28
      2xl:px-36
      flex
      items-center
    "
                >
                  <div
                    className="
        w-full
        max-w-[1400px]
        mx-auto
        grid
        grid-cols-1
        items-center
        gap-12
        md:grid-cols-2
        lg:gap-20
      "
                  >
                    {/* ================= TEXT ================= */}
                    <div
                      className="
          order-2
          flex
          flex-col
          items-center
          text-center
          md:order-1
          md:items-start
          md:text-left
        "
                    >
                      <motion.h1
                        className="
            w-full
            break-words
            text-4xl
            font-bold
            leading-tight
            text-black
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        About Me
                      </motion.h1>

                      <div className="mt-4">
                        <Hr />
                      </div>

                      <motion.p
                        className="
            title
            mt-5
            mb-6
            w-full
            max-w-xl
            text-sm
            leading-7
            tracking-wider
            text-gray-500
            sm:text-base
            sm:leading-8
            lg:text-lg
          "
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        A brief introduction about me and my interest.
                      </motion.p>

                      <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.3,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        <Button variation="primary">
                          <Link href="/about">Learn More</Link>
                        </Button>
                      </motion.div>
                    </div>

                    {/* ================= IMAGE ================= */}
                    <div
                      className="
          order-1
          flex
          w-full
          items-center
          justify-center
          md:order-2
          md:justify-end
        "
                    >
                      <motion.div
                        className="
    aspect-square
    w-[70vw]
    max-w-[320px]
    shrink-0
    overflow-hidden
    rounded-sm
    bg-slate-200
    grayscale
    transition-all
    duration-300
    hover:grayscale-0
    sm:w-[60vw]
    sm:max-w-[400px]
    md:w-full
    md:max-w-[450px]
    lg:max-w-[500px]
    xl:max-w-[550px]
  "
                        initial={{
                          x: 100,
                          opacity: 0,
                        }}
                        whileInView={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                        }}
                        viewport={{ once: true }}
                      >
                        <img
                          src="/images/me3.jpg"
                          alt="About Me"
                          className="
      block
      h-full
      w-full
      object-cover
    "
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div
                  className="
      flex
      min-h-[100svh]
      w-full
      items-center
      px-5
      py-16
      sm:px-8
      md:px-12
      lg:px-20
      xl:px-28
      2xl:px-36
    "
                >
                  <div
                    className="
        mx-auto
        grid
        w-full
        max-w-[1400px]
        grid-cols-1
        items-center
        gap-12
        md:grid-cols-2
        lg:gap-20
      "
                  >
                    {/* ================= TEXT PROJECT ================= */}
                    <div
                      className="
          order-2
          flex
          flex-col
          items-center
          text-center
          md:order-1
          md:items-start
          md:text-left
        "
                    >
                      <motion.h1
                        className="
            w-full
            break-words
            text-4xl
            font-bold
            leading-tight
            text-black
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.1,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        My Projects
                      </motion.h1>

                      <div className="mt-4">
                        <Hr />
                      </div>

                      <motion.p
                        className="
            title
            mt-5
            mb-6
            w-full
            max-w-xl
            px-2
            text-sm
            leading-7
            tracking-wider
            text-gray-500
            sm:px-0
            sm:text-base
            sm:leading-8
            lg:text-lg
          "
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        This is some of my projects that I have done and
                        currently working on.
                      </motion.p>

                      <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.3,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        <Button variation="primary">
                          <Link href="/projects">Learn More</Link>
                        </Button>
                      </motion.div>
                    </div>

                    {/* ================= IMAGE PROJECT ================= */}
                    <div
                      className="
          order-1
          flex
          w-full
          items-center
          justify-center
          md:order-2
          md:justify-end
        "
                    >
                      <motion.div
                        className="
            aspect-square
            w-[70vw]
            max-w-[320px]
            overflow-hidden
            rounded-sm
            bg-slate-200
            grayscale
            transition-all
            duration-300
            hover:grayscale-0

            sm:w-[60vw]
            sm:max-w-[400px]

            md:w-full
            md:max-w-[450px]

            lg:max-w-[500px]

            xl:max-w-[550px]
          "
                        initial={{
                          x: 100,
                          opacity: 0,
                        }}
                        whileInView={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                        }}
                        viewport={{ once: true }}
                      >
                        <img
                          src="/images/projects-all.jpg"
                          alt="Projects All"
                          className="
              block
              h-full
              w-full
              object-cover
            "
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="relative w-full min-h-screen overflow-hidden">
                  <div className="section-container flex flex-col items-center justify-center gap-10 py-20 md:min-h-screen md:grid md:grid-cols-2 md:gap-12 md:py-10">
                    {/* ================= FOTO ================= */}
                    <div className="order-1 flex items-center justify-center w-full md:order-2">
                      <motion.div
                        className="
    aspect-square
    w-[70vw]
    max-w-[320px]
    shrink-0
    overflow-hidden
    rounded-sm
    bg-slate-200
    grayscale
    transition-all
    duration-300
    hover:grayscale-0
    sm:w-[60vw]
    sm:max-w-[400px]
    md:w-full
    md:max-w-[450px]
    lg:max-w-[500px]
    xl:max-w-[550px]
  "
                        initial={{
                          x: 100,
                          opacity: 0,
                        }}
                        whileInView={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                        }}
                        viewport={{ once: true }}
                      >
                        <img
                          src="/images/setup.jpg"
                          alt="Get In Touch"
                          className="
      block
      h-full
      w-full
      object-cover
    "
                        />
                      </motion.div>
                    </div>

                    {/* ================= GET IN TOUCH ================= */}
                    <div className="order-2 flex flex-col justify-center w-full text-center md:order-1 md:text-left">
                      <motion.h1
                        className="
            mb-3
            text-4xl
            font-bold
            text-black
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.1,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        Get In Touch
                      </motion.h1>

                      <div className="flex justify-center md:justify-start">
                        <Hr />
                      </div>

                      <motion.p
                        className="
            title
            mt-4
            mb-3
            max-w-xl
            tracking-wider
            text-gray-500
            leading-relaxed
            text-sm
            sm:text-base
            md:text-lg
          "
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        Feel free to contact me if you have any{" "}
                        <span className="font-medium text-gray-700">
                          questions or just want to say hi.
                        </span>
                      </motion.p>

                      <motion.p
                        className="
            title
            mb-8
            break-all
            tracking-wider
            text-gray-500
            text-sm
            sm:text-base
            md:text-lg
          "
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.3,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        <a
                          href="mailto:bimasoffcl09@gmail.com?subject=Hello&body=Hello Mybimas,"
                          className="transition-colors hover:text-lime-500"
                        >
                          bimasoffcl09@gmail.com
                        </a>
                      </motion.p>

                      {/* ================= SOCIAL MEDIA ================= */}
                      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
                        {/* EMAIL */}
                        <motion.a
                          href="mailto:bimasoffcl09@gmail.com?subject=Hello&body=Hello Mybimas,"
                          className="
              flex
              items-center
              justify-center
              w-11
              h-11
              text-gray-100
              transition-all
              duration-300
              ease-in-out
              bg-lime-500
              rounded-full
              hover:bg-gray-400
              sm:w-12
              sm:h-12
              md:w-14
              md:h-14
            "
                          initial={{ y: 40, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{
                            y: { delay: 0.1 },
                            opacity: { delay: 0.2 },
                          }}
                          viewport={{ once: true }}
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-xl sm:text-2xl md:text-3xl"
                          />
                        </motion.a>

                        {/* GITHUB */}
                        <motion.a
                          href="https://github.com/bimasnajid"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
              flex
              items-center
              justify-center
              w-11
              h-11
              text-gray-100
              transition-all
              duration-300
              bg-lime-500
              rounded-full
              hover:bg-gray-400
              sm:w-12
              sm:h-12
              md:w-14
              md:h-14
            "
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            y: { delay: 0.2 },
                            opacity: { delay: 0.3 },
                          }}
                          viewport={{ once: true }}
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="text-xl sm:text-2xl md:text-3xl"
                          />
                        </motion.a>

                        {/* INSTAGRAM */}
                        <motion.a
                          href="https://www.instagram.com/bimasni_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
              flex
              items-center
              justify-center
              w-11
              h-11
              text-gray-100
              transition-all
              duration-300
              bg-lime-500
              rounded-full
              hover:bg-gray-400
              sm:w-12
              sm:h-12
              md:w-14
              md:h-14
            "
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            y: { delay: 0.3 },
                            opacity: { delay: 0.4 },
                          }}
                          viewport={{ once: true }}
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-xl sm:text-2xl md:text-3xl"
                          />
                        </motion.a>

                        {/* LINKEDIN */}
                        <motion.a
                          href="https://www.linkedin.com/in/bimas-najid-ilmansyah-097a9127a/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
              flex
              items-center
              justify-center
              w-11
              h-11
              text-gray-100
              transition-all
              duration-300
              bg-lime-500
              rounded-full
              hover:bg-gray-400
              sm:w-12
              sm:h-12
              md:w-14
              md:h-14
            "
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            y: { delay: 0.4 },
                            opacity: { delay: 0.5 },
                          }}
                          viewport={{ once: true }}
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-xl sm:text-2xl md:text-3xl"
                          />
                        </motion.a>

                        {/* DISCORD */}
                        <motion.a
                          href="https://discord.com/channels/@me"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
              flex
              items-center
              justify-center
              w-11
              h-11
              text-gray-100
              transition-all
              duration-300
              bg-lime-500
              rounded-full
              hover:bg-gray-400
              sm:w-12
              sm:h-12
              md:w-14
              md:h-14
            "
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            y: { delay: 0.5 },
                            opacity: { delay: 0.6 },
                          }}
                          viewport={{ once: true }}
                        >
                          <FontAwesomeIcon
                            icon={faDiscord}
                            className="text-xl sm:text-2xl md:text-3xl"
                          />
                        </motion.a>

                        {/* WHATSAPP */}
                        <motion.a
                          href="https://wa.me/62881027589004"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
              flex
              items-center
              justify-center
              w-11
              h-11
              text-gray-100
              transition-all
              duration-300
              bg-lime-500
              rounded-full
              hover:bg-gray-400
              sm:w-12
              sm:h-12
              md:w-14
              md:h-14
            "
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            y: { delay: 0.5 },
                            opacity: { delay: 0.6 },
                          }}
                          viewport={{ once: true }}
                        >
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="text-xl sm:text-2xl md:text-3xl"
                          />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  </div>
);

export default HomePage;
