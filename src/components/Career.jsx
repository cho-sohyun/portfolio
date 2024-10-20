import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";

const Career = ({ setActiveSection }) => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("career");
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
          저는 이런 경력이 있습니다.
        </h3>
        <p className="mt-4 font-extrabold text-xl custom-font ">CAREER</p>
      </motion.div>

      <div className="w-[90%] pl-6 flex flex-wrap mt-8">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
              className="timeline-start mb-10 md:text-end"
            >
              <time className="custom-font text-lg italic">2014</time>
              <div className="mt-2 text-lg font-extrabold ">최종학력</div>
              <p className="mt-2 text-sm font-extrabold">
                라사라 패션디자인전문학교
              </p>
              <p className="mt-4 text-sm font-normal">
                패션비즈니스학과 2014.03 ~ 2019.08 (졸업)
              </p>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className="timeline-end mb-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
            >
              <time className="custom-font text-lg italic">2019</time>
              <div className="mt-2 text-lg font-extrabold ">
                온라인 e커머스 MD
              </div>
              <p className="mt-2 text-sm font-extrabold">
                (주)삼아인터내셔날 2019.08 ~ 2021.11 (2년 4개월)
              </p>
              <p className="mt-4 text-sm font-normal">
                온라인 e커머스 대리로
                <b>‘운영/계약/영업/기획/정산’</b>관련 전반적인 업무를 수행
                <strong>[운영]</strong> 공공기관, 회계법인, 금융사, 대기업 등
                제휴를 맺고 복지 플랫폼 운영 <br />
                <strong>[계약]</strong> 각 계약건에 대한 전체적인 흐름을
                파악하여, 필요한 절차(체결, 선금, 준공 등)에 대한 관련 작업을
                진행 <br />
                <strong>[영업]</strong> 카테고리별 신규 브랜드 발굴 및 상품 소싱
                및 파트너사 입점과 매출 활성화를 위해 판매전략부터 월 목표를
                세워 수행 <br />
                <strong>[기획]</strong> 프로모션, 이벤트, 기획전 등 운영에 대해
                타 부서와 협업하여 기획 <br />
                <strong>[정산]</strong> 제휴 파트너사, 제휴몰, B2B 특판 정산
              </p>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className="timeline-start mb-10 md:text-end"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
            >
              <time className="custom-font text-lg italic">2022</time>
              <div className="mt-2 text-lg font-extrabold">APP 쇼핑 MD</div>
              <p className="mt-2 text-sm font-extrabold">
                주식회사 포크홀딩스 2022.04 ~ 2022.10 (7개월)
              </p>
              <p className="mt-4 text-sm font-normal">
                App 쇼핑
                <b>‘운영/영업/기획’</b>관련 전반적인 업무를 수행 <br />
                <strong>[운영]</strong> App 전용 쇼핑몰 운영 <br />
                <strong>[영업]</strong> 카테고리별 신규 브랜드 발굴 및 상품 소싱
                및 파트너사 입점과 매출 활성화를 위해 판매전략부터 월 목표를
                세워 수행 <br />
                <strong>[기획]</strong> 프로모션, 이벤트, 기획전 등 운영에 대해
                타 부서와 협업하여 기획 <br />
              </p>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className="timeline-end mb-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
            >
              <time className="custom-font text-lg italic">2023</time>
              <div className="mt-2 text-lg font-extrabold">제로베이스</div>
              <p className="mt-2 text-sm font-extrabold">
                교육 부트캠프 수료 2023.03 ~ 2023.09
              </p>
              <p className="mt-4 text-sm font-normal">
                프론트엔드 개발자가 기본적으로 갖춰야 하는 언어 및 개발 지식에
                대해 학습하고, 다양한 언어를 활용한 과제 및 프로젝트를 진행
                (HTML/CSS, JavaScript, TypeScript, React, 자료구조/알고리즘, CS
                이론, 코딩테스트, 협업프로젝트 등)
              </p>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className="timeline-start mb-10 md:text-end"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
            >
              <time className="custom-font text-lg italic">2024</time>
              <div className="mt-2 text-lg font-extrabold">현재</div>
              <p className="mt-2 text-sm font-extrabold">
                강의 수강 2024.01 ~ 현재
              </p>
              <p className="mt-4 text-sm font-normal">
                발전하는 서비스 개발자가 되기 위해 효율적인 상태 관리 기법과
                최신 라이브러리를 활용하여 프로젝트를 연습하고 있으며,
                제로베이스, 노마드코더, 스파르타코딩클럽 등 여러 강의를 통해
                심도 깊은 학습을 계속하고 있습니다.
              </p>
            </motion.div>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Career;
