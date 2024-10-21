import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";

const Skills = ({ setActiveSection }) => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("skills");
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

  // 스킬 셋
  const skills = [
    {
      name: "HTML5",
      level: 80,
      description:
        "웹 페이지의 구조를 설계하고, 접근성과 SEO 최적화를 고려한 콘텐츠 구현에 집중하며 실력을 쌓고 있습니다.",
    },
    {
      name: "CSS3",
      level: 75,
      description:
        "CSS3를 사용하여 반응형 웹 디자인을 구현하며, 다양한 스타일링 기법을 연습하여 사용자 경험을 개선하기 위한 훈련을 하고 있습니다.",
    },
    {
      name: "JavaScript",
      level: 70,
      description:
        "JavaScript를 통해 동적인 웹 애플리케이션을 개발 중이며, 비동기 프로그래밍과 DOM 조작을 익히고 있는 과정입니다.",
    },
    {
      name: "React",
      level: 70,
      description:
        "React를 활용하여 컴포넌트 기반의 UI를 구축하고, 상태 관리 기법을 연습하며 효율적인 애플리케이션 개발에 힘쓰고 있습니다.",
    },
    {
      name: "TypeScript",
      level: 50,
      description:
        "TypeScript를 통해 타입 시스템의 장점을 활용하고, 더 안전하고 유지보수하기 쉬운 코드를 작성하는 연습을 하고 있습니다.",
    },
    {
      name: "Next.js",
      level: 40,
      description:
        "Next.js를 통해 SSR를 활용하여 프로젝트를 진행한 경험이 있으며, 기술을 학습하며 최적화된 웹 애플리케이션 구현에 도전하고 있습니다.",
    },
    {
      name: "TailwindCSS",
      level: 50,
      description:
        "TailwindCSS를 사용하여 유연하고 커스터마이징 가능한 스타일링을 통해 빠른 프로토타이핑을 연습하고 있습니다.",
    },
    {
      name: "Bootstrap",
      level: 50,
      description:
        "Bootstrap을 활용하여 빠르게 반응형 웹 디자인을 적용하고, 다양한 UI 컴포넌트를 쉽게 구현하고 있습니다.",
    },
    {
      name: "Figma",
      level: 60,
      description:
        "Figma를 사용하여 UI/UX 디자인을 시각적으로 표현하고, 팀원들과의 협업을 통해 디자인 프로세스를 원활하게 진행했습니다.",
    },
    {
      name: "GitHub",
      level: 50,
      description:
        "GitHub를 통해 팀 프로젝트에서 협업을 강화하고, 코드 리뷰를 통해 품질을 높였으며 프로젝트를 관리하고 커밋을 세분화하는 훈련을 했습니다.",
    },
  ];

  // 프로그래스 바
  const renderProgressBar = (skill, index) => {
    return (
      <motion.div ref={(el) => (itemRefs.current[index] = el)} className="mb-4">
        <p className="text-sm custom-font">{skill.name}</p>
        <div className="relative w-full">
          <progress
            className={`progress w-full ${
              skill.name === "HTML5" || skill.name === "JavaScript"
                ? "progress-primary"
                : skill.name === "CSS3"
                ? "progress-secondary"
                : skill.name === "React"
                ? "progress-info"
                : skill.name === "TypeScript" || skill.name === "Bootstrap"
                ? "progress-warning"
                : skill.name === "Next.js"
                ? "progress-accent"
                : skill.name === "TailwindCSS"
                ? "progress-success"
                : skill.name === "Figma"
                ? "progress-error"
                : ""
            }`}
            value={skill.level}
            max="100"
          />

          <span
            className="absolute right-0 bottom-6 text-[10px] font-bold text-gray-600"
            style={{ right: `${100 - skill.level}%` }}
          >
            {skill.level}%
          </span>
        </div>
        <p className="text-sm font-normal text-gray-800 mt-1 custom-font2">
          {skill.description}
        </p>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="skills"
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
          저는 지금 이런것이 가능합니다.
        </h3>
        <p className="mt-4 font-extrabold text-xl custom-font ">SKILLS</p>
        <p className="mt-12 text-gray-700 font-normal text-sm custom-font2">
          HTML과 JavaScript를 시작으로 언어 사용에 대한 감을 익혔습니다. 여러
          강의를 통해 웹 개발의 기초를 탄탄히 다진 후,
          <br />
          부트캠프에서 React, TypeScript, 다양한 CSS 프레임워크를 활용하여
          프로젝트를 진행하며 실력을 쌓았습니다.
          <br /> 더 나은 서비스 개발자가 되기 위해 효율적인 상태 관리 기법과
          최신 라이브러리를 활용하여 연습하고 있으며, 기초를 다지기 위해
          JavaScript에 대한 심도 깊은 학습을 계속하고 있습니다. 또한 GitHub를
          적극 활용하여 프로젝트를 관리하고, 커밋을 최대한 세분화하는 데 힘쓰고
          있습니다.
        </p>
      </motion.div>

      <div className="md:w-4/5 md:pl-8 flex flex-wrap mt-8">
        {/* 왼쪽 프로그래스 바 */}
        <motion.div
          className="w-full sm:w-1/2 pr-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
        >
          {skills.slice(0, 5).map((skill, index) => (
            <div key={skill.name}>{renderProgressBar(skill, index)}</div>
          ))}
        </motion.div>

        {/* 오른쪽 프로그래스 바 */}
        <motion.div
          className="w-full sm:w-1/2 pr-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
        >
          {skills.slice(5).map((skill, index) => (
            <div key={skill.name}>{renderProgressBar(skill, index)}</div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
