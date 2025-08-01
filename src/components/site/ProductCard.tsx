"use client";

import React from "react";

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
  className = "",
}) => {
  return (
    <div className={`w-[280px] max-w-full ${className}`}>
      <div className="rounded-[30px] bg-white flex min-h-[440px] items-stretch gap-[10px] justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
        <div className="min-w-[240px] w-[280px]">
          <div className="relative flex min-h-[260px] w-full flex-col justify-center py-[65px] px-[15px]">
            <div className="rounded-[30px] bg-[rgba(196,225,194,1)] absolute z-0 flex min-h-[260px] w-[280px] max-w-[280px] items-start gap-[10px] justify-end right-0 bottom-0 h-[260px] pt-4 pr-5 pb-[212px] lg:pb-[100px]">
              <div className="flex w-full items-center gap-[100px] justify-between flex-1">
                <img
                  src={heartIcon}
                  alt="Add to Wishlist"
                  className="aspect-square object-contain object-center w-8 self-stretch shrink-0 my-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f0c09e680cfc3603c93097736811fdb812a1ff0c?placeholderIfAbsent=true"
                  alt="Share"
                  className="aspect-square object-contain object-center w-5 self-stretch shrink-0 my-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </div>
            <img
              src={imageSrc}
              alt={title}
              className="aspect-[1.92] object-contain object-center w-[249px] self-center z-[1] max-w-full"
            />
          </div>

          <div className="flex mt-4 w-full flex-col items-stretch justify-start">
            <div className="min-h-[90px] w-full px-3">
              <h3 className="text-[rgba(21,45,23,1)] text-xl font-semibold leading-[1.4] font-inter m-0 mb-4">
                {title}
              </h3>
              <div className="flex w-full max-w-[246px] items-center gap-[98px] justify-between">
                <div className="self-stretch flex items-end gap-[5px] text-[rgba(21,45,23,1)] leading-none justify-start w-[106px] my-auto">
                  <span className="tracking-[-1px] text-xl font-semibold font-inter">
                    R${" "}
                  </span>
                  <span className="text-3xl font-normal font-tanker">
                    {price}
                  </span>
                </div>
                <button className="rounded-[25px] bg-[rgba(81,164,74,1)] self-stretch flex items-center gap-3 justify-center w-10 h-10 my-auto px-2.5 border-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[rgba(71,144,64,1)]">
                  <img
                    src={addToCartIcon}
                    alt="Add to Cart"
                    className="aspect-square object-contain object-center w-5 self-stretch my-auto"
                  />
                </button>
              </div>
            </div>

            <button className="rounded-[24px] self-center flex mt-[17px] items-center gap-2 text-[rgba(50,103,54,1)] whitespace-nowrap justify-center py-2.5 px-7 font-medium text-base font-inter border border-[rgba(50,103,54,1)] bg-transparent cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[rgba(50,103,54,0.1)] lg:whitespace-normal lg:px-5">
              <img
                src={detailsIcon}
                alt="Details"
                className="aspect-square object-contain object-center w-[22px] self-stretch shrink-0 my-auto"
              />
              Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
