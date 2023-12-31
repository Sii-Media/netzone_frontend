import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrencySymbol } from "../../funcs/Currency";
import { useTranslation } from "react-i18next";

const Card = ({
  path,
  imgSrc,
  imgAlt,
  title,
  isCarousel,
  w,
  className,
  price,
  imgStyles,
  userBoxClassName,
  textSize,
  isMarginRight,
  onClick,
}) => {
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const {t} = useTranslation()

  return (
    <>
      <Link
        onClick={onClick}
        to={path}
        className={`block rounded-xl relative overflow-hidden ${
          isMarginRight ? isMarginRight : "mr-6"
        }  ${isCarousel ? "w-24 h-24" : "w-36 h-36"}  ${
          isCarousel ? w || "md:w-52 md:h-52" : "md:w-64 md:h-64"
        } ${className}`}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`object-cover w-full h-full ${imgStyles}`}
        />
        <span
          className={`absolute ${
            isCarousel ? "py-0 px-0" : "py-2 px-1"
          } md:py-2 md:px-2 bottom-0 w-full flex justify-center items-center flex-col bg-[#5776a5] bg-opacity-[80%] text-white text-center ${userBoxClassName}`}
        >
          <p
            className={`${
              textSize ? textSize : "text-xs"
            } md:text-xl md:font-semibold overflow-hidden w-[90%] truncate`}
          >
            {title}
          </p>
          <p
            className={`text-[#85bb65] text-lg font-bold px-4 rounded-lg bg-white`}
          >
            {price && price.toLocaleString()} {price && t(currencySymbol)}
          </p>
        </span>
      </Link>
    </>
  );
};

export default Card;
