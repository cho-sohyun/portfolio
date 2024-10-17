import React, { useEffect, useState } from "react";

export const Intro = () => {
  const texts = [
    <>
      안녕하세요!
      <br />
      반갑습니다.
      <br />
      저는 조소현입니다.
    </>,
    <>
      항상 꿈을 꾸며 도전하는 삶!
      <br />
      협력의 힘으로 성장하며,
      <br />
      끊임없이 노력하며 나아갑니다.
      <br />
      <p className="mt-6 text-[20px] text-gray-800">
        조금 늦게 시작했지만, <br />
        프론트엔드 개발자에 대한 꿈을 갖고 <br />
        다시 달려가고 있습니다.
      </p>
    </>,
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // 페이드 아웃 시작
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeOut(false); // 페이드 인 시작
      }, 700); // 사라지는 시간
    }, 4000); // 텍스트 전환 주기

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section id="intro">
        <div className="pl-14 mt-52">
          <div className="h-80 w-full overflow-hidden">
            <h1 className="text-[46px]">
              <span
                className={`block transition-all duration-700 ease-in-out ${
                  fadeOut
                    ? "opacity-0 translate-y-4" // 현재 텍스트 사라짐
                    : "opacity-100 translate-y-0" // 기본 상태
                }`}
              >
                {texts[textIndex]} {/* 현재 텍스트 */}
              </span>
              <span
                className={`block transition-all duration-700 ease-in-out ${
                  !fadeOut && textIndex === 1
                    ? "opacity-100 translate-y-0" // 새로운 텍스트 올라옴
                    : "opacity-0 translate-y-4" // 사라지는 상태
                }`}
              ></span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};
