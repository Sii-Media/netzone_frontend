import React from "react";
import FactoryProfileCom from "../../../components/FactoryTypes/FactoryProfile/FactoryProfileCom";
import { Outlet } from "react-router-dom";

const FactoryProfile = () => {
  return (
    <>
      <FactoryProfileCom />
      <Outlet />
    </>
  );
};

export default FactoryProfile;
export const factoryProfileLoader = async ({ params }) => {
  const typeId = params.typeId;
  const currency = params.currency;
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/get-all-factories/${typeId}?country=${currency}`
  );
  const data = await response.json();
  return data;
};
