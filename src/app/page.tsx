import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full py-[60px] flex flex-col justify-center">
      <div className="md:w-[608px] pb-[60px] mx-auto my-auto bg-white rounded-[30px] flex flex-col items-center justify-center">
        <main className="flex flex-col items-center justify-center">
          <Image
            src="/cover.svg"
            alt="cover image"
            width={608}
            height={142}
            priority
          />
          <Image
            src="/avatar.svg"
            alt="profile avatar"
            width={180}
            height={180}
            priority
          />
          <h1 className="text-4xl font-bold mt-[18px]">Seoyun Kim</h1>
          <p className="text-md text-center font-semibold text-neutral-600 mt-[4px] hidden sm:block">
            Feel free to explore my GitHub, Notion, Velog, and LinkedIn.
            <br />
            You can find more information at the link below!
          </p>
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
                className="transition-transform duration-200 ease-in-out transform hover:scale-110"
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
                className="transition-transform duration-200 ease-in-out transform hover:scale-110"
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
                className="transition-transform duration-200 ease-in-out transform hover:scale-110"
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
                className="transition-transform duration-200 ease-in-out transform hover:scale-110"
              />
            </a>
          </div>
          <div className="flex flex-col w-full mx-auto items-center justify-center gap-[12px] mt-[30px]">
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <p className="flex items-center text-left text-md font-bold">
                👩🏻‍💻 Visit my FE portfolio
              </p>
              <a
                className="group inline-flex items-center justify-center"
                href="https://fe developer portfolio link"
                target="_blank"
                rel="fe developer portfolio link"
              >
                <svg
                  className="transition-colors duration-300 ease-in-out"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    className="transition-colors duration-300 ease-in-out fill-neutral-300 group-hover:fill-neutral-100"
                  />
                  <path
                    d="M16.6257 30L30 16.592"
                    className="transition-colors duration-300 ease-in-out stroke-neutral-500 group-hover:stroke-neutral-800"
                    strokeWidth="1.87057"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 29.2324V16.5913H17.3906"
                    className="transition-colors duration-300 ease-in-out stroke-neutral-500 group-hover:stroke-neutral-800"
                    strokeWidth="1.87057"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <p className="flex items-center text-left text-md font-bold">
                📝 Visit my Design portfolio
              </p>
              <a
                className="group inline-flex items-center justify-center"
                href="https://disign portfolio link"
                target="_blank"
                rel="disign portfolio link"
              >
                <svg
                  className="transition-colors duration-300 ease-in-out"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    className="transition-colors duration-300 ease-in-out fill-neutral-300 group-hover:fill-neutral-100"
                  />
                  <path
                    d="M16.6257 30L30 16.592"
                    className="transition-colors duration-300 ease-in-out stroke-neutral-500 group-hover:stroke-neutral-800"
                    strokeWidth="1.87057"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 29.2324V16.5913H17.3906"
                    className="transition-colors duration-300 ease-in-out stroke-neutral-500 group-hover:stroke-neutral-800"
                    strokeWidth="1.87057"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="flex w-[316px] sm:w-[400px] py-[9px] pl-[24px] pr-[9px] border border-neutral-300 rounded-[74.82px] justify-between shadow-short-default hover:bg-neutral-800 hover:text-neutral-100 hover:shadow-none transition-colors duration-150 ease-in-out">
              <p className="flex items-center text-left text-md font-bold">
                🎙 About Me !
              </p>
              <a
                className="group inline-flex items-center justify-center"
                href="https://about me link"
                target="_blank"
                rel="about me link"
              >
                <svg
                  className="transition-colors duration-300 ease-in-out"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    className="transition-colors duration-300 ease-in-out fill-neutral-300 group-hover:fill-neutral-100"
                  />
                  <path
                    d="M16.6257 30L30 16.592"
                    className="transition-colors duration-300 ease-in-out stroke-neutral-500 group-hover:stroke-neutral-800"
                    strokeWidth="1.87057"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 29.2324V16.5913H17.3906"
                    className="transition-colors duration-300 ease-in-out stroke-neutral-500 group-hover:stroke-neutral-800"
                    strokeWidth="1.87057"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
      <div className="w-full mx-auto my-auto">
        <p className="text-center">
          Designed by Mari.
          <br />© 2024 Mari. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default page;
