import React from "react";
import EmList from "../../../components/EmList/EmList";

const Em = () => {
  return <EmList />;
};

export default Em;
export const emLoader = async ({ params }) => {
  const emId = params.emId;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/categories/govermental/${emId}`);
  const data = await response.json();
  console.log(data);
  return data;
};
