import React, { useState } from "react";
import RatingSystem from "../RatingSystem";
import ShareLink from "../ShareLink";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import MainSection from "../MainSection";
const ProductDetailsPageCard = ({
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
  condition,
  guarantee,
  category,
}) => {
  const [heart, setHeart] = useState(false);
  const handleHeartState = () => {
    setHeart(!heart);
  };
  return (
    <MainSection className={`!mt-52 md:!mt-24 w-[90%] md:w-[70%] mx-auto`}>
      <div className={`flex flex-col`}>
        <div className={`flex`}>
          <div className={`mr-4 p-1 bg-[#5776a5] bg-opacity-20 rounded-lg`}>
            <img src={imgSrc} alt={imgAlt} className={`w-[30rem] rounded-sm`} />
          </div>
          <div className={`flex flex-col p-2`}>
            <div className={`flex flex-col`}>
              <p className={`text-3xl font-bold mb-4`}>{title}</p>
              <p className={`text-xl font-medium mb-4`}>{description}</p>
            </div>
            <div>
              <h2 className={`text-2xl mb-4 text-[#5776a5]`}>{Price}</h2>
            </div>
            <div>
              <div className={`mb-4`}>
                <RatingSystem value={ratingValue} />
                <span className={`ml-2 text-gray-600`}>
                  ({totalRatings}Reviews)
                </span>
              </div>
              <div className={`flex justify-between items-center w-[21%]`}>
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
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-8`}>
          <ul className={`flex p-2 bg-[#5776a5] bg-opacity-20 rounded-xl`}>
            {imgs.map((ele, i) => (
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
