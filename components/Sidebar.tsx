"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";

// Pastikan Anda memiliki referensi ke fullpage_api yang didefinisikan di global
declare global {
  interface Window {
    fullpage_api: any;
  }
}

const Sidebar: React.FC = () => {
  const handleMoveToSection = (index: number) => {
    if (typeof window !== "undefined" && window.fullpage_api) {
      window.fullpage_api.moveTo(index);
    }
  };

  const containIsActive = (index: number) => {
    if (typeof window !== "undefined" && window.fullpage_api) {
      const activeSection = window.fullpage_api.getActiveSection();
      if (activeSection && activeSection.index === index) {
        return "bg-gray-500";
      }
    }
    return "";
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.fullpage_api) {
      window.fullpage_api.setScrollingSpeed(700);

      // Try rebuilding the fullpage to ensure scroll overflow is properly initialized
      window.fullpage_api.reBuild();
    }

    return () => {
      if (typeof window !== "undefined" && window.fullpage_api) {
        window.fullpage_api.setAllowScrolling(true);
      }
    };
  }, []);

  return (
    <div className="hidden md:flex fixed z-40 bg-lime-500 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
      <ul
        id="sidebar"
        className="flex flex-col justify-evenly items-center h-full text-white "
      >
        <li data-menuanchor="home" className={containIsActive(1)}>
          <button
            onClick={() => handleMoveToSection(1)}
            className="relative text-xl font-semibold cursor-pointer
after:content-[''] after:absolute after:-bottom-1 after:left-1/2
after:h-[2px] after:w-0 after:bg-black
after:transition-all after:duration-300 after:ease-out
hover:after:w-full hover:after:left-0
data-[active=true]:after:w-full
data-[active=true]:after:left-0"
          >
            <FontAwesomeIcon icon={faHome} className="text-xl" />
          </button>
        </li>
        <li data-menuanchor="about" className={containIsActive(2)}>
          <button
            onClick={() => handleMoveToSection(2)}
            className="relative text-xl font-semibold cursor-pointer
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0"
          >
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </button>
        </li>
        <li data-menuanchor="projects" className={containIsActive(3)}>
          <button
            onClick={() => handleMoveToSection(3)}
            className="relative text-xl font-semibold cursor-pointer
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0"
          >
            <FontAwesomeIcon icon={faFolderOpen} className="text-xl" />
          </button>
        </li>
        <li data-menuanchor="contact" className={containIsActive(4)}>
          <button
            onClick={() => handleMoveToSection(4)}
            className="relative text-xl font-semibold cursor-pointer
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

