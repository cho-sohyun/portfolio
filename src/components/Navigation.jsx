import React from "react";

export const Navigation = () => {
  return (
    <div className="flex flex-col h-full w-72 bg-gray-100 shadow-md">
      <div className="mt-12 mb-4 flex flex-col items-center">
        <div className="w-[150px] h-[150px] border rounded-full border-gray overflow-hidden">
            <img 
            src="/images/증명사진2 복사본.png" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-1 "
            />
        </div>
        <span className="mt-6 text-3xl font-bold">조소현</span> 
        <span className="mt-4 text-sm font-thin text-gray-500">Frontend 개발자</span> 
      </div>
      <nav className="flex-grow"> 
        <ul className="list-none flex flex-col items-center mt-4">
          <li className="mb-4">
            <a
              href="#intro"
              className="block text-sm hover:text-gray-800 transition-colors duration-300 no-underline relative"
            >
              HOME
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#one"
              className="block text-sm hover:text-gray-800 transition-colors duration-300 no-underline relative "
            >
              ABOUT
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#two"
              className="block text-sm hover:text-gray-800 transition-colors duration-300 no-underline relative"
            >
              SKILLS
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#three"
              className="block text-sm hover:text-gray-800 transition-colors duration-300 no-underline relative"
            >
              PROJECTS
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#career"
              className="block text-sm hover:text-gray-800 transition-colors duration-300 no-underline relative"
            >
              CAREER
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#blog"
              className="block text-sm hover:text-gray-800 transition-colors duration-300 no-underline relative"
            >
              BLOG
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
