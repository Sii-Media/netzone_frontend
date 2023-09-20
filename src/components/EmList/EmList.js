import React from "react";
import MainSection from "../UI/MainSection";
import { useLoaderData } from "react-router-dom";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";

const EmList = () => {
  const data = useLoaderData();
  const { t } = useTranslation();
  return (
    <MainSection className={`mt-56 md:!mt-24`}>
      <ul
        className={`flex flex-col justify-center md:justify-between md:flex-row items-center md:items-start flex-wrap w-full md:w-[calc(16rem*2+3rem)] lg:w-[calc(16rem*3+5rem)] mx-auto [&>*]:mb-4`}
      >
        {data.govermentalCompanies.map((ele) => (
          <li>
            <Card
              className={`!mb-4 !mr-0`}
              path={ele._id}
              imgSrc={ele.imageUrl}
              imgStyles={`!object-contain`}
              imgAlt={ele.govname}
              title={t(ele.name)}
            />
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default EmList;
