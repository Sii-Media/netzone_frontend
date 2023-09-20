import React from "react";
import MainSection from "../../../../components/UI/MainSection";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import { useRef } from "react";

const ProductPriceSugg = () => {
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
      className={`!mt-52 md:!mt-12 min-h-screen  flex items-center flex-col `}
    >
      <div className={`flex flex-col items-center mb-4 w-64`}>
        <img src={data.imageUrl} alt={data.imageUrl} className={`w-full`} />
        <div className={`mt-4`}>
          <h2>{data.name}</h2>
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

export default ProductPriceSugg;
export const productPriceSuggLoader = async ({ params }) => {
  const prodId = params.prodId || params.productId;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/departments/getproduct/${prodId}`);
  const data = await response.json();
  return data;
};
