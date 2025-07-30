"use client";

import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  heartIcon: string;
  addToCartIcon: string;
  detailsIcon: string;
  isLiked?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
  heartIcon,
  addToCartIcon,
  detailsIcon,
  isLiked = false,
  className = ""
}) => {
  return (
    <div className={`product-card ${className}`}>
      <div className="card-container">
        <div className="card-content">
          <div className="product-image-section">
            <div className="image-background">
              <div className="card-actions">
                <img
                  src={heartIcon}
                  alt="Add to Wishlist"
                  className="action-icon"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f0c09e680cfc3603c93097736811fdb812a1ff0c?placeholderIfAbsent=true"
                  alt="Share"
                  className="action-icon share-icon"
                />
              </div>
            </div>
            <img
              src={imageSrc}
              alt={title}
              className="product-image"
            />
          </div>
          
          <div className="product-info">
            <div className="product-details">
              <h3 className="product-title">{title}</h3>
              <div className="price-cart-section">
                <div className="price-container">
                  <span className="currency">R$ </span>
                  <span className="price">{price}</span>
                </div>
                <button className="add-to-cart-btn">
                  <img
                    src={addToCartIcon}
                    alt="Add to Cart"
                    className="cart-icon"
                  />
                </button>
              </div>
            </div>
            
            <button className="details-btn">
              <img
                src={detailsIcon}
                alt="Details"
                className="details-icon"
              />
              Detalhes
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          width: 280px;
          max-width: 100%;
        }

        .card-container {
          border-radius: 30px;
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          min-height: 440px;
          align-items: stretch;
          gap: 10px;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .card-content {
          min-width: 240px;
          width: 280px;
        }

        .product-image-section {
          position: relative;
          display: flex;
          min-height: 260px;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          padding: 65px 15px;
        }

        .image-background {
          border-radius: 30px;
          background-color: rgba(196, 225, 194, 1);
          position: absolute;
          z-index: 0;
          display: flex;
          min-height: 260px;
          width: 280px;
          max-width: 280px;
          align-items: start;
          gap: 10px;
          justify-content: end;
          right: 0px;
          bottom: 0px;
          height: 260px;
          padding: 16px 20px 212px;
        }

        .card-actions {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 100px;
          justify-content: space-between;
          flex: 1;
        }

        .action-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 32px;
          align-self: stretch;
          flex-shrink: 0;
          margin: auto 0;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .share-icon {
          width: 20px;
        }

        .action-icon:hover {
          transform: scale(1.1);
        }

        .product-image {
          aspect-ratio: 1.92;
          object-fit: contain;
          object-position: center;
          width: 249px;
          align-self: center;
          z-index: 1;
          max-width: 100%;
        }

        .product-info {
          display: flex;
          margin-top: 16px;
          width: 100%;
          flex-direction: column;
          align-items: stretch;
          justify-content: start;
        }

        .product-details {
          min-height: 90px;
          width: 100%;
          padding: 0 12px;
        }

        .product-title {
          color: rgba(21, 45, 23, 1);
          font: 600 20px/1.4 Inter, -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0 0 16px 0;
        }

        .price-cart-section {
          display: flex;
          width: 100%;
          max-width: 246px;
          align-items: center;
          gap: 98px;
          justify-content: space-between;
        }

        .price-container {
          align-self: stretch;
          display: flex;
          align-items: end;
          gap: 5px;
          color: rgba(21, 45, 23, 1);
          line-height: 1;
          justify-content: start;
          width: 106px;
          margin: auto 0;
        }

        .currency {
          letter-spacing: -1px;
          font: 600 20px Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .price {
          font: 400 32px Tanker, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .add-to-cart-btn {
          border-radius: 25px;
          background-color: rgba(81, 164, 74, 1);
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: auto 0;
          padding: 0 10px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .add-to-cart-btn:hover {
          background-color: rgba(71, 144, 64, 1);
        }

        .cart-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          align-self: stretch;
          margin: auto 0;
        }

        .details-btn {
          border-radius: 24px;
          align-self: center;
          display: flex;
          margin-top: 17px;
          align-items: center;
          gap: 8px;
          color: rgba(50, 103, 54, 1);
          white-space: nowrap;
          justify-content: center;
          padding: 10px 28px;
          font: 500 16px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          border: 1px solid rgba(50, 103, 54, 1);
          background: transparent;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .details-btn:hover {
          background-color: rgba(50, 103, 54, 0.1);
        }

        .details-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 22px;
          align-self: stretch;
          flex-shrink: 0;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .image-background {
            padding-bottom: 100px;
          }

          .details-btn {
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
