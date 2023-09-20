import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";

const LegalAdvice = () => {
  const data = useLoaderData();
  console.log(data);
  const [content, setContent] = useState();
  useEffect(() => {
    const language = window.localStorage.getItem("i18nextLng");

    setContent(
      language === "en"
        ? data.results[0].textEn.replace(/•/g, "\n•")
        : data.results[0].text.replace(/•/g, "\n•")
    );
  }, [data.results]);

  return (
    <MainSection className={`!mt-52 md:!mt-24 `}>
      <h2 className={`text-2xl text-center text-[#5776a5] font-bold mb-4`}>
        Privacy Policy
      </h2>
      <>{content}</>
    </MainSection>
  );
};

export default LegalAdvice;
export const legalAdviceLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/legalAdvices`);
  const data = await response.json();
  return data;
};
