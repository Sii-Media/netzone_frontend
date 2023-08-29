import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../components/UI/MainSection";

const DealDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection className={`!mt-52 md:!mt-24 mb-4`}>
      <div
        className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-lg flex flex-col md:flex-row`}
      >
        <img
          src={data.imgUrl}
          alt={data.name}
          className={`rounded-md w-[35rem]`}
        />
        <div className={`w-full flex flex-col`}>
          <ul className={`p-2 w-full`}>
            <li
              className={`text-2xl text-[#5776a5] mb-2 border-b border-[#5776a5] pb-1`}
            >
              Date Title:{" "}
              <span className={`text-black text-xl`}>{data.name}</span>
            </li>
            <li
              className={`text-2xl text-[#5776a5] mb-2 border-b border-[#5776a5] pb-1`}
            >
              Vendor Name:{" "}
              <span className={`text-black text-xl`}>{data.companyName}</span>
            </li>
            <li
              className={`text-2xl text-[#5776a5] mb-2 border-b border-[#5776a5] pb-1`}
            >
              Deal Start Date:{" "}
              <span className={`text-black text-xl`}>
                {data.startDate.slice(0, 10)}
              </span>
            </li>
            <li
              className={`text-2xl text-[#5776a5] mb-2 border-b border-[#5776a5] pb-1`}
            >
              Deal End Date:{" "}
              <span className={`text-black text-xl`}>
                {data.endDate.slice(0, 10)}
              </span>
            </li>
            <li
              className={`text-2xl text-[#5776a5] mb-2 border-b border-[#5776a5] pb-1`}
            >
              Price Before:{" "}
              <span className={`text-black text-xl`}>{data.prevPrice}</span>
            </li>
            <li className={`text-2xl text-[#5776a5] mb-2`}>
              Current Price:{" "}
              <span className={`text-black text-xl`}>{data.currentPrice}</span>
            </li>
          </ul>
          <button
            className={`bg-[#5776a5] w-[90%] mx-auto border-2 border-[#5776a5] rounded-xl text-white hover:bg-transparent hover:text-[#5776a5] duration-300`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </MainSection>
  );
};

export default DealDetails;
export const dealDetailsLoader = async ({ params }) => {
  const dealId = params.dealId;
  const response = await fetch(`https://net-zoon.onrender.com/deals/${dealId}`);
  const data = await response.json();
  return data;
};
