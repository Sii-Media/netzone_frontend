import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainSection from "../../components/UI/MainSection";
import AdCard from "../../components/UI/AdCard";
import { getCurrencySymbol } from "../../funcs/Currency";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const OneTypeDealsListPage = () => {
  const { message, results } = useLoaderData();
  console.log(results);
  console.log(message);
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const dealBuyHandler = (e) => {
    if (calculateDays > 0) {
      window.localStorage.setItem(
        "dealFinalPrice",
        JSON.stringify(
          +e.target.getAttribute("currentPrice") +
            (+e.target.getAttribute("currentPrice") * 5) / 100
        )
      );
      window.location.replace(window.location.href + "/paymentgateway");
    } else {
      window.alert("The Deal Time Has Been Finished");
    }
  };
  const calculateDays = (startDateEle, endDateEle) => {
    const startDate = new Date(startDateEle);
    const endDate = new Date(endDateEle);

    // Calculate the time difference in milliseconds
    const timeDifference = endDate - startDate;

    // Calculate the remaining days
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return remainingDays;
  };
  const { t } = useTranslation();
  return (
    <MainSection className={`!mt-52 md:!mt-24`}>
      {!results && (
        <p
          className={`h-[calc(100vh-100px)] flex justify-center items-center text-red-500 text-2xl font-bold`}
        >
          {message}
        </p>
      )}
      {results && (
        <ul>
          {results.map((ele) => (
            <li className={`flex flex-col items-center w-full mb-4`}>
              <Link to={ele._id}>
                <div className={`p-2`}>
                  <h2 className={`text-[#5776a5] text-2xl mb-2`}>{ele.name}</h2>
                </div>
                <div className={`flex-col md:flex`}>
                  <div
                    className={`p-2 bg-[#5776a5] bg-opacity-20 rounded-lg mr-2`}
                  >
                    <img
                      src={ele.imgUrl}
                      alt={ele.name}
                      className={`w-96 rounded-md`}
                    />
                  </div>
                  <div>
                    <h3 className={`underline text-xl mb-2`}>
                      {ele.companyName}
                    </h3>
                    <p className={`text-[#5776a5] mb-2`}>
                      Price before :{" "}
                      <span className={`text-black text-base font-bold`}>
                        {ele.prevPrice} {t(currencySymbol)}
                      </span>{" "}
                    </p>
                    <p className={`text-[#5776a5] mb-2`}>
                      Current Price :{" "}
                      <span className={`text-black text-base font-bold`}>
                        {ele.currentPrice} {t(currencySymbol)}
                      </span>
                    </p>
                    <p className={`text-gray-500 mb-2`}>
                      The deal is valid until :{" "}
                      <span>{ele.endDate.slice(0, 10)}</span>
                    </p>
                    <p className={`text-[#5776a5] mb-2`}>
                      Remaining Days :{" "}
                      <span>{calculateDays(ele.startDate, ele.endDate)}</span>
                    </p>
                  </div>
                </div>
              </Link>
              <button
                onClick={dealBuyHandler}
                currentPrice={ele.currentPrice}
                className={`self-stretch bg-[#5776a5] text-white border-2 border-[#5776a5] w-1/3 mx-auto mt-4 rounded-lg text-lg hover:bg-transparent hover:text-[#5776a5] duration-300`}
              >
                Buy Now
              </button>
            </li>
          ))}
        </ul>
      )}
    </MainSection>
  );
};

export default OneTypeDealsListPage;
export const oneTypeDealsListPageLoader = async ({ params }) => {
  const dealsType = params.dealsType;
  const currency = params.currency;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  if (dealsType === "aircraft") {
    const response = await fetch(
      baseUrl +
        `/deals/dealsByCat?country=${currency}&category=الطائرات المدنية والخاصة الجديدة و المستخدمة`
    );
    const data = await response.json();
    return data;
  }
  if (dealsType === "cars") {
    const response = await fetch(
      baseUrl +
        `/deals/dealsByCat?country=${currency}&category=السيارات، الجديدة و المستخدمة`
    );
    const data = await response.json();
    return data;
  }
  if (dealsType === "tenders") {
    const response = await fetch(
      baseUrl +
        `/deals/dealsByCat?country=${currency}&category=المناقصات الفردية`
    );
    const data = await response.json();
    return data;
  }
  if (dealsType === "shops") {
    const response = await fetch(
      baseUrl + `/deals/dealsByCat?country=${currency}&category=محلات نشطة`
    );
    const data = await response.json();
    return data;
  }
  if (dealsType === "boats and vessels") {
    const response = await fetch(
      baseUrl +
        `/deals/dealsByCat?country=${currency}&category=القوارب والسفن المدنية والخاصة والمستخدمة`
    );
    const data = await response.json();
    return data;
  }
  if (dealsType === "Real Estate") {
    const response = await fetch(
      baseUrl + `/deals/dealsByCat?country=${currency}&category=العقارات`
    );
    const data = await response.json();
    return data;
  }
  if (dealsType === "building material") {
    const response = await fetch(
      baseUrl + `/deals/dealsByCat?country=${currency}&category=مواد بناء`
    );
    const data = await response.json();
    return data;
  }
  if (dealsType === "scrap") {
    const response = await fetch(
      baseUrl + `/deals/dealsByCat?country=${currency}&category=سكراب`
    );
    const data = await response.json();
    return data;
  }
  if (dealsType === "infrastructure material") {
    const response = await fetch(
      baseUrl + `/deals/dealsByCat?country=${currency}&category=مواد بناء تحتية`
    );
    const data = await response.json();
    return data;
  }
};
