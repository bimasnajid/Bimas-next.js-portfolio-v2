// pages/projects/archive/page.tsx
"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Hr from "@/components/Hr";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer";
import FixedButton from "@/components/FixedButton"; // Pastikan komponen FixedButton sudah ada

interface Project {
  year: string;
  title: string;
  tech: string;
  github?: string;
  preview?: string;
}

const projects: Project[] = [
  {
    year: "2023",
    title: "LUDOang",
    tech: "Python, Pygame, OpenGL",
    github: "https://github.com/Alvalens/ludo-game",
    preview: "https://github.com/Alvalens/ludo-game/releases/tag/pre-release",
  },
  {
    year: "2023",
    title: "React Realtime Chat",
    tech: "Javascript, React Js, Firebase, Daisy UI",
    github: "https://github.com/Alvalens/react-realtime-chat",
    preview: "https://react-chat-rouge.vercel.app",
  },
];

export default function ArchivePage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="overflow-hidden">
      <nav
        className="
  fixed top-0 left-0 w-full
  h-12 sm:h-14
  px-4 sm:px-6 md:px-10 lg:px-16
  flex items-center
  bg-white/5 backdrop-blur-md
  border-b border-white/20
  shadow-sm
  z-[60]
"
      >
        {/* Button Back (Kiri) */}
        <div className="flex items">
          <FixedButton onClick={handleBack}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-black text-lg"
            />
          </FixedButton>
        </div>

        {/* Title Tengah */}
        <h1
          className="
text-lg sm:text-xl text-black ml-5 px-1 h-4 w-4
  "
        >
          Bimasni
        </h1>
      </nav>

      <div className="min-h-screen w-screen mt-10 p-10 flex text-left flex-col mb-10">
        <div className="flex flex-col items-start my-5">
          <motion.h1
            className="mt-2 text-2xl font-bold text-black relative z-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            Archive
          </motion.h1>
          <Hr />
        </div>

        {/* Tabel Proyek Arsip */}
        <div className="mx-auto container md:px-10 grid grid-cols-1">
          <table className="space-y-3">
            <thead>
              <tr className="hover:shadow-md transition-all ease duration-500">
                <th className="text-start">Year</th>
                <th className="text-start">Title</th>
                <th className="text-start">Technology</th>
                <th className="text-start">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="hover:shadow-md transition-all ease duration-500"
                >
                  <td>{project.year}</td>
                  <td>{project.title}</td>
                  <td>{project.tech}</td>
                  <td>
                    <div className="flex flex-row justify-center items-center">
                      {project.github && (
                        <a href={project.github} title="Link to GitHub">
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="text-xl mr-2"
                          />
                        </a>
                      )}
                      {project.preview && (
                        <a
                          href={project.preview}
                          title="Link to project preview"
                        >
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="text-xl"
                          />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </main>
  );
}
