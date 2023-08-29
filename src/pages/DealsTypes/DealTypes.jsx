import React from "react";
import MainSection from "../../components/UI/MainSection";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DealTypes = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const dealsTypes = [
    {
      title: "New and used civil and private aircraft",
      path: `aircraft/${currency}`,
    },
    {
      title: "Cars, New and Used",
      path: `cars/${currency}`,
    },
    {
      title: "Individual Tenders",
      path: `tenders/${currency}`,
    },
    {
      title: "Active Shops",
      path: `shops/${currency}`,
    },
    {
      title: "Civil, private and used boats and vessels",
      path: `boats and vessels/${currency}`,
    },
    {
      title: "Real Estate",
      path: `Real Estate/${currency}`,
    },
    { title: "Building Material", path: `building material/${currency}` },
    { title: "Scrap", path: `scrap/${currency}` },
    {
      title: "Infrastructure Material",
      path: `infrastructure material/${currency}`,
    },
  ];
  return (
    <MainSection
      className={`!mt-52 md:!mt-24 w-[90%] lg:w-[900px] mx-auto p-2 bg-gray-300 mb-4`}
    >
      <h2 className={`text-center text-3xl py-1 mb-2`}>Deals Categories</h2>
      <ul>
        {dealsTypes.map((ele) => (
          <li className={`mb-4`}>
            <Link
              to={ele.path}
              className={`p-2 bg-[#5776a5] block text-white text-2xl rounded-md`}
            >
              {ele.title}
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default DealTypes;
