import React from "react";
import EmInfoCom from "../../../../components/EmList/EmInfo/EmInfoCom";

const EmInfo = () => {
  return <EmInfoCom />;
};

export default EmInfo;
export const emInfoLoader = async ({ params }) => {
  const emId = params.emId;
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/govermental/${emId}`
  );
  const data = await response.json();
  return data;
};
