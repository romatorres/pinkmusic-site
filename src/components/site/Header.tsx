"use client";

import { PageContainer } from "../ui/Page-container";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex min-h-[124px] w-full flex-col items-stretch justify-center py-7 max-md:max-w-full max-md:px-5">
      <PageContainer>
        <div className="w-full max-md:max-w-full">
          <div className="flex h-[70px] w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:gap-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/eff353bbe4d06325829014a24d0af0d99b08e1c1?placeholderIfAbsent=true"
              alt="Pink Music Logo"
              className="my-auto aspect-[3.42] w-[240px] flex-shrink-0 self-stretch object-contain object-center"
            />
            <div className="my-auto flex min-w-[240px] flex-wrap items-center justify-center gap-12 self-stretch max-md:max-w-full">
              <nav className="my-auto flex min-w-[240px] items-center justify-start gap-7 self-stretch whitespace-nowrap text-lg font-medium text-[#326736] max-md:whitespace-normal">
                <div className="my-auto self-stretch transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-green-700">
                  Home
                </div>
                <div className="my-auto self-stretch transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-green-700">
                  Produtos
                </div>
                <div className="my-auto self-stretch transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-green-700">
                  Sobre
                </div>
                <div className="my-auto self-stretch transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-green-700">
                  Contatos
                </div>
              </nav>
              <div className="my-auto flex items-center justify-center gap-4 self-stretch">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/804ad3bd0609d5dee97ad7e644be77669066aa0e?placeholderIfAbsent=true"
                  alt="Social Icon"
                  className="my-auto aspect-square w-[34px] flex-shrink-0 self-stretch object-contain object-center transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/82077677f30f1a6c27e23547256dcf422e20529b?placeholderIfAbsent=true"
                  alt="Social Icon"
                  className="my-auto aspect-square w-[34px] flex-shrink-0 self-stretch object-contain object-center transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d5532ba1e2b9742510f2301fd2c33b673a35e0af?placeholderIfAbsent=true"
                  alt="Social Icon"
                  className="my-auto aspect-square w-[34px] flex-shrink-0 self-stretch object-contain object-center transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
