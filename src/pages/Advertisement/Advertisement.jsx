import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainSection from "../../components/UI/MainSection";

const Advertisement = () => {
  const { message, results } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Show All");
  const [ownerSearchTerm, setOwnerSearchTerm] = useState("");
  const [showPurchasableOnly, setShowPurchasableOnly] = useState(false);
  const [yearFilter, setYearFilter] = useState("");

  const filteredResults = results.filter(
    (ele) =>
      ele.advertisingTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFilter === "Show All" ||
        ele.advertisingType === selectedFilter) &&
      ele.owner.username
        .toLowerCase()
        .includes(ownerSearchTerm.toLowerCase()) &&
      (!showPurchasableOnly || ele.purchasable) &&
      (yearFilter === "" || ele.advertisingYear === yearFilter)
  );

  return (
    <MainSection
      className={`!mt-52 md:!mt-28 relative min-h-screen overflow-hidden`}
    >
      <h2 className={`text-2xl font-semibold text-center mb-2`}>Advertisement</h2>
      <div className={`flex justify-center items-center mt-2 mb-2`}>
        <label className={`text-2xl text-[#5776a5] mr-2`}>
          Filter by Type:{" "}
        </label>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className={`rounded-md border border-[#5776a5] p-1 outline-none`}
        >
          <option value="Show All">Show All</option>
          <option value="company">Company</option>
          <option value="car">Cars</option>
          <option value="planes">Planes</option>
          <option value="real_estate">Real Estate</option>
          <option value="product">Product</option>
          <option value="service">Service</option>
        </select>
      </div>

      <div className={`flex flex-col absolute left-4`}>
        <div className={`flex items-center mt-2 mb-2 w-72 justify-between`}>
          <label className={`text-lg text-[#5776a5] mr-2`}>Search: </label>{" "}
          <input
            className={`rounded-md border border-[#5776a5] p-1 w-32 outline-none`}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={`flex  items-center mt-2 mb-2 w-72 justify-between`}>
          <label className={`text-lg text-[#5776a5] mr-2`}>
            Search by Owner:{" "}
          </label>{" "}
          <input
            className={`rounded-md border border-[#5776a5] p-1 w-32 outline-none`}
            type="text"
            placeholder="Filter by owner..."
            value={ownerSearchTerm}
            onChange={(e) => setOwnerSearchTerm(e.target.value)}
          />
        </div>

        <div className={`flex items-center mt-2 mb-2 w-72 justify-between`}>
          <label className={`text-lg text-[#5776a5] mr-2`}>
            Filter by Year:{" "}
          </label>{" "}
          <input
            className={`rounded-md border border-[#5776a5] p-1 w-32 outline-none`}
            type="text"
            placeholder="Filter by year..."
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          />
        </div>
        <div className={`flex  items-center mt-2 mb-2 w-72 justify-between`}>
          <label className={`text-lg text-[#5776a5] mr-2`}>
            <input
              type="checkbox"
              checked={showPurchasableOnly}
              onChange={() => setShowPurchasableOnly(!showPurchasableOnly)}
            />
            Purchasable Only
          </label>
        </div>
      </div>

      <ul className={`flex flex-col items-center`}>
        {filteredResults.map((ele) => (
          <li
            key={ele._id}
            className={`w-[90%] md:w-auto p-2 bg-[#5776a5] bg-opacity-20 rounded-xl mb-4 flex flex-col justify-center items-center`}
          >
            <Link to={ele._id} className={`flex flex-col `}>
              <div>
                <img
                  src={ele.advertisingImageList[0]}
                  alt={ele.advertisingTitle}
                  className={`rounded-xl mb-4 w-[35rem]`}
                />
              </div>
              <div>
                <h2
                  className={`text-xl text-[#5776a5] font-semibold mb-4 w-[90%] md:w-96 text-center mx-auto`}
                >
                  {ele.advertisingTitle}
                </h2>
                <p
                  className={`text-gray-500 w-[90%] md:w-96 text-center mx-auto`}
                >
                  {ele.advertisingDescription}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default Advertisement;
export const advertisementLoader = async () => {
  const response = await fetch(`https://net-zoon.onrender.com/advertisements`);
  const data = await response.json();
  return data;
};
