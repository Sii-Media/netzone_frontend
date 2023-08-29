import React from "react";
import OneType from "../../../components/FactoryTypes/OneType/OneType";

const OneFactory = () => {
  return <OneType />;
};

export default OneFactory;
export const oneFactoryLoader = async ({ params }) => {
  const typeId = params.typeId;
  const currency = params.currency;
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/get-all-factories/${typeId}?country=${currency}`
  );
  const data = await response.json();
  return data;
};
