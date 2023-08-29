import React from "react";
import PlaneDetailsComp from "../../components/PlaneDetails/PlaneDetailsComp";

const PlaneDetailsPage = () => {
  return <PlaneDetailsComp />;
};

export default PlaneDetailsPage;
export const planeDetailsPageLoader = async ({ params }) => {
  console.log(params);
  const planeId = params.planeId;
  console.log(planeId);
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/vehicle/${planeId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
