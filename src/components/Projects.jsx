import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";
import chalkak from "../images/chalkak-main.gif";
import market from "../images/marketzero3.gif";

const projectsData = [
  {
    id: 1,
    title: "#찰칵 Chal-kak (팀 프로젝트)",
    description:
      "사용자 맞춤형 게시글 추천 패션 SNS입니다. 이 프로젝트는 옷으로 누구나 맞이했던 온갖 경험들에서 시작하여, 고민을 해결하기 위해 기획하게 되었습니다.",
    image: chalkak,
    github: "https://github.com/ZB-ChalKak",
    details: "상세보기",
  },
  {
    id: 2,
    title: "market zero (개인 프로젝트)",
    description:
      "개발자가 되면 웹 쇼핑몰을 꼭 한번 만들어보고 싶은 첫번째 바램으로 시작되었습니다. 사용자가 보기에 가장 UI가 깔끔하면서 가장 한눈에 보기 쉽고 이용하는 서비스 또한 기능도 충실 하다고 생각하여 마켓컬리를 래퍼런스로 구현했습니다.",
    image: market,
    github: "https://github.com/cho-sohyun/market-frontend",
    details: "상세보기",
  },
];

const ProjectsCard = ({ title, description, image, github, details }) => {
  return (
    <div className="relative group w-full sm:w-1/2 lg:w-1/3 p-4">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-start p-4">
        <p className="text-white text-start p-6 custom-font text-lg">{title}</p>
        <p className="text-white text-start p-5 font-normal text-sm">
          {description}
        </p>
      </div>
      <div className="absolute bottom-4 left-4 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black py-1 px-3 rounded hover:opacity-80"
        >
          <p className="text-xs font-bold">Github</p>
        </a>
        <a
          href={details}
          className="bg-white text-black py-1 px-3 rounded hover:opacity-80 ml-2"
        >
          <p className="text-xs font-bold">상세보기</p>
        </a>
      </div>
    </div>
  );
};

const Projects = ({ setActiveSection }) => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("projects");
            entry.target.classList.add("fade-in"); // 요소가 뷰포트에 들어오면, 해당 요소에 "fade-in" 클래스를 추가하여 CSS 애니메이션을 적용
            observer.unobserve(entry.target); // unobserve 메서드를 호출하여 해당 요소의 관찰을 중지, 애니메이션 한 번만 실행
          }
        });
      },
      { threshold: 0.1 } // 10% 이상 보일 때 트리거
    );
    itemRefs.current.forEach((item) => {
      // itemRefs 배열에 저장된 각 항목을 순회하며 Intersection Observer에 등록
      if (item) {
        observer.observe(item);
      }
    });
    return () => {
      observer.disconnect(); // 컴포넌트가 언마운트될 때 호출되는 정리 함수
    };
  }, [setActiveSection]);

  return (
    <motion.section
      id="projects"
      className="p-8 mt-40"
      initial={{ opacity: 0 }} // 초기 상태
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }} // 종료 상태
      transition={{ duration: 1.2 }} // 애니메이션 지속 시간
    >
      <motion.div
        className="md:w-4/5 md:pl-8"
        initial={{ opacity: 0, x: -100 }} // 초기 상태
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
      >
        <h3
          className="text-[10px] font-bold text-gray-500"
          style={{ letterSpacing: "6px" }}
        >
          MY PROJECTS
        </h3>
        <p className="mt-4 font-extrabold text-xl custom-font ">PROJECTS</p>
      </motion.div>

      <div className="w-full flex flex-wrap mt-8">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            details={project.details}
          />
        ))}
      </div>
      <div className="w-full mt-14 text-lg font-bold bg-gray-200 mx-auto p-6">
        <p className="text-sm text-center">
          앞으로 더욱 많은 프로젝트를 만들어갈 예정입니다.
        </p>
      </div>
    </motion.section>
  );
};

export default Projects;
