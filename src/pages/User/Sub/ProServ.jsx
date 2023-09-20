import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";
import Card from "../../../components/UI/Card";
import { getCurrencySymbol } from "../../../funcs/Currency";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ProServ = () => {
  const data = useRouteLoaderData("user");
  console.log(data.proServData);
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const { t } = useTranslation();
  return (
    <MainSection className={`w-full md:w-[80%] mx-auto`}>
      <ul
        className={`grid grid-cols-2 place-items-center md:grid-cols-3 [&>*]:mb-4 [&>*]:mr-4`}
      >
        {data.data.userType === "delivery_company" ? (
          data.proServData.length > 0 ? (
            data.proServData.map((ele) => (
              <li
                className={`shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 mb-8 rounded-lg [&>*]:mb-2`}
              >
                <>
                  <h2 className={`text-[#5776a5] text-2xl font-semibold`}>
                    {ele.title}
                  </h2>
                  <p className={`text-gray-600 text-xl`}>{ele.description}</p>
                  <div>
                    <span>From: {ele.from}</span>
                    <span>To: {ele.to}</span>
                  </div>
                  <p className={`text-green-600`}>
                    {ele.price.toLocaleString()} {t(currencySymbol)}
                  </p>
                </>
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
              isMarginRight={`!mr-0`}
              path={ele._id}
              className={`!w-36 !h-36 md:!w-[15rem] md:!h-[15rem] 2xl:!w-52 2xl:!h-52 flex self-center`}
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
