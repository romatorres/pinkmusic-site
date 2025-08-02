"use client";

import React, { useState } from "react";
import { PageContainer } from "../ui/Page-container";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="flex w-full flex-col items-stretch justify-center bg-tertiary">
      <PageContainer>
        <div className="flex min-h-[160px] w-full flex-wrap items-center justify-between py-[34px]">
          <div className="my-auto min-w-[240px] w-[301px] self-stretch font-normal">
            <h2 className="mb-[7px] font-tanker text-[30px] leading-none tracking-[0.6px] text-primary">
              Assine nossa newsletter!
            </h2>
            <p className="m-0 text-[18px] leading-[22px] tracking-[0.36px] text-foreground">
              Cadastre-se e fique por dentro
              <br />
              das nossas novidades e ofertas!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="my-auto flex min-w-[240px] flex-wrap items-center justify-start gap-[39px] self-stretch whitespace-nowrap text-[20px] font-medium leading-[1.3] lg:max-w-full lg:whitespace-normal"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-MAIL"
              className="placeholder:text-primary/70 my-auto min-h-[60px] min-w-[240px] w-[415px] self-stretch rounded-[36px] border border-primary bg-transparent px-7 py-[17px] text-[20px] font-medium leading-[1.3] text-primary focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 lg:whitespace-normal lg:px-5"
              required
            />
            <button
              type="submit"
              className="my-auto flex min-h-[60px] w-[220px] cursor-pointer self-stretch items-center justify-center rounded-[30px] border-none bg-primary px-[74px] py-[17px] text-[20px] font-medium leading-[1.3] text-background transition-colors duration-300 ease-in-out hover:bg-primary/80 lg:whitespace-normal lg:px-5"
            >
              Assinar
            </button>
          </form>
        </div>
      </PageContainer>
    </section>
  );
}
