"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Memuat kalender secara dinamis hanya di browser (client-side)
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 w-full animate-pulse bg-gray-800 rounded-xl" />
    ),
  },
);

export default function MyGitHubCalendar({ username }: { username: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8flex px-6 md:pl-32 mt-16">
      <h2 className="flex flex-col items-center self-start justify-center my-5">
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
          GitHub &amp; Contributions
        </motion.h1>
      </h2>
      <div className="p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-800 text-white overflow-x-auto max-w-full">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          fontSize={12}
          blockSize={12}
          blockMargin={4}
        />
      </div>
    </div>
  );
}
