import React from "react";
import RealEstateDetailsComp from "../../components/RealEstateDetails/RealEstateDetailsComp";

const RealEstateDetails = () => {
  return <RealEstateDetailsComp />;
};

export default RealEstateDetails;
export const realEstateDetailsLoader = async ({ params }) => {
  const realEstateId = params.realEstateId;
  const response = await fetch(
    `https://net-zoon.onrender.com/real-estate/getById/${realEstateId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
