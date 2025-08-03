"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { PageContainer } from "../ui/Page-container";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Contact form submitted:", formData);
      toast.success("Formulário enviado com sucesso!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Falha ao enviar formulário. Tente novamente mais tarde.");
    }
  };

  return (
    <section className="flex flex-col w-full items-center">
      <PageContainer>
        <div className="flex md:flex-row flex-col w-full items-center justify-between flex-wrap py-8">
          <form
            onSubmit={handleSubmit}
            className="self-stretch min-w-[240px] whitespace-nowrap w-[652px] my-auto font-medium text-xl max-w-full md:whitespace-normal"
          >
            <div className="flex w-full items-center gap-3 justify-start flex-wrap mb-6 md:flex-col md:gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="NOME"
                className="rounded-full self-stretch flex min-w-[240px] w-full items-center gap-2.5 justify-start flex-grow flex-shrink my-auto py-4 px-7 border border-primary text-primary bg-transparent font-medium text-xl placeholder-primary/70 focus:outline-none focus:border-secondary focus:ring-2 focus:bg-secondary/20"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-MAIL"
                className="rounded-full self-stretch flex min-w-[240px] w-full items-center gap-2.5 justify-start flex-grow flex-shrink my-auto py-4 px-7 border border-primary text-primary bg-transparent font-medium text-xl placeholder-primary/70 focus:outline-none focus:border-secondary focus:ring-2 focus:bg-secondary/20"
                required
              />
            </div>
            <div className="flex w-full items-center gap-3 justify-start flex-wrap mb-6 md:flex-col md:gap-3">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="TELEFONE"
                className="rounded-full self-stretch flex min-w-[240px] w-full items-center gap-2.5 justify-start flex-grow flex-shrink my-auto py-4 px-7 border border-primary text-primary bg-transparent font-medium text-xl placeholder-primary/70 focus:outline-none focus:border-secondary focus:ring-2 focus:bg-secondary/20"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="ASSUNTO"
                className="rounded-full self-stretch flex min-w-[240px] w-full items-center gap-2.5 justify-start flex-grow flex-shrink my-auto py-4 px-7 border border-primary text-primary bg-transparent font-medium text-xl placeholder-primary/70 focus:outline-none focus:border-secondary focus:ring-2 focus:bg-secondary/20"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="MENSAGEM"
              className="rounded-[40px] flex mt-6 min-h-[176px] w-full items-start gap-2.5 justify-start p-5 px-7 border border-primary text-primary bg-transparent font-medium text-xl resize-y placeholder-primary/70 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 md:whitespace-normal md:px-5 md:pb-24"
              required
            />

            <button
              type="submit"
              className="rounded-full bg-primary flex mt-10 min-h-[56px] w-full items-center gap-2.5 text-white justify-center py-4 px-32 border-none cursor-pointer transition-colors duration-300 ease-in-out font-medium text-xl hover:bg-secondary md:whitespace-normal"
            >
              Enviar
            </button>
          </form>

          <div className="self-stretch flex min-w-[240px] flex-col items-start justify-start my-auto gap-5 max-w-full">
            <div className="flex items-center justify-start w-full gap-6">
              <img
                src="/img/icon-location_contacts.svg"
                alt="Localização"
                className="aspect-square object-contain object-center w-20 self-stretch flex-shrink-0 my-auto"
              />
              <div>
                <h3 className="text-primary self-start text-2xl font-normal mb-2">
                  LOCALIZAÇÃO
                </h3>
                <p className="text-foreground m-0 font-medium text-xl">
                  FEIRA DE SANTANA, BAHIA, BRASIL
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start w-full gap-6">
              <img
                src="/img/icon-whats_contacts.svg"
                alt="WhatsApp"
                className="aspect-square object-contain object-center w-20 self-stretch flex-shrink-0 my-auto"
              />
              <div>
                <h3 className="text-primary self-start text-2xl font-normal mb-2">
                  WHATSAPP
                </h3>
                <p className="text-foreground m-0 font-medium text-xl">
                  75 99966-1614
                </p>
              </div>
            </div>

            <div className="self-stretch flex w-full flex-col items-stretch">
              <h3 className="text-green-800 self-start text-2xl font-normal mb-2">
                TELEFONE
              </h3>
              <p className="text-black m-0 font-medium text-xl">75 3221-1530</p>
            </div>

            <div className="self-stretch flex w-full flex-col items-stretch md:whitespace-normal">
              <h3 className="text-green-800 self-start text-2xl font-normal mb-2">
                E-MAIL
              </h3>
              <p className="text-black m-0 font-medium text-xl">
                VENDAS@PINKMUSIC.COM.BR
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
