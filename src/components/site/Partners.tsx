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

  return (
    <section className="partners-section">
      <div className="partners-container">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="partner-logo"
            style={{ width: logo.width, aspectRatio: logo.aspectRatio }}
          />
        ))}
      </div>

      <style jsx>{`
        .partners-section {
          border-radius: 36px;
          background-color: rgba(255, 255, 255, 1);
          align-self: center;
          display: flex;
          margin-top: 56px;
          width: 100%;
          max-width: 1440px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px 34px;
        }

        .partners-container {
          display: flex;
          align-items: center;
          gap: 43px;
          justify-content: start;
          flex-wrap: wrap;
        }

        .partner-logo {
          object-fit: contain;
          object-position: center;
          align-self: stretch;
          flex-shrink: 0;
          margin: auto 0;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .partner-logo:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }

        @media (max-width: 991px) {
          .partners-section {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }

          .partners-container {
            max-width: 100%;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
