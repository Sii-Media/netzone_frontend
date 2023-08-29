import React from "react";
import EmList from "../../../components/EmList/EmList";

const Em = () => {
  return <EmList />;
};

export default Em;
export const emLoader = async ({ params }) => {
  const emId = params.emId;
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/govermental/${emId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
