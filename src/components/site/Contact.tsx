"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="NOME"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-MAIL"
              className="form-input"
              required
            />
          </div>
          
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="TELEFONE"
              className="form-input"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="ASSUNTO"
              className="form-input"
              required
            />
          </div>
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="MENSAGEM"
            className="message-input"
            required
          />
          
          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
        
        <div className="contact-info">
          <div className="info-item">
            <h3 className="info-title">LOCALIZAÇÃO</h3>
            <p className="info-text">FEIRA DE SANTNA, BAHIA, BRASIL</p>
          </div>
          
          <div className="info-item-with-icon">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9191264c9497f6db4ac426002578341ebd642661?placeholderIfAbsent=true"
              alt="WhatsApp"
              className="contact-icon"
            />
            <div className="info-content">
              <h3 className="info-title">whatsapp</h3>
              <p className="info-text">75 99966-1614</p>
            </div>
          </div>
          
          <div className="info-item">
            <h3 className="info-title">TELEFONE</h3>
            <p className="info-text">75 3221-1530</p>
          </div>
          
          <div className="info-item">
            <h3 className="info-title">E-MAIL</h3>
            <p className="info-text">VENDAS@PINKMUSIC.COM.BR</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          display: flex;
          margin-top: 91px;
          width: 100%;
          align-items: center;
          gap: 100px;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 0 240px;
        }

        .contact-content {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 100px;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .contact-form {
          align-self: stretch;
          min-width: 240px;
          white-space: nowrap;
          width: 652px;
          margin: auto 0;
          font: 500 20px/1.3 Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .form-row {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 12px;
          justify-content: start;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .form-input {
          border-radius: 36px;
          align-self: stretch;
          display: flex;
          min-width: 240px;
          min-height: 60px;
          align-items: center;
          gap: 10px;
          justify-content: start;
          flex-grow: 1;
          flex-shrink: 1;
          width: 256px;
          margin: auto 0;
          padding: 17px 28px;
          border: 1px solid rgba(50, 103, 54, 1);
          color: rgba(50, 103, 54, 1);
          background: transparent;
          font: 500 20px/1.3 Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .form-input::placeholder {
          color: rgba(50, 103, 54, 0.7);
        }

        .form-input:focus {
          outline: none;
          border-color: rgba(81, 164, 74, 1);
          box-shadow: 0 0 0 2px rgba(81, 164, 74, 0.2);
        }

        .message-input {
          border-radius: 40px;
          display: flex;
          margin-top: 24px;
          min-height: 176px;
          width: 100%;
          align-items: start;
          gap: 10px;
          justify-content: start;
          padding: 20px 28px;
          border: 1px solid rgba(50, 103, 54, 1);
          color: rgba(50, 103, 54, 1);
          background: transparent;
          font: 500 20px/1.3 Inter, -apple-system, Roboto, Helvetica, sans-serif;
          resize: vertical;
        }

        .message-input::placeholder {
          color: rgba(50, 103, 54, 0.7);
        }

        .message-input:focus {
          outline: none;
          border-color: rgba(81, 164, 74, 1);
          box-shadow: 0 0 0 2px rgba(81, 164, 74, 0.2);
        }

        .submit-btn {
          border-radius: 28px;
          background-color: rgba(81, 164, 74, 1);
          display: flex;
          margin-top: 40px;
          min-height: 56px;
          width: 100%;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 1);
          justify-content: center;
          padding: 15px 238px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font: 500 20px/1.3 Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .submit-btn:hover {
          background-color: rgba(71, 144, 64, 1);
        }

        .contact-info {
          align-self: stretch;
          display: flex;
          min-width: 240px;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          width: 438px;
          margin: auto 0;
          gap: 20px;
        }

        .info-item {
          align-self: stretch;
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: stretch;
        }

        .info-item-with-icon {
          display: flex;
          align-items: center;
          gap: 28px;
          justify-content: start;
        }

        .contact-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 80px;
          align-self: stretch;
          flex-shrink: 0;
          margin: auto 0;
        }

        .info-content {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 147px;
        }

        .info-title {
          color: rgba(50, 103, 54, 1);
          align-self: start;
          font: 400 24px/1 Tanker, -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0 0 7px 0;
        }

        .info-text {
          color: rgba(0, 0, 0, 1);
          margin: 0;
          font: 500 20px/1.3 Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        @media (max-width: 991px) {
          .contact-section {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
            flex-direction: column;
            gap: 40px;
          }

          .contact-content {
            max-width: 100%;
            flex-direction: column;
            gap: 40px;
          }

          .contact-form {
            max-width: 100%;
            white-space: initial;
          }

          .form-row {
            max-width: 100%;
            white-space: initial;
            flex-direction: column;
            gap: 12px;
          }

          .form-input {
            width: 100%;
            white-space: initial;
            padding: 0 20px;
          }

          .message-input {
            max-width: 100%;
            white-space: initial;
            padding: 0 20px 100px;
          }

          .submit-btn {
            max-width: 100%;
            white-space: initial;
            padding: 0 20px;
          }

          .contact-info {
            max-width: 100%;
          }

          .info-item {
            white-space: initial;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
