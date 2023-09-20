import React from "react";
import DepartmentAsAGridComp from "../../../components/DepartmentAsAGrid/DepartmentAsAGridComp";

const DepartmentAsAGridWithCountry = () => {
  return <DepartmentAsAGridComp />;
};

export default DepartmentAsAGridWithCountry;
export const DepartmentAsAGridWithCountryLoader = async ({ params }) => {
  const departmentType = params.department;
  console.log(departmentType);
  const currency = params.currency;
  console.log(currency);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  if (departmentType === "cars") {
    const response = await fetch(
      baseUrl + `/categories/cars?country=${currency}`
    );
    const data = await response.json();
    return { type: "cars", data };
  }
  if (departmentType === "planes") {
    const response = await fetch(
      baseUrl + `/categories/planes?country=${currency}`
    );
    const data = await response.json();
    return { type: "planes", data };
  }
  if (departmentType === "realEstate") {
    const response = await fetch(baseUrl + `/real-estate?country=${currency}`);
    const data = await response.json();
    console.log(data);
    return { type: "realEstate", data };
  }
  if (departmentType === "deals") {
    const response = await fetch(
      baseUrl + `/deals/alldealsItems?country=${currency}`
    );
    const data = await response.json();
    console.log(data);
    return { type: "deals", data };
  }
};
