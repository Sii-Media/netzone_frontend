import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";
import Card from "../../../components/UI/Card";

const ProServ = () => {
  const data = useRouteLoaderData("user");
  console.log(data.proServData);
  return (
    <MainSection className={`w-full md:w-[600px] mx-auto`}>
      <ul className={`flex flex-wrap justify-between [&>*]:mb-4`}>
        {data.data.userType === "delivery_company" ? (
          data.proServData.length > 0 ? (
            data.proServData.map((ele) => (
              <li
                className={`shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 mb-8 w-full rounded-lg [&>*]:mb-2`}
              >
                <h2 className={`text-[#5776a5] text-2xl font-semibold`}>
                  {ele.title}
                </h2>
                <p className={`text-gray-600 text-xl`}>{ele.description}</p>
                <div>
                  <span>From: {ele.from}</span>
                  <span>To: {ele.to}</span>
                </div>
                <p className={`text-green-600`}>
                  {ele.price}
                  <span>AED</span>
                </p>
              </li>
            ))
          ) : (
            <p className={`w-full flex justify-center items-center text-lg`}>
              No Items Found
            </p>
          )
        ) : data.proServData.length > 0 ? (
          data.proServData.map((ele) => (
            <Card
              className={`!w-40 !h-40`}
              imgSrc={ele.imageUrl}
              imgAlt={ele.title || ele.name}
              title={ele.title || ele.name}
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

export default ProServ;
