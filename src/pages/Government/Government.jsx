import React from "react";
import SingleCata from "../../components/SingleCata/SingleCata";

const Government = () => {
  return <SingleCata />;
};

export default Government;
export const governmentLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const response = await fetch(baseUrl + `/categories/govermental`);
  const data = await response.json();
  console.log(data);
  return { data };
};
