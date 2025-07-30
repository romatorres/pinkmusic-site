"use client";

import React from 'react';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  const products = [
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/b2de47d3b1ff6274693603d4712d7dd91dacbf06?placeholderIfAbsent=true",
      title: "Violão Takamine GD14",
      price: "5.590",
      heartIcon: "https://api.builder.io/api/v1/image/assets/TEMP/a2619061f03e5223ec31f28258fa979a8ab74049?placeholderIfAbsent=true",
      addToCartIcon: "https://api.builder.io/api/v1/image/assets/TEMP/f8e06c367bcd69edc7e979b31e31ae4f8d0aba08?placeholderIfAbsent=true",
      detailsIcon: "https://api.builder.io/api/v1/image/assets/TEMP/6d387cb1dc9b1e1838e82e7f1d38f42941d46279?placeholderIfAbsent=true"
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/87f4370f0ea9f3b250d87c12a2acd7ed03192bdb?placeholderIfAbsent=true",
      title: "Violão Takamine GD14",
      price: "5.590",
      heartIcon: "https://api.builder.io/api/v1/image/assets/TEMP/a2619061f03e5223ec31f28258fa979a8ab74049?placeholderIfAbsent=true",
      addToCartIcon: "https://api.builder.io/api/v1/image/assets/TEMP/d122c206894981f19354de9cf86a694ed22dbc95?placeholderIfAbsent=true",
      detailsIcon: "https://api.builder.io/api/v1/image/assets/TEMP/d6a052ef54b466ef261cfea8d272d80fa9d9a5c8?placeholderIfAbsent=true"
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/b2de47d3b1ff6274693603d4712d7dd91dacbf06?placeholderIfAbsent=true",
      title: "Violão Takamine GD14",
      price: "5.590",
      heartIcon: "https://api.builder.io/api/v1/image/assets/TEMP/a2619061f03e5223ec31f28258fa979a8ab74049?placeholderIfAbsent=true",
      addToCartIcon: "https://api.builder.io/api/v1/image/assets/TEMP/06f5183c8767e05a92ef1eafaea043f32b39b4f1?placeholderIfAbsent=true",
      detailsIcon: "https://api.builder.io/api/v1/image/assets/TEMP/6d387cb1dc9b1e1838e82e7f1d38f42941d46279?placeholderIfAbsent=true"
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/585a57e57640569883e07eecc02d7e6dd782a609?placeholderIfAbsent=true",
      title: "Violão Takamine GD14",
      price: "5.590",
      heartIcon: "https://api.builder.io/api/v1/image/assets/TEMP/a2619061f03e5223ec31f28258fa979a8ab74049?placeholderIfAbsent=true",
      addToCartIcon: "https://api.builder.io/api/v1/image/assets/TEMP/a791f9e67e8b2f009014bccaf4599048444e0028?placeholderIfAbsent=true",
      detailsIcon: "https://api.builder.io/api/v1/image/assets/TEMP/0f0094aeaa72ac4ac4b6d3d7ee40ca1b6616fc47?placeholderIfAbsent=true"
    }
  ];

  // Duplicate products to create the grid layout
  const allProducts = [...products, ...products];

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-grid">
          {allProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              className={`product-${index}`}
            />
          ))}
        </div>
        
        <button className="view-all-btn">
          Ver Todos
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ff738113924932c7366088f3761ea4e8dea0ab48?placeholderIfAbsent=true"
            alt="Arrow"
            className="arrow-icon"
          />
        </button>
      </div>

      <style jsx>{`
        .products-section {
          align-self: center;
          display: flex;
          margin-top: 85px;
          width: 100%;
          max-width: 1440px;
          flex-direction: column;
          align-items: stretch;
          justify-content: space-between;
        }

        .products-container {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 2px 0;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          justify-content: center;
          align-items: start;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .view-all-btn {
          border-radius: 24px;
          align-self: center;
          display: flex;
          margin-top: 50px;
          align-items: center;
          gap: 8px;
          color: rgba(50, 103, 54, 1);
          justify-content: center;
          padding: 10px 28px;
          font: 500 16px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          border: 1px solid rgba(50, 103, 54, 1);
          background: transparent;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .view-all-btn:hover {
          background-color: rgba(50, 103, 54, 0.1);
        }

        .arrow-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          align-self: stretch;
          flex-shrink: 0;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .products-section {
            max-width: 100%;
            margin-top: 40px;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 0 20px;
          }

          .view-all-btn {
            margin-top: 40px;
            padding: 0 20px;
          }
        }

        @media (min-width: 992px) {
          .products-grid {
            grid-template-columns: repeat(4, 280px);
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
