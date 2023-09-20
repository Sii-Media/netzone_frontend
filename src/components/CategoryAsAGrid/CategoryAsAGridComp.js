import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../UI/MainSection";
import ProductDetailsCard from "../UI/ProductDetilesCard/ProductDetailsCard";

const ProductCard = ({ ele }) => (
  <li className={`p-1 rounded-md bg-gray-100`} key={ele._id}>
    <ProductDetailsCard
      condition={
        ele.condition === "new" ? "New" : ele.condition === "used" ? "Used" : ""
      }
      path={ele._id}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      title={ele.name}
      price={ele.price}
      description={ele.description}
      discountPercentage={ele.discountPercentage}
      priceAfterDiscount={ele.priceAfterDiscount}
    />
  </li>
);

const CategoryAsAGridComp = () => {
  const { message, results } = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [condition, setCondition] = useState(""); // "new", "used", or ""

  let content;

  if (message === "success") {
    if (results.length > 0) {
      // Apply filters to the results
      const filteredResults = results.filter(
        (ele) =>
          ele.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          ele.price >= minPrice &&
          ele.price <= maxPrice &&
          (condition === "" || ele.condition === condition)
      );

      if (filteredResults.length > 0) {
        content = filteredResults.map((ele) => <ProductCard ele={ele} />);
      } else {
        content = <p>No matching results found</p>;
      }
    } else {
      content = <p>No Data Found</p>;
    }
  } else {
    content = (
      <p
        className={`w-full min-h-[calc(100vh-200px)] flex justify-center items-center text-lg font-bold`}
      >
        Sorry, No Data found!
      </p>
    );
  }

  return (
    <MainSection className={`!mt-56 md:!mt-24 mb-2 min-h-[calc(100vh-100px)]`}>
      <div className={`flex justify-center items-center mt-2 mb-4`}>
        <label className={`text-2xl text-[#5776a5] mr-2`}>Search : </label>{" "}
        <input
          className={`rounded-md border border-[#5776a5] p-1 w-52 outline-none`}
          type="text"
          placeholder="Search By Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center`}
        >
          <div
            className={`flex md:block justify-between items-center  w-full md:w-auto mb-2 md:mb-0`}
          >
            <label className="text-lg text-[#5776a5] mr-2">Min Price:</label>
            <input
              className="rounded-md border border-[#5776a5] p-1 w-32 outline-none mr-2"
              type="number"
              min={0}
              max={1000000}
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
          </div>
          <div
            className={`flex md:block justify-between items-center  w-full md:w-auto mb-2 md:mb-0`}
          >
            <label className="text-lg text-[#5776a5] mr-2">Max Price:</label>
            <input
              className="rounded-md border border-[#5776a5] p-1 w-32 outline-none mr-2"
              type="number"
              min={0}
              max={1000000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
          <div
            className={`flex md:block justify-between items-center  w-full md:w-auto mb-2 md:mb-0`}
          >
            <label className="text-lg text-[#5776a5] mr-2">Condition:</label>
            <select
              className="rounded-md border border-[#5776a5] p-1 w-20 outline-none mr-2"
              value={condition}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            >
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
        </div>
      </div>

      <ul
        className={`flex justify-between flex-col md:flex-row items-center md:items-start flex-wrap w-full md:w-[calc(18rem*2+3rem)] lg:w-[calc(18rem*3+5rem)] mx-auto [&>*]:mb-4`}
      >
        {content}
      </ul>
    </MainSection>
  );
};

export default CategoryAsAGridComp;
