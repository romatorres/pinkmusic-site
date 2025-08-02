"use client";

import React from "react";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  const products = [
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/b2de47d3b1ff6274693603d4712d7dd91dacbf06?placeholderIfAbsent=true",
      title: "Violão Takamine GD14",
      price: "5.590",
      addToCartIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/f8e06c367bcd69edc7e979b31e31ae4f8d0aba08?placeholderIfAbsent=true",
      detailsIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/6d387cb1dc9b1e1838e82e7f1d38f42941d46279?placeholderIfAbsent=true",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/87f4370f0ea9f3b250d87c12a2acd7ed03192bdb?placeholderIfAbsent=true",
      title: "Violão Takamine GD14",
      price: "5.590",
      addToCartIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/d122c206894981f19354de9cf86a694ed22dbc95?placeholderIfAbsent=true",
      detailsIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/d6a052ef54b466ef261cfea8d272d80fa9d9a5c8?placeholderIfAbsent=true",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/b2de47d3b1ff6274693603d4712d7dd91dacbf06?placeholderIfAbsent=true",
      title: "Violão Takamine GD14",
      price: "5.590",

      addToCartIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/06f5183c8767e05a92ef1eafaea043f32b39b4f1?placeholderIfAbsent=true",
      detailsIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/6d387cb1dc9b1e1838e82e7f1d38f42941d46279?placeholderIfAbsent=true",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/585a57e57640569883e07eecc02d7e6dd782a609?placeholderIfAbsent=true",
      title: "Violão Takamine GD14",
      price: "5.590",
      addToCartIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/a791f9e67e8b2f009014bccaf4599048444e0028?placeholderIfAbsent=true",
      detailsIcon:
        "https://api.builder.io/api/v1/image/assets/TEMP/0f0094aeaa72ac4ac4b6d3d7ee40ca1b6616fc47?placeholderIfAbsent=true",
    },
  ];

  // Duplicate products to create the grid layout
  const allProducts = [...products, ...products];

  return (
    <section className="self-center flex mt-[85px] w-full max-w-[1440px] flex-col items-stretch justify-between lg:mt-10 lg:max-w-full">
      <div className="flex w-full flex-col py-0.5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 mx-auto max-w-[1200px]">
          {allProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              className={`product-${index}`}
            />
          ))}
        </div>

        <button className="rounded-3xl self-center flex mt-[50px] items-center gap-2 text-[#326736] justify-center px-7 py-2.5 text-base font-medium font-inter border border-[#326736] bg-transparent cursor-pointer transition-colors ease-in-out duration-300 hover:bg-[rgba(50,103,54,0.1)] lg:mt-10 lg:px-5">
          Ver Todos
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ff738113924932c7366088f3761ea4e8dea0ab48?placeholderIfAbsent=true"
            alt="Arrow"
            className="aspect-square object-contain object-center w-5 self-stretch shrink-0 my-auto"
          />
        </button>
      </div>
    </section>
  );
};

export default Products;
