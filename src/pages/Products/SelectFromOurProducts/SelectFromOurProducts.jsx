import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getCurrencySymbol } from "../../../funcs/Currency";

const SelectFromOurProducts = () => {
  const { t } = useTranslation();
  const data = useLoaderData();
  const [toUseData, setToUseData] = useState({ id: "", data: [] });
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  useEffect(() => {
    if (
      data.id === "local_company" ||
      data.id === "car" ||
      data.id === "real_estate"
    ) {
      const formattedData = data.data.map((ele) => ({
        ...ele,
        img: ele.profilePhoto,
        name: ele.username,
        bio: ele.bio,
      }));
      setToUseData({ id: data.id, data: formattedData });
    }
    if (data.id === "products") {
      const formattedData = data.data.map((ele) => ({
        ...ele,
        img: ele.imageUrl,
        name: ele.name,
        bio: ele.description,
      }));
      setToUseData({ id: data.id, data: formattedData });
    }
    if (data.id === "civilAirCraft") {
      const formattedData = data.data.results.map((ele) => ({
        ...ele,
        img: ele.imageUrl,
        name: ele.name,
        bio: ele.description,
      }));
      setToUseData({ id: data.id, data: formattedData });
    }
    if (data.id === "advertisements") {
      const formattedData = data.data.results.map((ele) => ({
        ...ele,
        img: ele.advertisingImage,
        name: ele.advertisingTitle,
        bio: ele.advertisingDescription,
      }));
      setToUseData({ id: data.id, data: formattedData });
    }
  }, [data.data, data.id]);

  useEffect(() => {
    const filteredItems = toUseData.data.filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredData(filteredItems);

    // Initialize selected item IDs based on the length of data
    setSelectedItemIds(new Array(filteredItems.length).fill(""));
  }, [filterText, toUseData.data]);

  // Function to toggle the selection of an item
  const toggleItemSelection = (index, itemId) => {
    const updatedItemIds = [...selectedItemIds];
    updatedItemIds[index] = updatedItemIds[index] === itemId ? "" : itemId;
    setSelectedItemIds(updatedItemIds);
    console.log("Selected Item IDs:", updatedItemIds.filter(Boolean));
  };
  const submitHandler = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const data = selectedItemIds.filter((ele) => ele !== "");
    const formData = new FormData();
    data.map((ele) => formData.append("productIds", ele));

    const userId = JSON.parse(window.localStorage.getItem("user")).result._id;
    const response = await fetch(
      baseUrl + `/user/addToSelectedProducts/${userId}`,
      {
        method: "post",
        body: formData,
      }
    );
    const responseData = await response.json();
    window.alert(responseData.message);
    console.log(responseData);
  };
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  return (
    <MainSection
      className={`flex flex-col justify-center items-center mb-40 !mt-52 md:!mt-28 relative`}
    >
      <div className={`flex flex-col mb-10`}>
        <label className={`text-xl text-[#5776a5] mb-4`} htmlFor="search">
          {t("Filter your preferences")}...
        </label>
        <input
          id="search"
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search specificity..."
          className={`border-[1px] border-[#5776a5] rounded-md w-full md:w-80 p-2 outline-none`}
        />
      </div>
      {!filteredData.length > 0 && <p>No data to show</p>}
      <ul
        className={`relative flex flex-col lg:flex-row items-center md:items-start flex-wrap w-[99%] md:w-[80%] mx-auto`}
      >
        {(filterText.length === 0 ? toUseData.data : filteredData).map(
          (ele, i) => (
            <li
              key={i}
              className={`w-full  bg-[#5776a5] bg-opacity-50 p-2 rounded-md mb-4 `}
            >
              <div className={`flex items-center justify-between`}>
                <img
                  loading="eager"
                  src={ele.img}
                  alt={ele.name}
                  className={`w-[25%] md:w-24`}
                />
                <div className={`w-[60%]`}>
                  <h3
                    className={` text-black text-sm md:text-xl font-semibold text-center`}
                  >
                    {ele.name}
                  </h3>
                  <p
                    className={`text-white text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-sm md:text-xl max-h-16 mt-2`}
                  >
                    {ele.bio}
                  </p>
                </div>
                <div className={`flex flex-col items-center justify-center`}>
                  <p className={`text-sm md:text-xl`}> {ele.owner.username}</p>
                  <p className={`text-white text-sm md:text-xl`}>
                    {ele.price.toLocaleString()} {t(currencySymbol)}
                  </p>
                </div>
                {/* <div className={`flex items-center justify-center `}>
                  <img
                    loading="lazy"
                    src={ele.img}
                    alt={ele.name}
                    className={`w-32 h-32 rounded-md`}
                  />
                </div>
                <h3 className={` text-black text-xl font-semibold text-center`}>
                  {ele.name}
                </h3>
                <h4 className={`mt-2 mb-2 text-center`}>
                  {ele.owner.username}
                </h4>
                <div>
                  <p
                    className={`text-white text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-xl max-h-16 mt-2`}
                  >
                    {ele.bio}
                  </p>
                  <p className={`text-right mt-2 mb-2`}>{ele.price}</p>
                </div> */}
                <input
                  type="checkbox"
                  checked={selectedItemIds[i] === ele._id}
                  onChange={() => toggleItemSelection(i, ele._id)}
                  className={`w-5 md:w-10 h-5 md:h-10 rounded-lg border-2 border-red-400 outline-none`}
                />
              </div>
            </li>
          )
        )}
        <button
          onClick={submitHandler}
          className={`fixed top-36  right-2 bg-[#5776a5] text-white rounded-lg  text-xl px-4 py-1 border-2 border-transparent hover:bg-transparent hover:text-[#5776a5] hover:border-[#5776a5] duration-300`}
        >
          {t("submit")}
        </button>
      </ul>
    </MainSection>
  );
};

export default SelectFromOurProducts;
export const selectFromOurProductsLoader = async ({ params }) => {
  const currency = params.currency;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(
    baseUrl + `/departments/getSelectableProducts?country=${currency}`
  );
  const data = await response.json();
  console.log(data);
  return { id: "products", data };
};
