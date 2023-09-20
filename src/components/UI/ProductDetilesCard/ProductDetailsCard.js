import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import ShareLink from "../ShareLink";
import { getCurrencySymbol } from "../../../funcs/Currency";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

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
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const { t } = useTranslation();
  return (
    <div>
      <Link
        to={path}
        className={`flex flex-col justify-center items-center overflow-hidden relative py-4`}
      >
        <span
          className={`absolute ${
            condition === "New"
              ? "bg-red-600"
              : condition === "Used" && "bg-yellow-500"
          }  text-white top-4 -right-8 w-28 flex justify-center items-center rotate-[45deg]`}
        >
          {condition}
        </span>
        <div>
          <img
            src={imgSrc}
            alt={imgAlt}
            className={`w-32 h-32 object-contain`}
            loading="lazy"
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center mb-4 mt-4 w-full overflow-hidden`}
        >
          <h3 className={`font-bold mb-2`}>{title}</h3>
          <p
            className={`w-64 text-center mb-2 overflow-hidden whitespace-nowrap text-ellipsis`}
          >
            {description}
          </p>
        </div>
      </Link>
      <div className={`flex flex-col justify-between items-center w-full p-2`}>
        <div className={`flex items-center justify-between`}>
          <span
            className={`text-[#5776a5] text-3xl ${
              discountPercentage && "line-through"
            }`}
          >
            {price} {t(currencySymbol)}
          </span>
          {/* <div className={`flex items-center`}>
            <AiOutlineShoppingCart
              className={`text-[#5776a5] text-2xl font-medium duration-300 cursor-pointer hover:text-[#3a4f6e] mr-2`}
            />
            <ShareLink />
          </div> */}
        </div>

        {discountPercentage && (
          <div className={`flex justify-between items-center w-full p-2`}>
            <span className={` text-3xl `}>
              {priceAfterDiscount} {t(currencySymbol)}
            </span>
            <span className={`text-green-500 text-3xl`}>
              {discountPercentage} Off
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
