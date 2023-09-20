import React, { useState } from "react";
import RatingSystem from "../UI/RatingSystem";
import ShareLink from "../UI/ShareLink";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import MainSection from "../UI/MainSection";
import { Link, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrencySymbol } from "../../funcs/Currency";
import { useTranslation } from "react-i18next";
const PlaneDetailsComp = () => {
  const { results } = useLoaderData();

  const [heart, setHeart] = useState(false);
  const handleHeartState = () => {
    setHeart(!heart);
  };
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const { t } = useTranslation();
  return (
    <MainSection className={`!mt-52 md:!mt-24 w-[90%] md:w-[70%] mx-auto`}>
      <div className={`flex flex-col`}>
        <div className={`flex items-center`}>
          <div className={`mr-4 p-1 bg-[#5776a5] bg-opacity-20 rounded-lg`}>
            <img
              src={results.imageUrl}
              alt={results.name}
              className={`w-[30rem] rounded-sm`}
            />
          </div>
          <div className={`flex flex-col p-2`}>
            <div className={`flex flex-col`}>
              <p className={`text-3xl font-bold mb-4`}>{results.name}</p>
              <p className={`text-xl font-medium mb-4`}>
                {results.description}
              </p>
            </div>
            <div>
              <h2 className={`text-2xl mb-4 text-[#5776a5]`}>
                {results.price.toLocaleString()} {t(currencySymbol)}
              </h2>
            </div>
            <div>
              {/* <div className={`mb-4`}> */}
              {/* <RatingSystem value={ratingValue} /> */}
              {/* <span className={`ml-2 text-gray-600`}> */}
              {/* ({totalRatings}Reviews) */}
              {/* </span> */}
              {/* </div> */}
              <div className={`flex justify-between items-center`}>
                <ShareLink />

                {/* {!heart ? (
                  <AiOutlineHeart
                    className={`text-3xl text-red-500 cursor-pointer`}
                    onClick={handleHeartState}
                  />
                ) : (
                  <AiFillHeart
                    className={`text-3xl text-red-500 cursor-pointer`}
                    onClick={handleHeartState}
                  />
                )} */}
              </div>
              <div className={`mt-4 flex items-center justify-center`}>
                <button
                  className={`p-1 bg-[#5776a5] text-white w-28 rounded-2xl mr-2 hover:text-[#5776a5] hover:bg-transparent duration-300 border border-[#5776a5]`}
                >
                  Call
                </button>
                <Link
                  to="/chats"
                  className={`p-1 bg-[#5776a5] text-white w-28 rounded-2xl mr-2 hover:text-[#5776a5] hover:bg-transparent duration-300 border border-[#5776a5]`}
                >
                  Chat
                </Link>
                <button
                  className={`p-1 bg-[#5776a5] text-white w-36 rounded-2xl hover:text-[#5776a5] hover:bg-transparent duration-300 border border-[#5776a5]`}
                >
                  Price Suggestion
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-8`}>
          <ul className={`flex p-2 bg-[#5776a5] bg-opacity-20 rounded-xl`}>
            <li>
              <p>No Photos</p>
            </li>

            {results.carImages.length > 0 &&
              results.carImages.map((ele, i) => (
                <li key={i} className={`bg-white rounded-lg mr-2`}>
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
                    Replace ShareLink with your actual component
                    <ShareLink />
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className={`mb-8`}>
          <ul className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mt-8`}>
            <li
              className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
            >
              Category :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {results.category}
              </span>
            </li>
            <li
              className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
            >
              Owner :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {results.creator.username}
              </span>
            </li>
            <li
              className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
            >
              Contact Number :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {results.contactNumber}
              </span>
            </li>
            <li
              className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
            >
              Year :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {results.year.slice(0, 4)}
              </span>
            </li>
            <li
              className={`p-2 text-lg font-medium border-b border-gray-700 flex items-center justify-between`}
            >
              Kilometers :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {results.kilometers}
              </span>
            </li>
            <li
              className={`p-2 text-lg font-medium border-b border-gray-700 flex items-center justify-between`}
            >
              Address :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {results.location}
              </span>
            </li>
            <li
              className={`p-2 text-lg font-medium flex items-center justify-between`}
            >
              Guarantee :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {results.guarantee ? "Applied" : "N/A"}
              </span>
            </li>{" "}
          </ul>
          <div className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mt-8`}>
            <p className={`text-xl font-semibold mb-2`}>Description :</p>
            <p>{results.description}</p>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default PlaneDetailsComp;
