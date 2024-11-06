import React from "react";
import "../index.css";
import chalkak from "../images/chalkak-main2.gif";
import chalkak9 from "../images/chalkak9.gif";
import chalkak2 from "../images/chalkak3.gif";
import chalkak3 from "../images/chalkak5.gif";
import chalkak4 from "../images/chalkak7.gif";
import chalkak5 from "../images/chalkak6.webp";
import { FaGithub, FaPencilAlt } from "react-icons/fa";

export const Project1 = () => {
  const images = [chalkak, chalkak9, chalkak2, chalkak3, chalkak4, chalkak5];

  return (
    <div className="flex flex-col items-center justify-start p-4 bg-white h-auto custom-font2">
      {/* 프로젝트 카드 */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        {/* 왼쪽 설명 영역 */}
        <div className="flex-1">
          <h1 className="mt-12 text-4xl mb-4 custom-font">#찰칵 Chal-kak</h1>
          <p className="mt-8 font-xl font-semibold">기획배경</p>
          <p className="mt-2 text-sm font-medium">
            사용자 맞춤형 게시글 추천 패션 SNS입니다. <br />
            - 우리는 모두 환절기나 일교차가 심한 날씨에 "겉옷을 걸칠까 말까.."
            생각하고 후회했던 경험 <br />
            - "오늘 옷 좀 잘 받네?" 혹은 "오늘 나 좀 멋진데?" 하는 순간을
            기록하거나 자랑하고 싶었던 경험 <br />
            - "살 쪘는데 뭐 입지.." 또는 "내 핏은 왜 이러지?" 라고 고민한 경험
            <br />이 프로젝트는 옷으로 누구나 맞이했던 온갖 경험들에서 시작하여,
            <br />
            고민을 해결하기 위해 기획하게 되었습니다.
          </p>
          <p className="mt-8 font-xl font-semibold">해결방법</p>
          <p className="mt-2 text-sm font-medium">
            1. 현재 위치의 날씨, 나의 체형, 관심있는 스타일을 태그화 <br />
            2. 활성화 된 태그를 기준으로 과거의 나 혹은 남이 작성한 게시글을
            추천 <br />
            3. 내가 관심 있는 사람들을 팔로우 하여 모아볼 수 있고, 좋아요 기능과
            댓글 기능 등 SNS기능 활용
          </p>

          <p className="mt-8 text-base">
            <strong>팀원 :</strong> 프론트엔드 3명 / 백엔드 3명
          </p>
          <p className="mt-4 text-base">
            <strong>프로젝트 기간 :</strong> 2023년 08월 - 2023년 09월
          </p>
          <p className="mt-4 text-base">
            <strong>스택 :</strong> React, TypeScript, Recoil, React-router-dom,
            <br />
            Next.js, DaisyUI, TailwindCSS, StyledComponents, Axios, Vercel
          </p>

          <div className="mt-6 flex items-center space-x-4 font-bold text-lg">
            <a
              href="https://github.com/ZB-ChalKak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <FaGithub className="mr-1" /> GitHub Repository
            </a>
            <a
              href="https://velog.io/@whthgus77/%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%B0%B0%EC%B9%B5-%ED%9A%8C%EA%B3%A0%EB%A1%9D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <FaPencilAlt className="mr-1" /> 회고록 바로가기
            </a>
          </div>

          <div className="mt-4 text-gray-600 text-sm">
            <a href="/portfolio" className="underline">
              홈으로 돌아가기
            </a>
          </div>
        </div>

        {/* 오른쪽 이미지 영역 */}
        <div className="mockup-phone mt-20">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img
                src={chalkak}
                alt="#찰칵"
                className="w-full h-full object-fill "
              />
            </div>
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
                className="w-[300px] h-[300px] object-cover rounded-lg"
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
            사용자의 위치 요청 후 날씨 및 기온 표시
          </p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              위치 기반 날씨 정보 출력, 위치 거부 시 서울을 디폴트로 출력
            </li>
            <li className="mb-1">
              날씨 API에서 제공하는 weather code로 현재 날씨에 맞는 이모티콘과
              온도 출력
            </li>
          </ul>

          <p className="font-bold text-sm mt-4">오늘 날씨와 어울리는 스타일</p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              사용자의 위치 기반으로 날씨 정보를 가져오며, 게시물 태그에 있는
              날씨와 동일하게 비교하여 추천
            </li>
            <li className="mb-1">
              사용자가 위치 거부 시 디폴트로 서울을 기준으로 출력
            </li>
            <li className="mb-1">Swiper 라이브러리를 이용하여 슬라이드 구현</li>
          </ul>

          <p className="font-bold text-sm mt-4">키워드 추천 게시글</p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">키워드 추천 게시물 api 호출</li>
            <li className="mb-1">게시글 좋아요 기능</li>
            <li className="mb-1">
              IntersectionObserver 기능을 사용하여 무한 스크롤 구현
            </li>
          </ul>

          <p className="font-bold text-sm mt-4">키워드 나열</p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              비로그인 유저 - '전체' 키워드만 활성화 (css 스타일 표시)
            </li>
            <li className="mb-1">
              로그인 유저 - 회원가입 시 관심 키워드로 설정한 키워드가 디폴트로
              활성화 (css 스타일 표시)
            </li>
          </ul>

          <div className="mt-8 font-bold text-sm custom-font">검색페이지</div>
          <p className="font-bold text-sm mt-4">
            전체/계정/피드/태그 탭으로 구분하여 검색 결과 페이지 구현
          </p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              전체 탭에서는 계정/피드/태그 검색 결과를 일부 보여주게 함으로써
              slice를 이용하고, ‘더보기’를 눌렀을 때 해당 탭으로 이동하여 모든
              데이터가 출력
            </li>
            <li className="mb-1">
              상단 고정 되는 Navigation 적용 없이 레이아웃 페이지를 따로
              설정하여 구현
            </li>
          </ul>
        </div>

        {/* 오른쪽 기능 구현 내용 */}
        <div className="w-full max-w-md bg-gray-100 rounded-2xl p-4 md:ml-4 mb-4">
          <div className="mt-4 font-bold text-sm custom-font">트러블슈팅</div>

          <p className="font-bold text-sm mt-4">
            메인 키워드 추천 영역에서 게시물을 useInfiniteScroll로 구현 했을 때
            처음 게시물 4개만 보여지고, 새로운 데이터 로드가 안되는 문제점
          </p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              <strong>reason :</strong> scrollEvent 에서 닿는 부분이 제대로
              계산이 안될 수도 있다는 점을 고려
            </li>
            <li className="mb-1">
              <strong>Try to solve :</strong> 직접 내부 요소를 계산해서 값이
              제대로 계산이 안될 수 도 있다는 판단하에 useInfiniteQuery 훅 및
              ScrollEvent를 제거하고 IntersectionObserver 로 변경
            </li>
            <li className="mb-1">
              useInfiniteQuery를 사용하는 대신 useState를 사용하여 게시물을
              관리하고, 스크롤이 바닥에 닿을 때마다 새로운 게시물을 추가하도록
              코드를 수정
            </li>
          </ul>

          <p className="font-bold text-sm mt-4">
            api 중복 호출 - 페이지가 로드 되거나, 스크롤을 내리면 중복된 게시물
            표시
          </p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              <strong>reason :</strong> useEffect가 여러개 있어서 사이드
              이펙트의 문제점이 될 수 있다는 점 pageParam이 변경될 때마다
              fetchPosts가 호출되고, 필터링 조건이 변경될 때도 게시물 목록을
              초기화하고 페이지 번호를 0으로 설정하는데, 이 과정에서 pageParam
              값의 변화로 인해 다시 fetchPosts가 호출되면서 중복 호출과 중복
              게시물이 나오는것 같다고 생각이 듬
            </li>
            <li className="mb-1">
              <strong>Try to solve :</strong> fetchPosts 함수 내부에서 조건문을
              통해 pageParam === 0이 아닌경우 기존의 데이터 뒤에 새로운 데이터를
              추가하도록 수정
            </li>
          </ul>

          <p className="font-bold text-sm mt-4">
            검색할 시 키보드를 입력할 때마다 api가 연속적으로 호출하는 문제점
          </p>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li className="mb-1">
              <strong>Try to solve :</strong> debounce: lodash 라이브러리의
              함수로 주어진 함수를 지연시키고 연속 호출을 제한
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
