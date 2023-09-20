import React from "react";
import RealEstateDetailsComp from "../../components/RealEstateDetails/RealEstateDetailsComp";

const RealEstateDetails = () => {
  return <RealEstateDetailsComp />;
};

export default RealEstateDetails;
export const realEstateDetailsLoader = async ({ params }) => {
  const realEstateId = params.realEstateId;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(
    baseUrl + `/real-estate/getById/${realEstateId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
