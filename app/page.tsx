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
// import MyGitHubCalendar from "@/components/CalenderGit";

const HomePage: React.FC = () => (
  <div className="flex flex-col z-50">
    <div className="flex">
      <Sidebar />
      <Navbar />
    </div>

    <div className="w-full">
      <ReactFullpage
        anchors={["home", "about", "projects", "contact"]}
        scrollingSpeed={1000} /* Menyesuaikan kecepatan scroll */
        credits={{ enabled: false }}
        menu="#Sidebar"
        autoScrolling={true}
        fitToSection={true}
        fitToSectionDelay={0}
        scrollBar={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="container grid grid-cols-1 gap-4 p-10 mx-auto overflow-hidden md:grid-cols-3 md:px-20">
                  <motion.div
                    className="flex flex-col items-center justify-center col-span-2 text-center md:items-start md:text-start"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                    }}
                  >
                    <div className="block col-span-1 mx-auto my-10 md:hidden">
                      <div className="bg-slate-500 h-60 w-60 grayscale hover:grayscale-0 rounded-full">
                        <img
                          src="/images/bymni.jpg"
                          alt="Example Image"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                    <motion.h3
                      className="uppercase font-normal text tracking-[.5rem] text-gray-500 px-8"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                      }}
                    >
                      Bimas Najid Ilmansyah
                    </motion.h3>
                    <motion.h1
                      className="my-2 text-5xl font-bold text-black md:text-6xl lg:text-7xl 2xl:text-8xl md:my-5 px-7"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                      }}
                    >
                      Full Stack Developer
                    </motion.h1>
                    <motion.p
                      className="title text-md 2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] px-8"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.4,
                        type: "spring",
                      }}
                    >
                      A junior fullstack developer who currently focused on Web
                      Development. Other than that, I also interested in UX/UI
                      Design, Mobile and AI Development. I love to learn new
                      things and always open to new opportunities.
                    </motion.p>
                    <motion.div
                      className="flex flex-row items-center justify-center mt-10 space-x-4 buttons px-8"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                      }}
                    >
                      <Button variation="primary">
                        <Link href={"/docs/cv.pdf"}>Download CV</Link>
                      </Button>
                      <Button variation="secondary">
                        <a href="#contact">Contact Me</a>
                      </Button>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="items-center justify-center hidden col-span-1 mx-auto md:flex "
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7,
                      type: "spring",
                    }}
                  >
                    <div className="w-auto h-auto rounded-full lg:px-12 grayscale hover:grayscale-0">
                      <img
                        src="/images/HIMA_BIMAS.png"
                        alt="Example Image"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="section">
                <div className="relative flex flex-col items-center justify-center w-screen gap-4 overflow-hidden md:h-screen">
                  <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
                    <motion.div
                      className="bg-slate-300 rounded-sm w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
                      initial={{
                        x: 300,
                        opacity: 0,
                        z: -100,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        z: 0,
                      }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    >
                      <img
                        src="/images/mee3.jpg"
                        alt="Example Image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </motion.div>
                  </div>
                  <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                    <motion.h1
                      className="px-3 text-6xl font-bold text-black bg-white bg-opacity-50 lg:bg-transparent md-px-0 md:text-7xl"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1,
                        type: "spring",
                      }}
                    >
                      About Me
                    </motion.h1>
                    <Hr />
                    <motion.p
                      className="title mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                      }}
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
                    >
                      <Button variation="primary">
                        <Link href="/about">Learn More</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="relative flex flex-col items-center justify-center w-screen gap-4 p-10 overflow-hidden md:h-screen">
                  <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
                    <motion.div
                      className="bg-slate-300 rounded-sm w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 relative"
                      initial={{ x: 300, opacity: 0, z: -100 }}
                      whileInView={{ x: 0, opacity: 1, z: 0 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    >
                      <img
                        src="/images/projects-all.jpg"
                        alt="Projects All"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </motion.div>
                  </div>
                  <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                    <motion.h1
                      className="px-3 text-6xl font-bold text-black bg-white bg-opacity-50 lg:bg-transparent md-px-0 md:text-7xl"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1, type: "spring" }}
                    >
                      My Projects
                    </motion.h1>
                    <Hr />
                    <motion.p
                      className="title mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5 "
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      This is some of my projects that I have done{" "}
                      <span className="marker:bg-transparent bg-opacity-50 md:bg-gray-100">
                        and currently working on.
                      </span>
                    </motion.p>
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <Button variation="primary">
                        <Link href="/projects">Learn More</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="relative flex flex-col items-center justify-center w-screen gap-4 p-10 overflow-hidden md:h-screen">
                  <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
                    <motion.div
                      className="bg-slate-300 rounded-sm w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 relative"
                      initial={{ x: 300, opacity: 0, z: -100 }}
                      whileInView={{ x: 0, opacity: 1, z: 0 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    >
                      <img
                        src="/images/setup.jpg"
                        alt="Example Image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </motion.div>
                  </div>
                  <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
                    <motion.h1
                      className="px-3 mb-3 text-6xl font-bold text-black bg-white bg-opacity-50 lg:bg-transparent md-px-0 md:text-7xl"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1, type: "spring" }}
                    >
                      Get In Touch
                    </motion.h1>
                    <Hr />
                    <motion.p
                      className="title mt-2 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      Feel free to contact me if you have any{" "}
                      <span className="bg-transparent bg-opacity-50 md:bg-gray-100 ">
                        questions or just want to say hi.
                      </span>
                    </motion.p>
                    <motion.p
                      className="title mt-2 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <a href="mailto:bimasnajid999@gmail.com?subject=Hello&body=Hello Mybimas,">
                        bimasoffcl09@gmail.com
                      </a>
                    </motion.p>
                    {/* Social Media Icons */}
                    <div className="flex items-center justify-center space-x-4">
                      <motion.a
                        href="mailto:bimasnajid999@gmail.com?subject=Hello&body=Hello Mybimas,"
                        className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-lime-500 rounded-full w-14 h-14 hover:bg-gray-400"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          y: { delay: 0.1 },
                          opacity: { delay: 0.2 },
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-3xl"
                        />
                      </motion.a>
                      <motion.a
                        href="https://github.com/bimasnajid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-lime-500 rounded-full w-14 h-14 hover:bg-gray-400"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          y: { delay: 0.2 },
                          opacity: { delay: 0.3 },
                        }}
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/bimasni_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-lime-500 rounded-full w-14 h-14 hover:bg-gray-400"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          y: { delay: 0.3 },
                          opacity: { delay: 0.4 },
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-3xl"
                        />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/bimas-najid-ilmansyah-097a9127a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-lime-500 rounded-full w-14 h-14 hover:bg-gray-400"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          y: { delay: 0.4 },
                          opacity: { delay: 0.5 },
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="text-3xl"
                        />
                      </motion.a>
                      <motion.a
                        href="https://discord.com/channels/@me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-lime-500 rounded-full w-14 h-14 hover:bg-gray-400"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          y: { delay: 0.5 },
                          opacity: { delay: 0.6 },
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faDiscord}
                          className="text-3xl"
                        />
                      </motion.a>
                      <motion.a
                        href="https://whatsapp.com/send?phone=+62881027589004"
                        target="_blank"
                        className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-lime-500 rounded-full w-14 h-14 hover:bg-gray-400"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          y: { delay: 0.5 },
                          opacity: { delay: 0.6 },
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          className="text-3xl"
                        />
                      </motion.a>
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
