"use client";

import Image from "next/image";
import useLanguageStore from "./store/useLanguageStore";
import IconCheck from "./ui/IconCheck";
import CustomModal from "@/components/AboutModal";
import Link from "next/link";

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
      aboutMeTitle: "Hello 🥰 I'm Seoyun Kim.\nA versatile talent of this era!",
      aboutMeContent:
        "*✔︎ nickname*   -   MARI\n*✔︎ birth*   -   1998.10.31\n*✔︎ tel*   -   010-5933-5514\n*✔︎ email*   -   seoyunkim98@gmail.com\n*✔︎ MBTI*   -   ESTP",
    },
    ko: {
      name: "김서연",
      description:
        "저의 GitHub, Notion, Velog, LinkedIn을 둘러보세요.\n추가적인 정보는 아래 링크에서 확인할 수 있습니다!",
      portfolio: "👩🏻‍💻 프론트엔드 개발자 포트폴리오",
      design: "📝 UX/UI 디자인 포트폴리오",
      about: "🎙 나를 소개합니다!",
      aboutMeTitle: "안녕하세요 🥰\n이 시대의 웅합형 인재 김서연입니다!",
      aboutMeContent:
        "*✔︎ 닉네임*   -    마리\n*✔︎ 생년월일*   -    1998.10.31\n*✔︎ 전화번호*   -    010-5933-5514\n*✔︎ 이메일*   -    seoyunkim98@gmail.com\n*✔︎ MBTI*   -    ESTP",
    },
  };
  const text = content[language];
  const formattedDescription = text.description.replace(/\n/g, "<br />");

  return (
    <div className="w-full h-full py-[40px] flex flex-col justify-center">
      {/* 언어 토글 버튼 */}
      <div
        className="relative flex items-center mb-[30px] mx-auto w-[99px] h-[34px] bg-neutral-300 border-1.5 border-neutral-400 rounded-full shadow-short-default cursor-pointer"
        onClick={toggleLanguage}
      >
        {/* 슬라이더 */}
        <div
          className={`absolute w-[46px] h-[26px] bg-neutral-100 rounded-full transition-transform duration-300 ${
            language === "ko" ? "translate-x-[46px]" : "translate-x-[4px]"
          }`}
        ></div>

        {/* EN 버튼 */}
        <div className="ml-[4px] flex-1 flex justify-center items-center z-10">
          <span
            className={`transition-colors duration-300 ${
              language === "en" ? "text-neutral-900" : "text-neutral-500"
            }`}
          >
            EN
          </span>
        </div>

        {/* KO 버튼 */}
        <div className="mr-[4px] flex-1 flex justify-center items-center z-10">
          <span
            className={`transition-colors duration-300 ${
              language === "ko" ? "text-neutral-900" : "text-neutral-500"
            }`}
          >
            KO
          </span>
        </div>
      </div>
      <div className="sm:w-[608px] min-w-[350px] pb-[50px] m-auto bg-white shadow-long rounded-[30px] overflow-hidden flex flex-col items-center justify-center">
        <main className="flex flex-col items-center justify-center w-full">
          <div className="relative h-[142px] w-full">
            <Image
              src="/cover.svg"
              alt="cover image"
              fill
              className="object-cover"
              priority
              quality={100}
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
            <Link
              href="https://github.com/kimseoyun98"
              target="_blank"
              rel="github link"
            >
              <Image
                src="/github.svg"
                alt="github image"
                width={32}
                height={32}
                className="rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-short-hover"
              />
            </Link>
            <Link
              href="https://www.notion.so/marisportfolio/DesignedBy-Mari-13d32ee427364e50a1ffbc50e7f283ba"
              target="_blank"
              rel="notion link"
            >
              <Image
                src="/notion.svg"
                alt="notion image"
                width={32}
                height={32}
                className="rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-short-hover"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/seoyunmari"
              target="_blank"
              rel="linkedIn link"
            >
              <Image
                src="/linkedIn-new.svg"
                alt="linkedIn image"
                width={32}
                height={32}
                className="rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-short-hover"
              />
            </Link>
            <Link
              href="https://velog.io/@gimmari"
              target="_blank"
              rel="velog link"
            >
              <Image
                src="/velog.svg"
                alt="velog image"
                width={32}
                height={32}
                className="rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-short-hover"
              />
            </Link>
          </div>
          <div className="flex flex-col w-full mx-auto items-center justify-center gap-[12px] mt-[30px]">
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <h2 className="flex items-center text-left text-md font-bold">
                {text.portfolio}
              </h2>
              <Link
                className="group inline-flex items-center justify-center"
                href="https://marisportfolio-developer.notion.site/"
                target="_blank"
                rel="fe developer portfolio"
              >
                <IconCheck />
              </Link>
            </div>
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <h2 className="flex items-center text-left text-md font-bold">
                {text.design}
              </h2>
              <Link
                className="group inline-flex items-center justify-center"
                href="https://marisportfolio-designer.notion.site/"
                target="_blank"
                rel="ux ui designer portfolio"
              >
                <IconCheck />
              </Link>
            </div>
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <h2 className="flex items-center text-left text-md font-bold">
                {text.about}
              </h2>
              <CustomModal
                title={
                  <p
                    className="text-center text-xl mt-4 font-bold"
                    dangerouslySetInnerHTML={{
                      __html: text.aboutMeTitle
                        .replace(/\n/g, "<br />")
                        .replace(/\*([^*]+)\*/g, "<b>$1</b>"),
                    }}
                  />
                }
                content={
                  <p
                    className="mx-auto"
                    dangerouslySetInnerHTML={{
                      __html: text.aboutMeContent
                        .replace(/\n/g, "<br />")
                        .replace(/\*([^*]+)\*/g, "<b>$1</b>"),
                    }}
                  />
                }
              />
            </div>
          </div>
        </main>
      </div>
      <div className="w-full mx-auto mt-10">
        <p className="text-center text-neutral-600">
          Designed and Published by Mari.
          <br />© 2025 Mari. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Page;
