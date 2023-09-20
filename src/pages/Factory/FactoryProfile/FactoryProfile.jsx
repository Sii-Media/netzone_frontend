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
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const response = await fetch(
    baseUrl + `/categories/get-all-factories/${typeId}?country=${currency}`
  );
  const data = await response.json();
  return data;
};
