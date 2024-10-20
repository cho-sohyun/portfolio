import React from "react";
import { Navigation } from "./Navigation";
import { Intro } from "./Intro";
import Skills from "./Skills";
import About from "./About";

export const Main = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/*  overflow-hidden으로 설정하여 스크롤을 제어 */}
      <Navigation />
      <div className="flex flex-col w-full overflow-y-auto">
        {/* 스크롤이 가능하도록 overflow-y-auto 추가 */}
        <Intro />
        <About />
        <Skills />
      </div>
    </div>
  );
};
