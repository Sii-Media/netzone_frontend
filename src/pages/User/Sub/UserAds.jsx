import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import AdCard from "../../../components/UI/AdCard";
import MainSection from "../../../components/UI/MainSection";
import Card from "../../../components/UI/Card";

const UserAds = () => {
  const data = useRouteLoaderData("user");
  console.log(data.userAds);
  return (
    <MainSection className={`w-full md:w-[700px] mx-auto`}>
      <ul
        className={`flex justify-between flex-wrap w-full mx-auto [&>*]:mb-4`}
      >
        {data.data.userType === "user" ? (
          data.userAds.length > 0 ? (
            data.userAds.map((ele) => (
              <Card
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
              classNameHight={`h-[9rem]`}
              className={`!mr-0 mb-4`}
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
