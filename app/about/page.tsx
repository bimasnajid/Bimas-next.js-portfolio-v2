"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import FixedButton from "../../components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import Hr from "../../components/Hr";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavView";
import MyGitHubCalendar from "@/components/CalenderGit";

interface Experience {
  title: string;
  company: string;
  desc: string;
  date: string;
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "PT Kurnia Anggun",
    desc: "Membuat website furniture menggunakan Next.js dan Tailwind CSS.",
    date: "Jan 2023 - Present",
  },
  {
    title: "Intern Web Developer",
    company: "CV Rattan Mebel",
    desc: "Mengembangkan sistem inventory menggunakan Laravel dan Vue.js.",
    date: "Jul 2022 - Des 2022",
  },
  {
    title: "Freelance UI Designer",
    company: "Remote",
    desc: "Mendesain landing page modern untuk klien UKM dan startup.",
    date: "2021 - Sekarang",
  },
  {
    title: "Freelance Student",
    company: "Remote",
    desc: "Mendesain landing page modern untuk klien UKM dan startup.",
    date: "2021 - Sekarang",
  },
];

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <main className="overflow-x-hidden w-full bg-white text-black">
        {/* NAV BAR FIX */}
        <Navbar />
        {/* NAVBAR */}
        {/* Nav End */}
        <div className="relative flex flex-col items-center justify-center w-screen h-screen gap-4 p-10 mb-10 overflow-hidden">
          <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.6 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
            >
              <img
                src="/images/bymni.jpg"
                alt="Example Image"
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
            <h1 className="text-5xl font-bold text-black bg-transparent bg-opacity-50 md:bg-white lg:bg-transparent md-px-0 md:text-7xl">
              My About
            </h1>
            <Hr />
            <p className="title mt-4 tracking-wider text-gray-900 leading-relaxed mb-5">
              A brief introduction about me and{" "}
              <span className="font-semibold text-black">my interest.</span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              onClick={() => {
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
              className="mb-3"
            >
              <Button variation="primary">Scroll Down</Button>
            </motion.div>
          </div>
        </div>

        {/* WHO AM I HEADER */}
        <div className="flex flex-col items-center justify-start w-full px-6 md:pl-32 mt-10">
          <div className="flex flex-col items-center self-start justify-center my-5">
            <Hr />
            <h1 className="mt-3 text-3xl font-bold">Who Am I?</h1>
          </div>
        </div>

        {/* WHO AM I CONTENT */}
        <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 mx-auto mb-10">
          {/* Photos Collage */}
          <div className="flex flex-col items-start justify-center mb-5">
            <div className="relative w-full images aspect-square">
              <div className="absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  className="w-full h-full shadow-lg"
                >
                  <img
                    src="/images/me3.jpg"
                    alt="Example Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
              <div className="absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full h-full shadow-lg"
                >
                  <img
                    src="/images/me3.jpg"
                    alt="Example Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full h-full shadow-lg"
                >
                  <img
                    src="/images/me1.jpg"
                    alt="Example Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <motion.div
            className="flex flex-col items-start justify-center mb-5 md:px-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: false }}
          >
            <h2 className="mb-3 text-2xl font-bold tracking-wider">
              Bimas Najid Ilmansyah
            </h2>
            <p className="text-base sm:text-lg text-justify text-gray-600 leading-relaxed">
              Hey there, I’m Bimas Najid Ilmansyah, a{" "}
              <span className="font-medium text-black">tech enthusiast</span>{" "}
              and{" "}
              <span className="font-medium text-black">
                aspiring Web Developer.
              </span>{" "}
              Originating from Pasuruan, East Java, Indonesia, I’m currently
              embarking on a fascinating journey at{" "}
              <span className="font-medium text-black">
                Universitas Muhammadiyah Sidoarjo,
              </span>{" "}
              where I’m pursuing my degree in{" "}
              <span className="font-medium text-black">
                Informatics Engineering.
              </span>{" "}
              My passion for technology and coding knows no bounds. Beyond the
              world of coding, I find myself deeply immersed in the realms of
              design, Game Development, and the fascinating universe of AI. I
              believe that in today’s fast-paced digital landscape, being a{" "}
              <span className="font-medium text-black">lifelong learner</span>{" "}
              is not just a choice, but a necessity. Let’s connect and explore
              this ever-evolving world of tech together!
            </p>
          </motion.div>
        </div>

        {/* SKILLS */}
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 mx-auto mt-10 mb-24">
          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-gray-50/50 rounded-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: false }}
          >
            <h2 className="text-xl font-normal mb-3 tracking-widest uppercase text-center">
              Language & Framework
            </h2>
            <p className="tracking-widest text-center text-gray-500 leading-loose">
              <span className="font-bold text-black">HTML</span> |{" "}
              <span className="font-bold text-black">CSS</span> |{" "}
              <span className="font-bold text-black">Javascript</span> |{" "}
              <span className="font-medium text-black">Typescript</span> |{" "}
              <span className="font-bold text-black">React</span> |{" "}
              <span className="font-medium text-black">NextJS</span> |{" "}
              <span className="font-bold text-black">SASS</span> |{" "}
              <span className="font-medium text-black">Tailwind</span> |{" "}
              <span className="font-medium text-black">NodeJS</span> |{" "}
              <span className="font-medium text-black">ExpressJS</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center p-6 bg-gray-50/50 rounded-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: false }}
          >
            <h2 className="text-xl font-normal mb-3 tracking-widest uppercase text-center">
              Tools
            </h2>
            <p className="tracking-widest text-center text-gray-500 leading-loose">
              <span className="font-medium text-black">VS Code</span> |{" "}
              <span className="font-medium text-black">Git</span> |{" "}
              <span className="font-medium text-black">Figma</span> |{" "}
              <span className="font-medium text-black">Trello</span> |{" "}
              <span className="font-medium text-black">Postman</span> |{" "}
              <span className="font-medium text-black">NPM</span> |{" "}
              <span className="font-medium text-black">Webpack</span> |{" "}
              <span className="font-medium text-black">Vite</span>
            </p>
          </motion.div>
        </div>

        <MyGitHubCalendar username="bimasnajid" />

        {/* EDUCATION & EXPERIENCE HEADER */}
        <div className="flex flex-col items-center justify-start w-full px-6 md:pl-32 mt-16">
          <div className="flex flex-col items-center self-start justify-center my-5">
            <motion.div
              className="self-start h-1 mb-3 bg-gray-900 rounded-full w-28"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div
              className="h-1 bg-gray-900 rounded-full w-28"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: -20 }}
              transition={{ delay: 0.3, type: "spring" }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.h1
              className="mt-3 text-3xl font-bold"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: false }}
            >
              Education &amp; Experience
            </motion.h1>
          </div>
        </div>

        {/* EDUCATION & EXPERIENCE DETAILED */}
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 mx-auto my-10">
          <motion.div
            className="flex flex-col items-start justify-center mb-5"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: false }}
          >
            <h2 className="mb-3 text-2xl font-bold">
              Education | Universitas Muhammadiyah Sidoarjo
            </h2>
            <h3 className="mb-3 font-medium text-gray-500 text-md">
              Teknik Informatika | 2023 - Now
            </h3>
            <p className="relative pl-4 text-justify text-gray-500">
              <span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-''"></span>
              I&rsquo;m currently in my third semester at Universitas Negeri
              Malang, majoring in Informatics Engineering. This journey has been
              nothing short of exhilarating, filled with countless opportunities
              to learn and grow. With a steadfast dedication to my studies,
              I&rsquo;ve achieved a commendable GPA of 3.93. Throughout my
              academic journey, I&rsquo;ve delved into various facets of
              computer science, honing my skills in web development,
              programming, and problem-solving.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col mb-5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: false }}
          >
            <h2 className="mb-3 text-2xl font-bold">
              Experience | Freelance Web Developer
            </h2>
            <h3 className="mb-3 font-medium text-gray-500 text-md">
              Fullstack Web Developer | 2023 - Now
            </h3>
            <p className="relative pl-4 text-justify text-gray-500">
              <span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-''"></span>
              My experience extends across various technologies, with a primary
              focus on Next.js and Laravel. I&rsquo;ve successfully completed
              three projects using Next.js and Laravel. What sets me apart is my
              ability to adapt to different project requirements. Whether
              working collaboratively as part of a team or independently, I
              ensure that each project I undertake meets high-quality standards
              and fulfills the unique needs of clients.
            </p>
          </motion.div>
        </div>

        {/* TIMELINE SECTION */}
        <motion.div
          className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
          viewport={{ once: false }}
        >
          {/* HEADER */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Professional Experience
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Perjalanan karier dan proyek yang pernah saya kerjakan.
            </p>
          </motion.div>

          {/* TIMELINE CONTAINER */}
          <div className="relative w-full max-w-5xl mx-auto">
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-lime-500 -translate-x-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              exit={{ height: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            />

            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center w-full mb-12 md:mb-20"
                  initial={{
                    opacity: 0,
                    x: isEven ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: isEven ? -50 : 50,
                  }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: false }}
                >
                  <div className="hidden md:flex w-1/2 justify-end pr-12 relative">
                    {isEven && (
                      <motion.div
                        className="w-full bg-white p-6 rounded-2xl shadow-lg border-l-4 border-lime-500"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-lime-600 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 mt-2">{exp.desc}</p>
                        <p className="text-gray-400 mt-3 text-sm">{exp.date}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      viewport={{ once: false }}
                    >
                      <div className="w-6 h-6 bg-lime-500 rounded-full border-4 border-white shadow-md"></div>
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 pl-12 md:pl-12">
                    <motion.div
                      className="w-full bg-white p-6 rounded-2xl shadow-lg border-l-4 border-lime-500 md:hidden"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: false }}
                    >
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-lime-600 font-medium">{exp.company}</p>
                      <p className="text-gray-600 mt-2">{exp.desc}</p>
                      <p className="text-gray-400 mt-3 text-sm">{exp.date}</p>
                    </motion.div>

                    {!isEven && (
                      <motion.div
                        className="hidden md:block w-full bg-white p-6 rounded-2xl shadow-lg border-l-4 border-lime-500"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-lime-600 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 mt-2">{exp.desc}</p>
                        <p className="text-gray-400 mt-3 text-sm">{exp.date}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <Footer />
      </main>
    </>
  );
}
