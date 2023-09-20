import React from "react";
import FactoryTypes from "../../components/FactoryTypes/FactoryTypes";

const Factory = () => {
  return <FactoryTypes />;
};

export default Factory;
export const factoryLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const response = await fetch(baseUrl + `/categories/factories`);
  const data = await response.json();
  console.log(data);
  return data;
};
