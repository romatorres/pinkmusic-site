"use client";

import { PageContainer } from "../ui/Page-container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-[image:var(--hero-background)] bg-cover bg-center py-20 md:min-h-[680px] md:py-28">
      <PageContainer>
        <div className="flex w-full max-w-[1440px] flex-col-reverse items-center gap-8 md:gap-4 px-4 md:flex-row md:items-center md:justify-between mt-12">
          <div className="flex flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left">
            <h1 className="m-0 font-['Tanker'] text-5xl md:text-5xl lg:text-6xl xl:text-[80px] leading-tight text-[#326736]  md:leading-14  lg:leading-16 xl:leading-24 lg:tracking-[3.2px]">
              Tudo para <br />
              sua música <br />
              em um só lugar!
            </h1>
            <div className="mt-8 flex w-full flex-col items-center justify-center sm:flex-row md:mt-10 md:justify-start gap-6 md:gap-4">
              <button className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#51a44a] lg:px-10 lg:py-4 md:px-7 md:py-3 px-7 py-3 text-lg font-semibold text-white transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-[#4c8147] sm:w-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8dca641377c42bb08a329a6e7eb77ad963160914?placeholderIfAbsent=true"
                  alt="E-commerce Icon"
                  className="aspect-square w-[22px] object-contain"
                />
                E-commerce
              </button>
              <button className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-solid border-[#326736] bg-[#deebe1] lg:px-10 lg:py-4 md:px-7 md:py-3 px-7 py-3 text-lg font-semibold text-[#326736] transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-green-200 sm:w-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a22671fb7ccc03adffbe793bd1ce888011bbee5d?placeholderIfAbsent=true"
                  alt="Store Icon"
                  className="aspect-square w-[22px] object-contain"
                />
                Loja Física
              </button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center md:w-1/2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full max-w-xl"
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    src={`/img/carousel/carousel-1.png`}
                    alt={`Carousel image 1`}
                    className="h-auto w-full max-w-[85%] object-contain sm:max-w-[75%] md:max-w-full lg:max-w-[90%] xl:max-w-[509px]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={`/img/carousel/carousel-2.png`}
                    alt={`Carousel image 2`}
                    className="h-auto w-full max-w-[85%] object-contain sm:max-w-[75%] md:max-w-full lg:max-w-[90%] xl:max-w-[509px]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={`/img/carousel/carousel-3.png`}
                    alt={`Carousel image 3`}
                    className="h-auto w-full max-w-[85%] object-contain sm:max-w-[75%] md:max-w-full lg:max-w-[90%] xl:max-w-[509px]"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
