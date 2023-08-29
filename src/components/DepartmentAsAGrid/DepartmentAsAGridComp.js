import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import MainSection from "../UI/MainSection";
import Card from "../UI/Card";

const DepartmentAsAGridComp = () => {
  const data = useLoaderData();
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const [searchedText, setSearchedText] = useState("");
  console.log(data);
  const typeToHeadingMap = {
    deals: "Deals",
    cars: "Cars",
    planes: "Planes",
    realEstate: "Real Estate",
  };

  const searchedTextHandler = (e) => {
    setSearchedText(e.target.value);
  };

  let filteredResults = [];

  if (data.data) {
    if (data.type === "realEstate") {
      filteredResults = data.data.filter((ele) =>
        ele.title.toLowerCase().includes(searchedText.toLowerCase())
      );
    } else if (data.data.results) {
      filteredResults = data.data.results.filter((ele) =>
        ele.name.toLowerCase().includes(searchedText.toLowerCase())
      );
    }
  }

  const resultItems = filteredResults.map((ele) => (
    <li className={`mb-4`} key={ele._id}>
      <Card
        userBoxClassName={`bg-gradient-to-b from-slate-400 via-transparent to-transparent`}
        imgSrc={ele.imageUrl || ele.imgUrl}
        imgAlt={ele.name || ele.title}
        title={ele.name || ele.title}
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

  return (
    <MainSection className={`!mt-56 md:!mt-24 mb-2 min-h-[calc(100vh-100px)]`}>
      <div>
        <h1 className={`text-3xl font-semibold text-center mb-4`}>
          {typeToHeadingMap[data.type]}
        </h1>
      </div>
      <div className={`flex justify-center items-center mt-2 mb-2`}>
        <label className={`text-2xl text-[#5776a5] mr-2`}>Search : </label>{" "}
        <input
          className={`rounded-md border border-[#5776a5] p-1 w-52 outline-none`}
          type="text"
          placeholder="Filter your preferences..."
          value={searchedText}
          onChange={searchedTextHandler}
        />
      </div>
      <ul
        className={`flex  justify-between flex-row items-center md:items-start flex-wrap w-full md:w-[calc(18rem*2+3rem)] lg:w-[calc(18rem*3+5rem)] mx-auto [&>*]:mb-4`}
      >
        {resultItems}
      </ul>
    </MainSection>
  );
};

export default DepartmentAsAGridComp;
