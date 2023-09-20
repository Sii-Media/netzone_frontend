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
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/categories/vehicle/${planeId}`);
  const data = await response.json();
  console.log(data);
  return data;
};
