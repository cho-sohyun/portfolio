import React from "react";
import "../index.css";
import marketzero from "../images/marketzero3.gif";
import marketzero2 from "../images/marketzero4.gif";
import marketzero3 from "../images/marketzero5.gif";
import marketzero4 from "../images/marketzero1.webp";
import marketzero5 from "../images/marketzero2.webp";

import { FaGithub, FaPencilAlt, FaHeart } from "react-icons/fa";

export const Project2 = () => {
  const images = [
    marketzero,
    marketzero2,
    marketzero3,
    marketzero4,
    marketzero5,
  ];

  return (
    <div className="flex flex-col items-center justify-start p-4 bg-white h-auto custom-font2">
      {/* 프로젝트 카드 */}
      <div className="mt-10 flex flex-col md:flex-row w-full max-w-7xl overflow-hidden">
        {/* 왼쪽 설명 영역 */}
        <div className="flex-1">
          <h1 className="mt-12 text-4xl mb-4 custom-font">
            마켓제로 market zero
          </h1>
          <p className="mt-8 font-xl font-semibold">기획배경</p>
          <p className="mt-2 text-sm font-medium">
            소비자에게 건강하고 신뢰를 줄 수 있는 다양한 상품 추천 및 서비스를
            제공하는 커머스 입니다. <br />
            - 웹 쇼핑몰을 꼭 한번 만들어보고 싶은 저의 첫번째 바램으로
            시작되었습니다. <br />- 사용자가 보기에 가장 UI가 깔끔하면서 가장
            한눈에 보기 쉽고 이용하는 서비스 또한 기능도 충실 하다고 생각하여
            <br />
            마켓컬리를 래퍼런스로 구현했습니다.
          </p>

          <p className="mt-4 text-base">
            <strong>프로젝트 기간 :</strong> 2023년 07월 - 2023년 08월
          </p>
          <p className="mt-4 text-base">
            <strong>스택 :</strong> HTML, CSS-modules, Javascript, React,
            Firebase, Redux, Vercel
          </p>

          <div className="mt-6 flex items-center space-x-4 font-bold text-lg">
            <a
              href="https://github.com/cho-sohyun/market-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <FaGithub className="mr-1" /> GitHub Repository
            </a>
            <a
              href="https://velog.io/@whthgus77/JSON-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A1%9C-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <FaPencilAlt className="mr-1" /> 회고록 바로가기
            </a>
            <a
              href="https://marketzero-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <FaHeart className="mr-1" /> 마켓제로 바로가기
            </a>
          </div>

          <div className="mt-4 text-gray-600 text-sm">
            <a href="/portfolio" className="underline">
              홈으로 돌아가기
            </a>
          </div>
        </div>

        {/* 오른쪽 이미지 영역 */}
        <div className="mockup-browser border-base-300 border max-w-[600px] max-h-[360px] mt-20">
          <div className="mockup-browser-toolbar">
            <div className="input border-base-300 border">
              https://marketzero.com
            </div>
          </div>
          <div className="border-base-300 flex justify-center border-t">
            <img
              src={marketzero}
              alt="마켓제로"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>

      {/* 프로젝트 이미지 영역  */}
      <div className="mt-20 w-4/5 max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-125">
              <img
                src={image}
                alt={`갤러리 이미지 ${index + 1}`}
                className="w-[400px] h-[200px] object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 기능 구현 내용 */}
      <div className="mt-20 md:pl-2 flex flex-wrap justify-center">
        {/* 왼쪽 기능 구현 내용 */}
        <div className="w-full max-w-md  bg-gray-100 rounded-2xl p-4 mb-4">
          <div className="mt-4 font-bold text-sm custom-font">메인페이지</div>
          <p className="font-bold text-sm mt-4">
            Carousel 구현 (메인 배너, 추천 상품)
          </p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">Swiper 라이브러리 활용</li>
          </ul>
          <p className="font-bold text-sm mt-4">상품 검색</p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">검색 후 결과 페이지 이동</li>
            <li className="mb-1">
              검색어와 일치하는 상품명이 있는 경우 검색창에 해당 상품명 출력
            </li>
          </ul>

          <div className="mt-8 font-bold text-sm custom-font">
            회원가입 및 로그인
          </div>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">중복확인 기능 Firebase Authentication 사용</li>
            <li className="mb-1">
              유효성 검사 : 이메일 주소, 비밀번호, 이름 등 입력값에 대한 유효성
              검사를 수행
            </li>
            <li className="mb-1">소셜 로그인 (구글 로그인)</li>
            <li className="mb-1">
              로그인 시에는 메인페이지 OO님, 로그아웃 추가
            </li>
          </ul>

          <div className="mt-8 font-bold text-sm custom-font">
            카테고리 페이지
          </div>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">추천순 / 낮은 가격순 / 높은 가격순 필터링</li>
            <li className="mb-1">페이지네이션</li>
          </ul>

          <div className="mt-8 font-bold text-sm custom-font">
            디테일 페이지
          </div>

          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">검색 결과 페이지</li>
            <li className="mb-1">상품 상세 페이지</li>
            <li className="mb-1">위시리스트 페이지</li>
            <li className="mb-1">장바구니 페이지</li>
          </ul>
        </div>

        {/* 오른쪽 기능 구현 내용 */}
        <div className="w-full max-w-md bg-gray-100 rounded-2xl p-4 md:ml-4 mb-4">
          <div className="mt-4 font-bold text-sm custom-font">트러블슈팅</div>

          <p className="font-bold text-sm mt-4">메인 배너 슬라이드 문제점</p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              <strong>problem :</strong> prevSlide 와 nextSlide 버튼을 눌렀을 때
              1개씩 이동이 되어야하는데, 이미지가 4개로 나뉘어서 슬라이딩 되는
              문제점
            </li>
            <li className="mb-1">
              <strong>Try to solve :</strong> Swiper 라이브러리를 통해 이미지가
              나눠져서 슬라이드 되는 문제 해결
            </li>
          </ul>

          <p className="font-bold text-sm mt-4">
            로그인 시 메인 페이지로 이동하면서 유저의 이름을 출력해야 되는 과정
          </p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              <strong>Try to solve :</strong> Firebase Authentication에서
              제공하는 currentUser 객체를 통해 현재 로그인한 사용자의 정보를
              가져오며, 사용자의 displayName을 Redux 스토어에 저장하여 사용자
              이름을 업데이트하는 액션 디스패치로 해결
            </li>
          </ul>

          <p className="font-bold text-sm mt-4">
            상품명 혹은 키워드를 검색 했을 때, 결과 페이지에서 전체 데이터가
            결과로 나오는 현상, 또한 검색한 키워드 타이틀이 빈값으로 출력
          </p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              <strong>Problem :</strong> 검색을 다루는 컴포넌트 부분에서
              prop으로 전달하는 과정이 너무 복잡한 문제점
            </li>
            <li className="mb-1">
              <strong>Try to solve :</strong> 검색어는 URL의 쿼리 파라미터로
              추가 <br />
              useLocation훅을 사용하여 검색 결과 컴포넌트에서 직접 검색어를
              가져오는 방식으로 코드를 수정 <br />
              가져온 검색어를 사용하여 상품명 기준으로 목록을 필터링
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
