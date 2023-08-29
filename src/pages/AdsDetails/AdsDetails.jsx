import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../components/UI/MainSection";
import ShareLink from "../../components/UI/ShareLink";
import { CiLocationOn } from "react-icons/ci";
const AdsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection
      className={`!mt-52 md:!mt-28 flex flex-col mx-auto w-[90%] md:w-[70%]`}
    >
      {data.advertisingType === "company" ? (
        <>
          <div className={`flex items-center mb-4 px-2`}>
            <img
              src={data.owner.profilePhoto}
              alt={data.owner.username}
              className={`rounded-full w-12 md:w-16 mr-4`}
            />
            <h2 className={`text-lg md:text-2xl font-bold text-[#5776a5]`}>
              {data.owner.username}
            </h2>
          </div>
          <div
            className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-lg flex items-center flex-col md:flex-row `}
          >
            <img
              src={data.advertisingImage}
              alt={data.advertisingTitle}
              className={`rounded-lg w-72 md:mr-4`}
            />
            <div className={`flex flex-col mb-4 w-full mt-2 md:mt-0`}>
              <div className={`text-4xl font-semibold mb-4`}>
                <h2>{data.advertisingTitle}</h2>
              </div>
              <div
                className={`mb-2 p-2 bg-[#5776a5] bg-opacity-20 rounded-lg mt-2 text-gray-700`}
              >
                <p>{data.advertisingDescription}</p>
              </div>

              <div className={`flex justify-between items-center mb-2 mt-2`}>
                <p className={`text-[#67354F] text-3xl font-bold`}>
                  {data.advertisingPrice}
                </p>
                <ShareLink />
              </div>
              <div
                className={`flex justify-between items-center mb-2 text-xl text-gray-600`}
              >
                <p className={`flex items-center`}>
                  <CiLocationOn className={`mr-2`} />{" "}
                  <span>{data.advertisingLocation}</span>
                </p>

                <p>
                  Number of Viewers : <span>{data.adsViews}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={`mt-4 mb-4`}>
            <h3 className={`text-3xl mb-2`}>Images :</h3>
            <ul className={`bg-[#5776a5] bg-opacity-20 p-2 rounded-lg flex`}>
              {data.advertisingImageList.map((ele, i) => (
                <li>
                  <img src={ele} alt={i} className={`w-32 md:w-40 rounded-md mr-2`} />
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={`flex items-center`}>
            <div className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-lg mr-4`}>
              <img
                src={data.advertisingImage}
                alt={data.advertisingTitle}
                className={`rounded-lg w-80`}
              />
            </div>
            <div>
              <h2 className={`text-2xl font-bold text-[#5776a5] mb-8`}>
                {data.advertisingTitle}
              </h2>
              <div className={`pr-4 flex justify-between items-center mb-4`}>
                <span className={`text-xl font-medium`}>
                  {data.advertisingPrice}
                </span>
                <span>
                  <ShareLink />
                </span>
              </div>
              <p>
                Number of viewers :
                <span className={`ml-2 text-[#5776a5]`}>{data.adsViews}</span>
              </p>
              <div>
                <button>Buy the Product</button>
                <button>Price Suggestion</button>
                <button></button>
              </div>
            </div>
          </div>
          <div className={`mt-8`}>
            <p className={`text-2xl font-bold mb-2`}>Details :</p>
            <ul>
              <li
                className={`text-lg font-medium border-b border-[#5776a5] p-1`}
              >
                Owner : <span>{data.owner.username}</span>
              </li>
              <li
                className={`text-lg font-medium border-b border-[#5776a5] p-1`}
              >
                Category : <span>{data.owner.userType}</span>
              </li>
              <li
                className={`text-lg font-medium border-b border-[#5776a5] p-1`}
              >
                Year : <span>{data.advertisingYear}</span>
              </li>
              <li className={`text-lg font-medium p-1`}>
                Address : <span>{data.advertisingLocation}</span>
              </li>
            </ul>
          </div>
          <div
            className={`flex flex-col mt-2 p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mb-4`}
          >
            Description : <span>{data.advertisingDescription}</span>
          </div>
          <div>
            <p className={`text-2xl font-bold mb-2`}>Images</p>
            <ul
              className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mb-4 flex`}
            >
              {data.advertisingImageList.map((ele, i) => (
                <li
                  className="h-20 rounded-md overflow-hidden mr-2 flex-wrap"
                  key={i}
                >
                  <img src={ele} alt={i} className={`w-36 h-20 object-cover`} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </MainSection>
  );
};

export default AdsDetails;
export const adsDetailsLoader = async ({ params }) => {
  const adId = params.adId;
  const response = await fetch(
    `https://net-zoon.onrender.com/advertisements/${adId}`
  );
  const data = await response.json();
  return data;
};
