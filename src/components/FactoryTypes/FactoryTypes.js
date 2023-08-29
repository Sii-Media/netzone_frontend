import React from "react";
import MainSection from "../UI/MainSection";
import { Link, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

const FactoryTypes = () => {
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection className={`!mt-24`}>
      <ul>
        {data.map((ele) => (
          <li
            className={` bg-gray-300 mb-6 font-bold text-xl hover:text-white duration-300 hover:bg-gray-500`}
          >
            <Link className={`p-4 block`} to={`${ele._id}/${selectedCurrency}`}>
              {ele.title}
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default FactoryTypes;
