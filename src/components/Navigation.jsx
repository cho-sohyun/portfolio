import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

export const Navigation = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* 사이드바 */}
      <div
        className={`flex flex-col h-screen bg-gray-100 shadow-md transition-width duration-300 overflow-hidden ${
          menuOpen ? "w-full" : "w-0"
        } md:w-80 md:block`}
      >
        <div className="mt-12 mb-4 flex flex-col items-center">
          <div className="w-[150px] h-[150px] border rounded-full border-gray overflow-hidden">
            <img
              src="/images/증명사진2 복사본.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-1 "
            />
          </div>
          <span className="mt-12 text-3xl font-bold">조소현</span>
          <span className="mt-4 text-sm font-thin text-gray-500">
            Frontend 개발자
          </span>
        </div>
        <nav className="flex-grow">
          <ul className="list-none flex flex-col items-center mt-12">
            {["intro", "about", "skills", "projects", "career", "blog"].map(
              (section) => (
                <li className="mb-4" key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => handleScrollToSection(section)}
                    className={`block text-xs font-semibold transition-colors duration-300 no-underline relative ${
                      activeSection === section
                        ? "text-blue-700"
                        : "text-gray-600"
                    }`}
                  >
                    {section.toUpperCase()}
                    <span
                      className={`absolute top-4 left-0 right-0 h-[1px] ${
                        activeSection === section
                          ? "bg-blue-700"
                          : "bg-gray-200"
                      } transition-all duration-300 ${
                        activeSection === section ? "scale-x-100" : "scale-x-0"
                      }`}
                    ></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* 모바일 네비게이션 버튼 */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600"
        >
          <div className="p-0">
            {menuOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
          </div>
        </button>
      </div>
    </>
  );
};
