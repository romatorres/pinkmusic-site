"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        © 2024 Copyright Pink Music Instrumentos Musicais
      </div>

      <style jsx>{`
        .footer {
          background-color: rgba(50, 103, 54, 1);
          display: flex;
          margin-top: 91px;
          width: 100%;
          flex-direction: column;
          align-items: center;
          color: rgba(222, 235, 225, 1);
          justify-content: center;
          padding: 52px 70px;
          font: 600 16px/1.2 Open Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .footer-content {
          text-align: center;
        }

        @media (max-width: 991px) {
          .footer {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
