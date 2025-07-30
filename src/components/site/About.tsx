"use client";

import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <div className="section-header">
            <div className="section-indicator" />
            <h2 className="section-title">Sobre</h2>
          </div>
          
          <h3 className="about-headline">
            Mais do que uma loja, uma paixão pela música.
          </h3>
          
          <p className="about-description">
            Localizada em Feira de Santana, na Bahia, a Pink Music é uma loja física com mais de 30 anos de tradição no mercado de instrumentos musicais e equipamentos de áudio. Nosso compromisso é oferecer qualidade, atendimento especializado e uma verdadeira experiência para músicos, produtores e apaixonados por som.
          </p>
          
          <div className="about-buttons">
            <button className="btn-primary">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/16ba541d41ca7520df04f57e6524a696a789d954?placeholderIfAbsent=true"
                alt="E-commerce Icon"
                className="btn-icon"
              />
              E-commerce
            </button>
            <button className="btn-secondary">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/871fdfc9f54de4ff3f063115d4d7a0eaf7b9246c?placeholderIfAbsent=true"
                alt="Store Icon"
                className="btn-icon"
              />
              Loja Física
            </button>
          </div>
        </div>
        
        <div className="about-images">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/27f436ad24527becdd6b398133fecbd1c91c28ab?placeholderIfAbsent=true"
            alt="Pink Music Store"
            className="main-image"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7ad14a66be843e15103329492017953ced2b74b?placeholderIfAbsent=true"
            alt="Musical Instruments"
            className="overlay-image"
          />
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: rgba(229, 242, 225, 1);
          display: flex;
          margin-top: 52px;
          min-height: 674px;
          width: 100%;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          padding: 68px 240px;
        }

        .about-content {
          position: relative;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .about-text {
          align-self: stretch;
          z-index: 1;
          display: flex;
          min-width: 240px;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          width: 631px;
          margin: auto 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 30px;
          color: rgba(0, 0, 0, 1);
          white-space: nowrap;
          font-family: Tanker, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .section-indicator {
          background-color: rgba(81, 164, 74, 1);
          align-self: stretch;
          display: flex;
          width: 8px;
          flex-shrink: 0;
          height: 28px;
          margin: auto 0;
        }

        .section-title {
          align-self: stretch;
          margin: auto 0;
          font-weight: 400;
        }

        .about-headline {
          color: rgba(50, 103, 54, 1);
          font-size: 52px;
          margin-top: 10px;
          margin-bottom: 0;
          font-family: Tanker, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 400;
        }

        .about-description {
          color: rgba(21, 45, 23, 1);
          letter-spacing: 0.36px;
          margin-top: 24px;
          font: 18px/22px Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .about-buttons {
          display: flex;
          margin-top: 60px;
          align-items: center;
          gap: 24px;
          justify-content: start;
          font: 500 20px Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .btn-primary {
          border-radius: 28px;
          background-color: rgba(81, 164, 74, 1);
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 1);
          white-space: nowrap;
          justify-content: center;
          margin: auto 0;
          padding: 16px 32px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: rgba(71, 144, 64, 1);
        }

        .btn-secondary {
          border-radius: 28px;
          background-color: rgba(222, 235, 225, 1);
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(50, 103, 54, 1);
          justify-content: center;
          margin: auto 0;
          padding: 16px 32px;
          border: 1px solid rgba(50, 103, 54, 1);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: rgba(200, 220, 205, 1);
        }

        .btn-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 22px;
          align-self: stretch;
          flex-shrink: 0;
          margin: auto 0;
        }

        .about-images {
          position: relative;
          align-self: stretch;
          min-width: 240px;
          width: 449px;
          margin: auto 0;
        }

        .main-image {
          aspect-ratio: 0.83;
          object-fit: contain;
          object-position: center;
          width: 100%;
          height: auto;
          z-index: 1;
        }

        .overlay-image {
          aspect-ratio: 0.8;
          object-fit: contain;
          object-position: center;
          width: 362px;
          position: absolute;
          z-index: 2;
          min-width: 240px;
          right: -85px;
          bottom: 34px;
          height: 455px;
        }

        @media (max-width: 991px) {
          .about-section {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }

          .about-content {
            flex-direction: column;
            gap: 40px;
          }

          .about-text {
            max-width: 100%;
          }

          .section-header {
            white-space: initial;
          }

          .about-headline {
            max-width: 100%;
            font-size: 40px;
          }

          .about-description {
            max-width: 100%;
          }

          .about-buttons {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
          }

          .btn-primary,
          .btn-secondary {
            white-space: initial;
            padding: 0 20px;
          }

          .about-images {
            max-width: 100%;
          }

          .overlay-image {
            right: -20px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
