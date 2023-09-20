import React, { useState } from "react";
import RatingSystem from "../RatingSystem";
import ShareLink from "../ShareLink";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import MainSection from "../MainSection";
import { getCurrencySymbol } from "../../../funcs/Currency";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductDetailsPageCard = ({
  id,
  title,
  description,
  imgSrc,
  imgAlt,
  Price,
  totalRatings,
  ratingValue,
  imgs,
  quantity,
  owner,
  ownerType,
  condition,
  guarantee,
  category,
  isService,
  ishidden,
}) => {
  const [heart, setHeart] = useState(false);

  // Get the existing cart items from local storage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const handleHeartState = () => {
    setHeart(!heart);
  };

  const addToCartHandler = () => {
    // Create the item object with necessary information
    const item = {
      id,
      title,
      imgSrc,
      Price,
      owner,
      ownerType,
      quantity: 1, // You can adjust this as needed
    };

    // Add the item to the cartItems array
    cartItems.push(item);

    // Save the updated cart items back to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.alert("Item has been Added");
    // calculate the lastTotalPrice of every item in cartItems here before reloading and set lastTotalPrice item in the localStorage
    window.location.reload();
  };
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const { t } = useTranslation();
  return (
    <MainSection className={`!mt-52 md:!mt-24 w-[90%] md:w-[70%] mx-auto`}>
      <div id={id} className={`flex flex-col`}>
        <div className={`flex flex-col lg:flex-row`}>
          <div
            className={`mr-4 p-1 bg-[#5776a5] bg-opacity-20 rounded-lg self-start`}
          >
            <img src={imgSrc} alt={imgAlt} className={`w-full rounded-sm`} />
          </div>
          <div
            className={`flex flex-col p-2 w-full text-center md:text-left lg:w-[50%] h-1/2`}
          >
            <div className={`flex flex-col`}>
              <p className={`text-3xl font-bold mb-4 text-center`}>{title}</p>
              <p className={`text-xl font-medium mb-4 h-[50%] overflow-hidden`}>
                {description}
              </p>
            </div>
            <div>
              <h2 className={`text-2xl mb-4 text-[#5776a5]`}>
                {Price && Price.toLocaleString()} {Price && t(currencySymbol)}
              </h2>
            </div>
            <div>
              <div className={`mb-4 flex flex-col items-center justify-center`}>
                <RatingSystem value={ratingValue} />
                <span className={`ml-2 text-gray-600`}>
                  ({totalRatings}Reviews)
                </span>
                <div className={`block md:hidden`}>
                  <Link
                    to="suggestPrice"
                    className={`block px-4 py-2 mt-2 bg-[#5776a5] rounded-2xl text-sm md:text-base text-white font-medium border-2 duration-300 hover:text-[#5776a5] hover:bg-transparent hover:border-[#5776a5]`}
                  >
                    Suggest A Price
                  </Link>
                </div>
              </div>
              <div className={`flex justify-between items-center `}>
                <ShareLink />

                {!heart ? (
                  <AiOutlineHeart
                    className={`text-3xl text-red-500 cursor-pointer`}
                    onClick={handleHeartState}
                  />
                ) : (
                  <AiFillHeart
                    className={`text-3xl text-red-500 cursor-pointer`}
                    onClick={handleHeartState}
                  />
                )}
                {!isService && (
                  <button
                    onClick={addToCartHandler}
                    className={`bg-[#5776a5] ${
                      ishidden && "hidden"
                    } text-lg text-white px-1 rounded-lg border-2 border-[#5776a5] hover:text-[#5776a5]  hover:bg-transparent duration-300`}
                  >
                    Add to Cart
                  </button>
                )}

                <div className={`hidden md:block`}>
                  <Link
                    to="suggestPrice"
                    className={`block px-2 py-1 bg-[#5776a5] rounded-2xl text-sm md:text-base text-white font-medium border-2 duration-300 hover:text-[#5776a5] hover:bg-transparent hover:border-[#5776a5]`}
                  >
                    Suggest A Price
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-8`}>
          <ul
            className={`grid grid-cols-2 md:grid-cols-4 p-2 bg-[#5776a5] bg-opacity-20 rounded-xl`}
          >
            {imgs.map((ele, i) => (
              <li key={i} className={`bg-white rounded-lg mr-2 mb-2`}>
                <div
                  className={`h-40 w-36 overflow-hidden flex items-center justify-center`}
                >
                  <img
                    src={ele}
                    alt={i}
                    className={`w-32 rounded-xl object-contain`}
                  />
                </div>
                <div className={`py-2`}>
                  <ShareLink />
                  {/* Replace ShareLink with your actual component */}
                  {/* <ShareLink /> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`mb-8`}>
          <ul className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mt-8`}>
            <li className={`p-2 border-b border-gray-700 text-lg font-medium`}>
              Category :{" "}
              <span className={`text-base text-gray-700`}>{category}</span>
            </li>
            <li className={`p-2 border-b border-gray-700 text-lg font-medium`}>
              Owner : <span className={`text-base text-gray-700`}>{owner}</span>
            </li>
            <li className={`p-2 border-b border-gray-700 text-lg font-medium`}>
              Quantity :{" "}
              <span className={`text-base text-gray-700`}>
                {quantity ? quantity : 1}
              </span>
            </li>
            <li className={`p-2 border-b border-gray-700 text-lg font-medium`}>
              Condition :{" "}
              <span className={`text-base text-gray-700`}>{condition}</span>
            </li>
            <li className={`p-2 text-lg font-medium`}>
              Guarantee :{" "}
              <span className={`text-base text-gray-700`}>
                {guarantee ? guarantee : "Not Applied"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </MainSection>
  );
};

export default ProductDetailsPageCard;
