import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import AdCard from "../../../components/UI/AdCard";
import MainSection from "../../../components/UI/MainSection";
import Card from "../../../components/UI/Card";
import { useSelector } from "react-redux";

const UserAds = () => {
  const data = useRouteLoaderData("user");
  console.log(data.userAds);
  const currency = useSelector((state) => state.currency.selectedCurrency);
  return (
    <MainSection className={`w-full md:w-[80%] mx-auto`}>
      <ul
        className={`grid grid-cols-2 place-items-center md:grid-cols-3 w-full mx-auto [&>*]:mb-4  [&>*]:mr-2`}
      >
        {data.data.userType === "user" ? (
          data.userAds.length > 0 ? (
            data.userAds.map((ele) => (
              <Card
                isMarginRight={`!mr-0`}
                path={`/catagories/${ele.owner.userType}/${currency}/${ele.owner._id}/${ele._id}`}
                imgSrc={ele.imageUrl}
                imgAlt={ele.name}
                title={ele.name}
                price={`${ele.price}$`}
              />
            ))
          ) : (
            <p className={`w-full flex justify-center items-center text-lg`}>
              No Items Found
            </p>
          )
        ) : data.userAds.results.length > 0 ? (
          data.userAds.results.map((ele) => (
            <AdCard
              path={`/advertisements/${ele._id}`}
              classNameHight={`h-[9rem]`}
              className={`!mr-0 mb-4 ]`}
              imgSrc={ele.advertisingImage}
              imgAlt={ele.advertisingTitle}
              first={ele.advertisingTitle}
              second={ele.advertisingDescription}
              third={`Location : ${ele.advertisingLocation}`}
            />
          ))
        ) : (
          <p className={`w-full flex justify-center items-center text-lg`}>
            No Items Found
          </p>
        )}
      </ul>
    </MainSection>
  );
};
export default UserAds;
