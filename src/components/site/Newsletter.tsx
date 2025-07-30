"use client";

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2 className="newsletter-title">Assine nossa newsletter!</h2>
          <p className="newsletter-description">
            Cadastre-se e fique por dentro<br />
            das nossas novidades e ofertas!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-MAIL"
            className="email-input"
            required
          />
          <button type="submit" className="subscribe-btn">
            Assinar
          </button>
        </form>
      </div>

      <style jsx>{`
        .newsletter-section {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
        }

        .newsletter-content {
          background-color: rgba(130, 215, 111, 1);
          display: flex;
          min-height: 160px;
          width: 100%;
          align-items: center;
          gap: 100px;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 34px 240px;
        }

        .newsletter-text {
          align-self: stretch;
          min-width: 240px;
          font-weight: 400;
          width: 301px;
          margin: auto 0;
        }

        .newsletter-title {
          color: rgba(50, 103, 54, 1);
          letter-spacing: 0.6px;
          font: 30px/1 Tanker, -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0 0 7px 0;
        }

        .newsletter-description {
          color: rgba(21, 45, 23, 1);
          letter-spacing: 0.36px;
          margin: 0;
          font: 18px/22px Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .newsletter-form {
          align-self: stretch;
          display: flex;
          min-width: 240px;
          align-items: center;
          gap: 39px;
          white-space: nowrap;
          justify-content: start;
          flex-wrap: wrap;
          margin: auto 0;
          font: 500 20px/1.3 Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .email-input {
          border-radius: 36px;
          align-self: stretch;
          display: flex;
          min-width: 240px;
          min-height: 60px;
          align-items: center;
          gap: 10px;
          color: rgba(50, 103, 54, 1);
          justify-content: start;
          width: 415px;
          margin: auto 0;
          padding: 17px 28px;
          border: 1px solid rgba(50, 103, 54, 1);
          background: transparent;
          font: 500 20px/1.3 Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .email-input::placeholder {
          color: rgba(50, 103, 54, 0.7);
        }

        .email-input:focus {
          outline: none;
          border-color: rgba(81, 164, 74, 1);
          box-shadow: 0 0 0 2px rgba(81, 164, 74, 0.2);
        }

        .subscribe-btn {
          border-radius: 30px;
          background-color: rgba(50, 103, 54, 1);
          align-self: stretch;
          display: flex;
          min-height: 60px;
          align-items: center;
          gap: 10px;
          color: rgba(222, 235, 225, 1);
          justify-content: center;
          width: 220px;
          margin: auto 0;
          padding: 17px 74px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font: 500 20px/1.3 Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .subscribe-btn:hover {
          background-color: rgba(40, 83, 44, 1);
        }

        @media (max-width: 991px) {
          .newsletter-content {
            max-width: 100%;
            padding: 0 20px;
            gap: 40px;
          }

          .newsletter-form {
            max-width: 100%;
            white-space: initial;
          }

          .email-input,
          .subscribe-btn {
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
