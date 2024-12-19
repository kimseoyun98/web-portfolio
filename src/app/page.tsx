"use client";

import Image from "next/image";
import useLanguageStore from "./store/useLanguageStore";
import IconCheck from "./ui/IconCheck";

const Page = () => {
  const { language, toggleLanguage } = useLanguageStore();

  const content = {
    en: {
      name: "Seoyun Kim",
      description:
        "Feel free to explore my GitHub, Notion, Velog, and LinkedIn.\nYou can find more information at the link below!",
      portfolio: "👩🏻‍💻 Visit my FE portfolio",
      design: "📝 Visit my Design portfolio",
      about: "🎙 About Me!",
    },
    ko: {
      name: "김서연",
      description:
        "저의 GitHub, Notion, Velog, LinkedIn을 둘러보세요.\n추가적인 정보는 아래 링크에서 확인할 수 있습니다!",
      portfolio: "👩🏻‍💻 프론트엔드 개발자 포트폴리오",
      design: "📝 UX/UI 디자인 포트폴리오",
      about: "🎙 나를 소개합니다!",
    },
  };
  const text = content[language];
  const formattedDescription = text.description.replace(/\n/g, "<br />");

  return (
    <div className="w-full h-full py-[40px] flex flex-col justify-center">
      {/* 언어 토글 버튼 */}
      <div className="flex items-center mb-[30px] mx-auto">
        <div
          className={`h-[34px] flex items-center rounded-full transition-all duration-300 ${
            language === "ko" ? "bg-green-500" : "bg-gray-900"
          }`}
          onClick={toggleLanguage}
        >
          <div
            className={`w-12 h-8 bg-black rounded-full shadow-md transition-transform duration-300 ${
              language === "ko" ? "translate-x-12" : "translate-x-0"
            }`}
          ></div>
          <div
            className={`absolute left-0 w-12 h-8 flex justify-center items-center text-white font-semibold transition-opacity duration-300 z-100 ${
              language === "ko" ? "opacity-0" : "opacity-100"
            }`}
          >
            EN
          </div>
          <div
            className={`absolute right-0 w-12 h-8 flex justify-center items-center text-white font-semibold transition-opacity duration-300 z-100 ${
              language === "ko" ? "opacity-100" : "opacity-0"
            }`}
          >
            KO
          </div>
        </div>
      </div>
      <div className="md:w-[608px] min-w-[350px] pb-[30px] m-auto bg-white shadow-long rounded-[30px] overflow-hidden flex flex-col items-center justify-center">
        <main className="flex flex-col items-center justify-center w-full">
          <div className="relative h-[142px] w-full">
            <Image
              src="/cover.svg"
              alt="cover image"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-[183px] left-1/2 -translate-x-1/2">
            <Image
              src="/avatar.svg"
              alt="profile avatar"
              width={160}
              height={160}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mt-[100px]">{text.name}</h1>
          <div className="text-md text-center font-semibold text-neutral-600 mt-[4px] hidden sm:block">
            <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />
          </div>
          <div className="flex justify-center gap-[10px] mt-[16px]">
            <a
              href="https://github.com/kimseoyun98"
              target="_blank"
              rel="github link"
            >
              <Image
                src="/github.svg"
                alt="github image"
                width={32}
                height={32}
                className="transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-short-hover"
              />
            </a>
            <a
              href="https://www.notion.so/marisportfolio/DesignedBy-Mari-13d32ee427364e50a1ffbc50e7f283ba"
              target="_blank"
              rel="notion link"
            >
              <Image
                src="/notion.svg"
                alt="notion image"
                width={31.52}
                height={31.6}
                className="transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-short-hover"
              />
            </a>
            <a
              href="www.linkedin.com/in/seoyunmari"
              target="_blank"
              rel="linkedIn link"
            >
              <Image
                src="/linkedin.svg"
                alt="linkedin image"
                width={31.52}
                height={31.6}
                className="transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-short-hover"
              />
            </a>
            <a
              href="https://velog.io/@gimmari/posts"
              target="_blank"
              rel="velog link"
            >
              <Image
                src="/velog.svg"
                alt="velog image"
                width={31.52}
                height={31.6}
                className="transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-short-hover"
              />
            </a>
          </div>
          <div className="flex flex-col w-full mx-auto items-center justify-center gap-[12px] mt-[30px]">
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <p className="flex items-center text-left text-md font-bold">
                {text.portfolio}
              </p>
              <a
                className="group inline-flex items-center justify-center"
                href="https://about me link"
                target="_blank"
                rel="about me link"
              >
                <IconCheck />
              </a>
            </div>
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <p className="flex items-center text-left text-md font-bold">
                {text.design}
              </p>
              <a
                className="group inline-flex items-center justify-center"
                href="https://about me link"
                target="_blank"
                rel="about me link"
              >
                <IconCheck />
              </a>
            </div>
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <p className="flex items-center text-left text-md font-bold">
                {text.about}
              </p>
              <a
                className="group inline-flex items-center justify-center"
                href="https://about me link"
                target="_blank"
                rel="about me link"
              >
                <IconCheck />
              </a>
            </div>
          </div>
        </main>
      </div>
      <div className="w-full mx-auto mt-10">
        <p className="text-center">
          Designed and Published by Mari.
          <br />© 2024 Mari. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Page;
