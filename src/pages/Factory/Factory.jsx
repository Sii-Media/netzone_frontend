import React from "react";
import FactoryTypes from "../../components/FactoryTypes/FactoryTypes";

const Factory = () => {
  return <FactoryTypes />;
};

export default Factory;
export const factoryLoader = async () => {
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/factories`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
