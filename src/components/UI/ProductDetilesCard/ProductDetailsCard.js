import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import ShareLink from "../ShareLink";

const ProductDetailsCard = ({
  path,
  imgSrc,
  imgAlt,
  title,
  description,
  price,
  condition,
  discountPercentage,
  priceAfterDiscount,
}) => {
  return (
    <div>
      <Link
        to={path}
        className={`flex flex-col justify-center items-center overflow-hidden relative`}
      >
        <span
          className={`absolute bg-red-600 text-white top-4 -right-8 w-28 flex justify-center items-center rotate-[45deg]`}
        >
          {condition}
        </span>
        <div>
          <img src={imgSrc} alt={imgAlt} className={`w-48`} loading="lazy" />
        </div>
        <div
          className={`flex flex-col items-center justify-center mb-4 mt-4 w-full`}
        >
          <h3 className={`font-bold mb-2`}>{title}</h3>
          <p className={`w-64 text-center mb-2`}>{description}</p>
        </div>
      </Link>
      <div className={`flex justify-between items-center w-full p-2`}>
        <span
          className={`text-[#5776a5] text-3xl ${
            discountPercentage && "line-through"
          }`}
        >
          {price}
        </span>
        <div className={`flex items-center`}>
          <AiOutlineShoppingCart
            className={`text-[#5776a5] text-2xl font-medium duration-300 cursor-pointer hover:text-[#3a4f6e] mr-2`}
          />
          <ShareLink />
        </div>
      </div>
      {discountPercentage && (
        <div className={`flex justify-between items-center w-full p-2`}>
          <span className={` text-3xl `}>{priceAfterDiscount}</span>
          <span className={`text-green-500 text-3xl`}>
            {discountPercentage} Off
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsCard;
