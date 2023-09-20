import React from "react";
import MainSection from "../UI/MainSection";
import { Link, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const FactoryTypes = () => {
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const data = useLoaderData();
  const { t } = useTranslation();
  return (
    <MainSection className={`!mt-56 md:!mt-24`}>
      <ul className={`w-full md:w-[70%] mx-auto`}>
        {data.map((ele) => (
          <li
            className={` bg-gray-300 mb-6 font-bold text-xl hover:text-white duration-300 hover:bg-gray-500 w-full md:w-[70%] mx-auto`}
          >
            <Link
              className={`p-4 block text-center`}
              to={`${ele._id}/${selectedCurrency}`}
            >
              {t(ele.title)}
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default FactoryTypes;
