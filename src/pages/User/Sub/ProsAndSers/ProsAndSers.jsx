import React from "react";
import ProductDetailsPageCard from "../../../../components/UI/ProductDetailsPageCard/ProductDetailsPageCard";
import { useLoaderData } from "react-router-dom";
import RealEstateDetailsComp from "../../../../components/RealEstateDetails/RealEstateDetailsComp";
import ShareLink from "../../../../components/UI/ShareLink";
import MainSection from "../../../../components/UI/MainSection";
import { getCurrencySymbol } from "../../../../funcs/Currency";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ProsAndSers = () => {
  const data = useLoaderData();
  console.log(data);
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const { t } = useTranslation();
  console.log(data.id);
  console.log(data.data);
  return (
    <>
      {data.id ? (
        <>
          {data.id === "real_estate" && (
            <>
              <MainSection
                className={`!mt-52 md:!mt-24 w-[90%] md:w-[70%] mx-auto`}
              >
                <div className={`flex flex-col`}>
                  <div className={`flex items-center`}>
                    <div
                      className={`mr-4 p-1 bg-[#5776a5] bg-opacity-20 rounded-lg`}
                    >
                      <img
                        src={data.data.imageUrl}
                        alt={data.data.title}
                        className={`w-[30rem] rounded-sm`}
                      />
                    </div>
                    <div className={`flex flex-col p-2`}>
                      <div className={`flex flex-col`}>
                        <p className={`text-3xl font-bold mb-4`}>
                          {data.data.title}
                        </p>
                        {/* <p className={`text-xl font-medium mb-4`}>
                {results.description}
              </p> */}
                      </div>
                      <div>
                        <h2 className={`text-2xl mb-4 text-[#5776a5]`}>
                          {data.data.price.toLocaleString()} {t(currencySymbol)}
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
                        <div
                          className={`mt-4 flex items-center justify-center`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className={`mt-8`}>
                    <ul
                      className={`flex p-2 bg-[#5776a5] bg-opacity-20 rounded-xl`}
                    >
                      {/* <li>
              <p>No Photos</p>
            </li> */}

                      {data.data.images.length > 0 &&
                        data.data.images.map((ele, i) => (
                          <li key={i} className={`bg-white rounded-lg mr-2`}>
                            <div
                              className={` flex items-center justify-center p-2 h-44`}
                            >
                              <img
                                src={ele}
                                alt={i}
                                className={`h-40 rounded-xl`}
                              />
                            </div>
                            <div className={`py-2`}>
                              <ShareLink />
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className={`mb-8`}>
                    <ul
                      className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mt-8`}
                    >
                      <li
                        className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
                      >
                        Owner :{" "}
                        <span className={`text-base text-gray-700 w-[40%]`}>
                          {data.data.createdBy.username}
                        </span>
                      </li>
                      <li
                        className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
                      >
                        Area :{" "}
                        <span className={`text-base text-gray-700 w-[40%]`}>
                          {data.data.area}
                        </span>
                      </li>
                      <li
                        className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
                      >
                        Bathrooms :{" "}
                        <span className={`text-base text-gray-700 w-[40%]`}>
                          {data.data.bathrooms}
                        </span>
                      </li>
                      <li
                        className={`p-2 border-b border-gray-700 text-lg font-medium flex items-center justify-between`}
                      >
                        Bedrooms :{" "}
                        <span className={`text-base text-gray-700 w-[40%]`}>
                          {data.data.bedrooms}
                        </span>
                      </li>
                      <li
                        className={`p-2 text-lg font-medium flex items-center justify-between`}
                      >
                        Address :{" "}
                        <span className={`text-base text-gray-700 w-[40%]`}>
                          {data.data.location}
                        </span>
                      </li>
                    </ul>
                    <div
                      className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mt-8`}
                    >
                      <p className={`text-xl font-semibold mb-2`}>
                        Description :
                      </p>
                      <p>{data.data.description}</p>
                    </div>
                  </div>
                </div>
              </MainSection>
            </>
          )}
        </>
      ) : (
        <>
          <ProductDetailsPageCard
            id={data._id}
            title={data.name || data.title}
            isService={data.category && data.category.name ? false : true}
            description={data.description}
            imgSrc={data.imageUrl}
            imgAlt={data.name || data.title}
            Price={data.price}
            totalRatings={data.totalRatings}
            ratingValue={data.averageRating}
            imgs={data.images || data.serviceImageList || data.carImages || []}
            owner={data.owner ? data.owner.username : data.creator.username}
            ownerType={data.owner ? data.owner.userType : data.creator.userType}
            category={data.category ? data.category.name : "Services"}
          />
        </>
      )}
    </>
  );
};

export default ProsAndSers;
export const prosAndSersLoader = async ({ params }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const prodId = params.prodId;
  console.log(prodId);
  const userId = params.userId;
  const responseOfUser = await fetch(baseUrl + `/user/getUser/${userId}`);
  const dataOfUser = await responseOfUser.json();
  const isService = dataOfUser.isService;
  const dataId = dataOfUser._id;
  const userType = dataOfUser.userType;
  console.log(dataId);
  const prodServId = params.prodId;
  if (isService === false || isService === undefined) {
    if (userType === "local_company") {
      const product = await fetch(
        baseUrl + `/departments/getproduct/${prodServId}`
      );
      const data = await product.json();
      console.log(data);
      return data;
    }
    if (userType === "car" || userType === "planes") {
      const product = await fetch(
        baseUrl + `/categories/vehicle/${prodServId}`
      );
      const data = await product.json();
      console.log(data);
      const results = data.results;
      return results;
    }
    if (userType === "user") {
      const product = await fetch(
        baseUrl + `/departments/getproduct/${prodServId}`
      );
      const data = await product.json();
      console.log(data);
      return data;
    }
    if (userType === "real_estate") {
      const product = await fetch(
        baseUrl + `/real-estate/getById/${prodServId}`
      );
      const data = await product.json();
      console.log(data);
      return { id: "real_estate", data: data };
    }
    if (userType === "trader") {
      const product = await fetch(
        baseUrl + `/departments/getproduct/${prodServId}`
      );
      const data = await product.json();
      console.log(data);
      return data;
    }
  } else {
    const product = await fetch(
      baseUrl + `/categories/local-company/get-service/${prodServId}`
    );
    const data = await product.json();
    console.log(data);
    return data;
  }
};
