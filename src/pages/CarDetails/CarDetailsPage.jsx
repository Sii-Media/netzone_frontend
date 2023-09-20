import React from "react";
import CarDetailsComp from "../../components/CarDetails/CarDetailsComp";

const CarDetailsPage = () => {
  return <CarDetailsComp />;
};

export default CarDetailsPage;
export const CarDetailsPageLoader = async ({ params }) => {

  const carId = params.carId;

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/categories/vehicle/${carId}`);
  const data = await response.json();

  return data;
};
