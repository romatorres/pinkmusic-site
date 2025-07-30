"use client";
import React from 'react';

const Partners: React.FC = () => {
  const partnerLogos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/15afdba5c761e8cf0d894719b07a38396e787ce6?placeholderIfAbsent=true",
      alt: "Partner Logo 1",
      width: "160px",
      aspectRatio: "4"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/c1f7832df6c586164e56e0bd66328d91e8c1f1e5?placeholderIfAbsent=true",
      alt: "Partner Logo 2",
      width: "180px",
      aspectRatio: "5.81"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b1f9c86eeb4278d0b14ca05e494a7120fc39735d?placeholderIfAbsent=true",
      alt: "Partner Logo 3",
      width: "80px",
      aspectRatio: "2.43"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/cc06ba4f929da7eac948ea50c8bd61dc7e2c7876?placeholderIfAbsent=true",
      alt: "Partner Logo 4",
      width: "70px",
      aspectRatio: "2.06"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/2030b1783b44a6a2d82f38818b9760418b50ec50?placeholderIfAbsent=true",
      alt: "Partner Logo 5",
      width: "120px",
      aspectRatio: "4.29"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/e00ad9e1aa5ac169c5fd4e642b589d45f93d0d75?placeholderIfAbsent=true",
      alt: "Partner Logo 6",
      width: "70px",
      aspectRatio: "2.33"
    }
  ];

  const extendedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="self-center mt-14 w-full max-w-[1440px] rounded-[36px] bg-white py-4 px-8 lg:px-34 flex flex-col items-center justify-center">
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll">
          {extendedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="mx-8 self-stretch object-contain object-center flex-shrink-0 my-auto grayscale opacity-70 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 hover:scale-105"
              style={{ width: logo.width, aspectRatio: logo.aspectRatio }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;