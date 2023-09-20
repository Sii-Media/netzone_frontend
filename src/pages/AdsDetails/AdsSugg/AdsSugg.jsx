import React from "react";
import MainSection from "../../../components/UI/MainSection";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import { useRef } from "react";

const AdsSugg = () => {
  const priceSuggRef = useRef();
  const data = useLoaderData();

  const { t } = useTranslation();
  const priceSuggHandler = () => {
    if (priceSuggRef.current.value !== "") {
      window.alert("Your Suggested Price Has been Registered, Thanks!");
      // eslint-disable-next-line no-restricted-globals
      history.back();
    } else {
      window.alert("Please Fill the Required Field");
    }
  };
  return (
    <MainSection
      className={`!mt-52 md:!mt-22 min-h-screen  flex items-center flex-col `}
    >
      <div className={`flex flex-col items-center mb-4 w-64`}>
        <img
          src={data.advertisingImage}
          alt={data.advertisingTitle}
          className={`w-full`}
        />
        <div className={`mt-4`}>
          <h2>{data.advertisingTitle}</h2>
        </div>
      </div>
      <div className={`flex flex-col`}>
        <h1 className={`text-xl font-semibold text-[#5776a5] mb-4`}>
          Suggest a Price
        </h1>
        <input
          ref={priceSuggRef}
          required
          type="number"
          className={`border-2 border-[#5776a5] mb-2 p-1 outline-none rounded-xl `}
        />
        <button
          onClick={priceSuggHandler}
          className={`mb-4 self-center border-2 px-4 py-1 border-transparent bg-[#5776a5] text-white duration-300 rounded-2xl hover:border-[#5776a5] hover:bg-transparent hover:text-[#5776a5]`}
        >
          {t("submit")}
        </button>
      </div>
    </MainSection>
  );
};

export default AdsSugg;
export const AdsSuggLoader = async ({ params }) => {
  const adId = params.adId;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/advertisements/${adId}`);
  const data = await response.json();
  return data;
};
