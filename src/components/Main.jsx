import React, { useState, useRef, useEffect } from "react";
import { Navigation } from "./Navigation";
import { Intro } from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Career from "./Career";
import Blog from "./Blog";

export const Main = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionsRef = useRef([]);

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

  return (
    <div className="flex h-screen overflow-hidden">
      {/*  overflow-hidden으로 설정하여 스크롤을 제어 */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex flex-col w-full overflow-y-auto">
        {/* 스크롤이 가능하도록 overflow-y-auto 추가 */}
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
      </div>
    </div>
  );
};
