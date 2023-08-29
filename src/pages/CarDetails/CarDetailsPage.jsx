import React from "react";
import CarDetailsComp from "../../components/CarDetails/CarDetailsComp";

const CarDetailsPage = () => {
  return <CarDetailsComp />;
};

export default CarDetailsPage;
export const CarDetailsPageLoader = async ({ params }) => {
  console.log(params);
  const carId = params.carId;
  console.log(carId);
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/vehicle/${carId}`
  );
  const data = await response.json();
  console.log(data)
  return data;
};
