import React, { useState, useRef, useEffect } from "react";
import { Navigation } from "./Navigation";
import { Intro } from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Career from "./Career";
import Blog from "./Blog";
import { Route, Routes, useLocation } from "react-router-dom";
import { Project1 } from "./Project1";
import { Project2 } from "./Project2";

export const Main = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionsRef = useRef([]);
  const location = useLocation();

  // 초기 렌더링 시 activeSection을 "intro"로 설정
  useEffect(() => {
    setActiveSection("intro");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const isProjectPage = location.pathname.startsWith("/project/");

  return (
    <div className="flex h-screen">
      {!isProjectPage && (
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}

      <div
        className={`flex flex-col w-full ${
          isProjectPage ? "" : "overflow-y-auto"
        }`}
      >
        {/* 프로젝트 페이지가 아닐 때만 섹션을 렌더링 */}
        {!isProjectPage ? (
          <>
            <div id="intro" ref={(el) => (sectionsRef.current[0] = el)}>
              <Intro setActiveSection={setActiveSection} />
            </div>
            <div id="about" ref={(el) => (sectionsRef.current[1] = el)}>
              <About setActiveSection={setActiveSection} />
            </div>
            <div id="skills" ref={(el) => (sectionsRef.current[2] = el)}>
              <Skills setActiveSection={setActiveSection} />
            </div>
            <div id="projects" ref={(el) => (sectionsRef.current[3] = el)}>
              <Projects setActiveSection={setActiveSection} />
            </div>
            <div id="career" ref={(el) => (sectionsRef.current[4] = el)}>
              <Career setActiveSection={setActiveSection} />
            </div>
            <div id="blog" ref={(el) => (sectionsRef.current[5] = el)}>
              <Blog setActiveSection={setActiveSection} />
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/project/1" element={<Project1 />} />
            <Route path="/project/2" element={<Project2 />} />
          </Routes>
        )}
      </div>
    </div>
  );
};
