import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../UI/MainSection";
import ShareLink from "../UI/ShareLink";
import { getCurrencySymbol } from "../../funcs/Currency";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const RealEstateDetailsComp = () => {
  const data = useLoaderData();

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
              src={data.imageUrl}
              alt={data.title}
              className={`w-[30rem] rounded-sm`}
            />
          </div>
          <div className={`flex flex-col p-2`}>
            <div className={`flex flex-col`}>
              <p className={`text-3xl font-bold mb-4`}>{data.title}</p>
              {/* <p className={`text-xl font-medium mb-4`}>
                {results.description}
              </p> */}
            </div>
            <div>
              <h2 className={`text-2xl mb-4 text-[#5776a5]`}>
                {data.price.toLocaleString()} {t(currencySymbol)}
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
                <button
                  className={`p-1 bg-[#5776a5] text-white w-36 rounded-2xl hover:text-[#5776a5] hover:bg-transparent duration-300 border border-[#5776a5]`}
                >
                  Price Suggestion
                </button>
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
              <div className={`mt-4 flex items-center justify-center`}></div>
            </div>
          </div>
        </div>
        <div className={`mt-8`}>
          <ul className={`flex p-2 bg-[#5776a5] bg-opacity-20 rounded-xl`}>
            {/* <li>
              <p>No Photos</p>
            </li> */}

            {data.images.length > 0 &&
              data.images.map((ele, i) => (
                <li key={i} className={`bg-white rounded-lg mr-2`}>
                  <div className={` flex items-center justify-center p-2 h-44`}>
                    <img src={ele} alt={i} className={`h-40 rounded-xl`} />
                  </div>
                  <div className={`py-2`}>
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
              Owner :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {data.createdBy.username}
              </span>
            </li>
            <li
              className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
            >
              Area :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {data.area}
              </span>
            </li>
            <li
              className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
            >
              Bathrooms :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {data.bathrooms}
              </span>
            </li>
            <li
              className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
            >
              Bedrooms :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {data.bedrooms}
              </span>
            </li>
            <li
              className={`p-2 text-lg font-medium flex items-center justify-between`}
            >
              Address :{" "}
              <span className={`text-base text-gray-700 w-[40%]`}>
                {data.location}
              </span>
            </li>
          </ul>
          <div className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mt-8`}>
            <p className={`text-xl font-semibold mb-2`}>Description :</p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default RealEstateDetailsComp;
