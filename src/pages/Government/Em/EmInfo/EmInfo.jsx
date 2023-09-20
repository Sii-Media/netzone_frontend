import React from "react";
import EmInfoCom from "../../../../components/EmList/EmInfo/EmInfoCom";

const EmInfo = () => {
  return <EmInfoCom />;
};

export default EmInfo;
export const emInfoLoader = async ({ params }) => {
  const emId = params.emId;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/categories/govermental/${emId}`);
  const data = await response.json();
  return data;
};
