import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../index.css";

const About = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
  }, []);

  const items = [
    {
      title: "‘기록’을 생활화하는 개발자",
      content: (
        <>
          저는 지식의 습득이 단순히 배우는 것에서 그치지 않고, 실제 경험으로
          이어져야 한다고 생각합니다.
          <br />
          이해한 개념과 학습한 내용을 블로그 또는 깃허브에 설명하듯이 기록하고
          공유하여, 언제든지 개발에 적용할 수 있도록 노력하였습니다.
          <br />
          더불어 이러한 기록은 저의 지식을 다른 개발자분들과 공유할 수 있는 좋은
          수단이 된다고 생각합니다.
          <br />
          이를 통해 개인의 성장뿐만 아니라, 개발 커뮤니티의 성장에도 조금이나마
          이바지하고자 합니다.
        </>
      ),
    },
    {
      title: "‘협력’을 즐거워하는 개발자",
      content: (
        <>
          개발은 혼자서 이루는 활동이 아니라는 점을 깊이 인식하고 있습니다.
          따라서 각 개발자가 가진 다양한 역량과 능력을 인정하고,
          <br />
          상호 보완적인 협업을 통해 더 큰 성과를 끌어내기 위해 노력하는 자세를
          우선시하고 있습니다.
          <br />
          개인적인 역량을 넘어서, 팀 전체가 함께 성장하고 발전하는 경험을
          쌓아가고 싶습니다.
        </>
      ),
    },
    {
      title: "‘새로움’을 배워가는 개발자",
      content: (
        <>
          프론트엔드 개발 분야는 변화의 속도가 빠르므로 새로운 기술 흐름에
          신속하게 대응해야 하는 도전적인 분야라고 생각합니다.
          <br />
          새로운 기술과 유행에 유연하게 대응할 수 있도록 새로운 라이브러리와
          도구들을 탐색하고 적용하였습니다.
          <br />
          이러한 자세를 통해 저의 효율성과 개발 능력 성장을 멈추지 않고 있으며,
          새로운 도전을 두려워하지 않는 자세를 지니고 있습니다.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="p-8 mt-52 ">
      <motion.div
        className="md:w-4/5 md:pl-8"
        initial={{ opacity: 0, x: -100 }} // 초기 상태
        animate={{ opacity: 1, x: 0 }} // 애니메이션 상태
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      >
        <h3
          className="pl-2 text-[10px] font-bold text-gray-500"
          style={{ letterSpacing: "6px" }}
        >
          ABOUT ME
        </h3>
        <p className="mt-4 font-extrabold text-xl italic">
          ‘Work-Life Balance’ 보다 몰입할 수 있는 일을 하는 삶을 추구합니다.
        </p>
        <p className="font-bold text-black mt-14">
          안녕하세요. 조금 늦은 나이에 신입 프론트엔드 개발자가 되고 싶은
          조소현입니다.
        </p>
        <p className="mt-4 text-gray-700 font-semibold text-[14px]">
          저는 원래 커머스 MD로서 컨텐츠 및 프로모션을 기획하며 쇼핑의 즐거움을
          입력했었습니다. <br />
          개발자와 협업하며 기획한 서비스를 구현하면서 직접적으로 보여지는게
          신기하고 궁금해하며 개발에 입문하게 되었습니다.
          <br />
          사람들이 사용할 수 있는 서비스를 개발해서 제가 평소 컴퓨터를 사용하며
          느꼈던 편안함과 즐거움을 느낄 수 있게 해주고 싶습니다.
          <br />
          현재 개발 공부에 모든 시간을 투자하고 있으며, 늦은 만큼 남들보다 더
          열심히 배우고 있습니다.
        </p>
      </motion.div>

      {items.map((item, index) => (
        <motion.div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)} // 각 항목을 참조
          className="flex flex-col mt-12 md:w-4/5 md:pl-8 fade-out" // fade-out 에니메이션
        >
          <div className="flex items-center">
            <span className="text-2xl font-extrabold mr-1">|</span>
            <h4 className="font-semibold p-2 flex-1">{item.title}</h4>
          </div>
          <hr className="border-gray-200 my-2" />
          <p className="text-sm font-normal">{item.content}</p>
        </motion.div>
      ))}

      {/* 추가 메시지 */}
      <blockquote className="md:w-4/5 mt-14 text-lg font-bold border-l-4 bg-[#f9bf3f] ml-6 pl-6 pt-6 pb-6 italic">
        앞으로 더 가치있는 개발자가 되고싶습니다.
      </blockquote>
    </section>
  );
};

export default About;
