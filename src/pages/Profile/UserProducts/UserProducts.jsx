import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";
import Card from "../../../components/UI/Card";
import { useSelector } from "react-redux";

const UserProducts = () => {
  const data = useLoaderData();
  const currency = useSelector((state) => state.currency.selectedCurrency);
  return (
    <MainSection
      className={`!mt-52 md:!mt-28 min-h-screen w-full flex flex-col justify-center items-center`}
    >
      <h1 className={`text-3xl text-[#5776a5] font-semibold text-center`}>
        Your Selected Products
      </h1>
      <ul className={`flex  flex-col w-[60%] mx-auto`}>
        {data.map((ele) => (
          <li className={`mb-4  bg-[#5776a5] p-1 rounded-md`}>
            <Link
              to={`/catagories/${ele.owner.userType}/${currency}/${ele.owner._id}/${ele._id}`}
              className={`flex items-center`}
            >
              <img
                src={ele.imageUrl}
                alt={ele.name}
                className={`w-20 h-20 object-cover rounded-full mr-2`}
              />
              <p className={`text-xl font-semibold text-white`}>{ele.name}</p>
            </Link>

            {/* <img src={ele.imageUrl} alt={ele.name} className={`rounded-md`} />
            <p className={`text-xl font-medium`}>{ele.name}</p> */}
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default UserProducts;
export const userProductsLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const userId = JSON.parse(window.localStorage.getItem("user")).result._id;
  console.log(userId);
  const response = await fetch(baseUrl + `/user/getSelectedProducts/${userId}`);
  const data = await response.json();
  console.log(data);
  return data;
};
