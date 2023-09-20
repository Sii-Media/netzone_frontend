import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import MainSection from "../UI/MainSection";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";

const DepartmentAsAGridComp = () => {
  const data = useLoaderData();

  const currency = useSelector((state) => state.currency.selectedCurrency);
  const [searchedText, setSearchedText] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [condition, setCondition] = useState("all");
  const typeToHeadingMap = {
    deals: "Deals",
    cars: "Cars",
    planes: "Planes",
    realEstate: "Real Estate",
  };

  const searchedTextHandler = (e) => {
    setSearchedText(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  let filteredResults = [];

  if (data.data) {
    if (data.type === "realEstate") {
      filteredResults = data.data.filter((ele) =>
        ele.title.toLowerCase().includes(searchedText.toLowerCase())
      );
    } else if (data.data.results) {
      if (data.type === "cars") {
        filteredResults = data.data.results.filter((ele) => {
          const lowerCaseName = ele.name.toLowerCase();
          const lowerCaseOwner = ele.creator.username.toLowerCase();
          const meetsSearchCriteria =
            lowerCaseName.includes(searchedText.toLowerCase()) ||
            lowerCaseOwner.includes(searchedText.toLowerCase());

          const meetsPriceRangeCriteria =
            ele.price >= minPrice && ele.price <= maxPrice;

          const meetsConditionCriteria =
            condition === "all" || ele.type.toLowerCase() === condition;

          return (
            meetsSearchCriteria &&
            meetsPriceRangeCriteria &&
            meetsConditionCriteria
          );
        });
      } else {
        filteredResults = data.data.results.filter((ele) =>
          ele.name.toLowerCase().includes(searchedText.toLowerCase())
        );
      }
    }
  }

  const resultItems = filteredResults.map((ele) => (
    <li className={`mb-4`} key={ele._id}>
      <Card
        isMarginRight="mr-0"
        userBoxClassName={`bg-gradient-to-b from-slate-400 via-transparent to-transparent`}
        imgSrc={ele.imageUrl || ele.imgUrl}
        imgAlt={ele.name || ele.title}
        title={ele.name || ele.title}
        textSize={"text-xl"}
        path={
          data.type === "cars" ||
          data.type === "planes" ||
          data.type === "realEstate"
            ? ele._id
            : `${ele.name}/${currency}`
        }
      />
    </li>
  ));
  const { t } = useTranslation(); 
  return (
    <MainSection className={`!mt-56 md:!mt-24 mb-2 min-h-[calc(100vh-100px)]`}>
      <div>
        <h1 className={`text-3xl font-semibold text-center mb-4`}>
          {typeToHeadingMap[data.type]}
        </h1>
      </div>
      <div className={`flex justify-center items-center mt-2 mb-4`}>
        <label className={`text-2xl text-[#5776a5] mr-2`}>Search : </label>{" "}
        <input
          className={`rounded-md border border-[#5776a5] p-1 w-32 outline-none md:mr-2`}
          type="text"
          placeholder={`${t("Filter your preferences")}...`}
          value={searchedText}
          onChange={searchedTextHandler}
        />
      </div>
      {(data.type === "cars" || data.type === "planes") && (
        <div className="mb-4">
          <div
            className={`flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center`}
          >
            <div
              className={`flex md:block justify-between items-center  w-full md:w-auto mb-2 md:mb-0`}
            >
              <label className={`text-lg text-[#5776a5] mr-2`}>
                Min Price:
              </label>
              <input
                className={`rounded-md border border-[#5776a5] p-1 w-32 outline-none md:mr-2`}
                type="number"
                min={0}
                max={1000000}
                value={minPrice}
                onChange={handleMinPriceChange}
              />
            </div>
            <div
              className={`flex md:block justify-between items-center  w-full md:w-auto mb-2 md:mb-0`}
            >
              <label className={`text-lg text-[#5776a5] mr-2`}>
                Max Price:
              </label>
              <input
                className={`rounded-md border border-[#5776a5] p-1 w-32 outline-none md:mr-2`}
                type="number"
                min={0}
                max={1000000}
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
            <div
              className={`flex md:block justify-between items-center  w-full md:w-auto mb-2 md:mb-0`}
            >
              <label className={`text-lg text-[#5776a5] mr-2`}>
                Condition:
              </label>
              <select
                className="rounded-md border border-[#5776a5] p-1 w-20 outline-none mr-2"
                value={condition}
                onChange={handleConditionChange}
              >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>
          </div>
        </div>
      )}
      <ul
        className={`flex  justify-between  flex-row items-center md:items-start flex-wrap w-full md:w-[calc(18rem*2+3rem)] lg:w-[calc(18rem*3+5rem)] mx-auto [&>*]:mb-4`}
      >
        {resultItems}
      </ul>
    </MainSection>
  );
};

export default DepartmentAsAGridComp;
