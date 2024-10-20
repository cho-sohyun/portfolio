import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";

const blogData = [
  {
    id: 1,
    title: "기록을 위한 블로그",
    description:
      "더욱 성장하기 위해 공부한 내용을 정리해서 올릴 블로그를 운영하기 시작했으며, 이해한 개념과 학습한 내용을 블로그에 설명하듯이 기록하고 공유하여, 언제든지 개발에 적용할 수 있도록 노력하였습니다.",
    image: "/images/blog.png",
    link: "https://velog.io/@whthgus77/posts",
  },
  {
    id: 2,
    title: "깃 허브 저장소",
    description:
      "프로젝트, 알고리즘 문제, 그리고 개발 공부의 결과물을 깃허브에 저장하고 있습니다. 실제 업무에 적응하기 위해 팀 프로젝트를 진행하며 팀원들과 코드 리뷰를 통해 더 나은 코드 작성을 고민하였습니다. 또한, 푸시 과정에서 발생하는 충돌 오류를 해결하며 실질적인 문제 해결 경험을 쌓고 있습니다.",
    image: "/images/github.png",
    link: "https://github.com/cho-sohyun?tab=repositories",
  },
];

const BlogCard = ({ title, description, image, link }) => {
  return (
    <div className="relative group w-full ">
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover overflow-hidden"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-start p-4">
        <p className="text-white text-start p-2 custom-font text-lg">{title}</p>
        <p className="text-white text-start p-2 font-normal text-sm">
          {description}
        </p>
        <div className="absolute bottom-4 left-4 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black py-1 px-3 rounded hover:opacity-80"
          >
            <p className="text-xs font-bold">Read More</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Blog = ({ setActiveSection }) => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("blog");
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
      id="blog"
      className="p-8 mt-40"
      initial={{ opacity: 0 }} // 초기 상태
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }} // 종료 상태
      transition={{ duration: 1.2 }} // 애니메이션 지속 시간
    >
      <motion.div
        className="md:w-4/5 md:pl-8 mx-auto"
        initial={{ opacity: 0, x: -100 }} // 초기 상태
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
      >
        <h3
          className="text-[10px] font-bold text-gray-500"
          style={{ letterSpacing: "6px" }}
        >
          write & Read
        </h3>
        <p className="mt-4 font-extrabold text-xl custom-font ">
          BLOG & GITHUB
        </p>
      </motion.div>

      <div className="w-full flex flex-wrap mt-8 mx-auto">
        {blogData.map((post, index) => (
          <div
            ref={(el) => (itemRefs.current[index] = el)}
            key={post.id}
            className="w-full md:w-1/2"
          >
            <BlogCard
              title={post.title}
              description={post.description}
              image={post.image}
              link={post.link}
            />
          </div>
        ))}
      </div>
      <div className="w-full mt-14 text-lg font-bold bg-gray-100 mx-auto p-6">
        <p className="text-xl text-start custom-font">🙋🏻‍♀️ HOW I WORK !</p>
        <ul className="mt-4 text-sm text-gray-700">
          <li className="pb-2">
            목표 달성도 중요하지만, 일의 과정에서 재미를 찾는 편이에요.
          </li>
          <li className="pb-2">
            회사와 세상에 긍정적 영향을 주는 일은 그 자체로 동기부여가 됩니다.
          </li>
          <li className="pb-2">
            문제가 생겨도 그 상황 안에서 일을 진행할 수 있는 방향을 찾습니다.
          </li>
          <li className="pb-2">함께 정한 기한은 반드시 지키려고 노력해요.</li>
          <li className="pb-2">팀과의 소통이 제일 중요하다고 생각합니다.</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Blog;
