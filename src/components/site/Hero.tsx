"use client";

import { PageContainer } from "../ui/Page-container";

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] w-full flex-col items-stretch bg-[image:var(--hero-background)] bg-cover bg-center pb-[102px] pt-[140px] max-md:max-w-full max-md:pb-24">
      <PageContainer>
        <div className="relative mx-auto mb-[-20px] mt-[72px] flex w-full max-w-[1440px] items-start justify-start gap-20 px-3 max-md:max-w-full max-md:my-10 max-md:mb-2.5 max-md:gap-10">
          <div className="z-0 my-auto flex min-h-[382px] w-[526px] min-w-[240px] flex-col items-stretch justify-center max-md:max-w-full">
            <h1 className="m-0 font-['Tanker'] text-8xl leading-[96px] tracking-[3.2px] text-[#326736] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
              Tudo para <br />
              sua música <br />
              em um só lugar!
            </h1>
            <div className="mt-[38px] flex w-full flex-wrap items-center justify-start gap-9 text-xl font-medium max-md:max-w-full">
              <button className="my-auto flex items-center justify-center gap-2.5 self-stretch whitespace-nowrap rounded-[28px] bg-[#51a44a] px-8 py-4 text-white transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-green-700 max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8dca641377c42bb08a329a6e7eb77ad963160914?placeholderIfAbsent=true"
                  alt="E-commerce Icon"
                  className="my-auto aspect-square w-[22px] flex-shrink-0 self-stretch object-contain object-center"
                />
                E-commerce
              </button>
              <button className="my-auto flex items-center justify-center gap-2.5 self-stretch rounded-[28px] border border-solid border-[#326736] bg-[#deebe1] px-8 py-4 text-[#326736] transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-green-200 max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a22671fb7ccc03adffbe793bd1ce888011bbee5d?placeholderIfAbsent=true"
                  alt="Store Icon"
                  className="my-auto aspect-square w-[22px] flex-shrink-0 self-stretch object-contain object-center"
                />
                Loja Física
              </button>
            </div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4dc681923db7e4fceb664515a6b63e4a65a46320?placeholderIfAbsent=true"
            alt="Musical Instruments"
            className="absolute bottom-[39px] right-0 z-0 h-[304px] min-w-[240px] w-[509px] self-start object-contain object-center max-md:max-w-full"
          />
        </div>
      </PageContainer>
    </section>
  );
}
