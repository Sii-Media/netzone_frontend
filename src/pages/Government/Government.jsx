import React from "react";
import SingleCata from "../../components/SingleCata/SingleCata";

const Government = () => {
  return <SingleCata />;
};

export default Government;
export const governmentLoader = async () => {
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/govermental`
  );
  const data = await response.json();
  console.log(data);
  return {data};
};
