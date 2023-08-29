import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainSection from "../UI/MainSection";
import { useSelector } from "react-redux";

const SearchedItem = () => {
  const data = useLoaderData();
  console.log(data);
  const [toUseData, setToUseData] = useState({ id: "", data: [] });
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const currency = useSelector((state) => state.currency.selectedCurrency);
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
  }, [filterText, toUseData.data]);
  return (
    <MainSection className={`flex flex-col justify-center items-center mb-40`}>
      <div className={`flex flex-col mb-10`}>
        <label className={`text-xl text-[#5776a5] mb-4`} htmlFor="search">
          Filter your preferences :
        </label>
        <input
          id="search"
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search specificity..."
          className={`border-[1px] border-[#5776a5] rounded-md w-80 p-2 outline-none`}
        />
      </div>
      {!filteredData.length > 0 && <p>No data to show</p>}
      <ul
        className={`flex flex-col md:flex-row  items-center  md:items-start  flex-wrap md:w-[calc(18rem*3+3rem)] mx-auto`}
      >
        {(filterText.length === 0 ? toUseData.data : filteredData).map(
          (ele, i) => (
            <li
              key={i}
              className={`w-full md:w-72 h-32 overflow-hidden bg-[#5776a5] bg-opacity-50 p-2 rounded-md mb-4 mr-4`}
            >
              {/* {console.log(ele)} */}
              <Link
                to={
                  data.id === "local_company" ||
                  data.id === "car" ||
                  data.id === "real_estate"
                    ? `/catagories/${ele.userType}/${ele._id}`
                    : data.id === "products"
                    ? `/${ele.category.name}/${currency}`
                    : "/"
                }
                className={`flex flex-col`}
              >
                {console.log(data.id)}
                <div className={`flex items-center`}>
                  <img
                  loading="lazy"
                    src={ele.img}
                    alt={ele.name}
                    className={`w-20 rounded-md h-20`}
                  />
                  <h3 className={`ml-2 text-black text-2xl font-semibold`}>
                    {ele.name}
                  </h3>
                </div>
                <div>
                  <p
                    className={`text-white whitespace-nowrap overflow-hidden overflow-ellipsis text-xl max-h-16 mt-2`}
                  >
                    {ele.bio}
                  </p>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </MainSection>
  );
};

export default SearchedItem;
