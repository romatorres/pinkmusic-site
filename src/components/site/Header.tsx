"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { PageContainer } from "../ui/Page-container";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 right-0 z-10 flex min-h-[100px] w-full items-center justify-center py-4 md:min-h-[124px]">
      <PageContainer>
        <div className="flex h-[70px] w-full items-center justify-between">
          {/* Logo */}
          <div className="relative lg:w-[240px] lg:h-[70px] w-[160px] h-[47px]">
            <Image
              src="/img/logo_pink.png"
              alt="Pink Music Logo"
              fill
              className="object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-12 md:flex">
            <nav className="flex items-center gap-7 text-base font-medium text-[#326736]">
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-green-700"
              >
                Home
              </a>
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-green-700"
              >
                Produtos
              </a>
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-green-700"
              >
                Sobre
              </a>
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-green-700"
              >
                Contatos
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/804ad3bd0609d5dee97ad7e644be77669066aa0e?placeholderIfAbsent=true"
                alt="Social Icon 1"
                className="h-[40px] w-[40px] object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/82077677f30f1a6c27e23547256dcf422e20529b?placeholderIfAbsent=true"
                alt="Social Icon 2"
                className="h-[40px] w-[40px] object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d5532ba1e2b9742510f2301fd2c33b673a35e0af?placeholderIfAbsent=true"
                alt="Social Icon 3"
                className="h-[40px] w-[40px] object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-[#326736]">
                  <MenuIcon size={32} />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-2xl text-[#326736]">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="mx-6 mt-8 flex flex-col gap-5 text-base font-medium text-[#326736]">
                  <a href="#" className="hover:text-green-700">
                    Home
                  </a>
                  <a href="#" className="hover:text-green-700">
                    Produtos
                  </a>
                  <a href="#" className="hover:text-green-700">
                    Sobre
                  </a>
                  <a href="#" className="hover:text-green-700">
                    Contatos
                  </a>
                </nav>
                <div className="mt-8 flex items-center justify-center gap-6">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/804ad3bd0609d5dee97ad7e644be77669066aa0e?placeholderIfAbsent=true"
                    alt="Social Icon 1"
                    className="h-[40px] w-[40px] object-contain"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/82077677f30f1a6c27e23547256dcf422e20529b?placeholderIfAbsent=true"
                    alt="Social Icon 2"
                    className="h-[40px] w-[40px] object-contain"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d5532ba1e2b9742510f2301fd2c33b673a35e0af?placeholderIfAbsent=true"
                    alt="Social Icon 3"
                    className="h-[40px] w-[40px] object-contain"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
