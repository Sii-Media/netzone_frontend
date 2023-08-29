import React from "react";
import CategoryAsAGridComp from "../../components/CategoryAsAGrid/CategoryAsAGridComp";

import { useLoaderData } from "react-router-dom";
const CategoryAsAGrid = () => {
  const data = useLoaderData();
  console.log(data);
  return <CategoryAsAGridComp />;
};

export default CategoryAsAGrid;
export const categoryAsAGridLoader = async ({ params }) => {
  console.log(params);
  const departmentType = params.department;
  const categoryType = params.category;
  const currency = params.currency;
  if (departmentType === "electronicDevices") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=الكترونيات&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  if (departmentType === "officeDevices") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=أجهزة المنزل والمكتب&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  if (departmentType === "menFashion") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=موضة رجالية&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  if (departmentType === "womenFashion") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=موضة نسائية&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  if (departmentType === "foods") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=منتجات غذائية&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  if (departmentType === "perfumes") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=عطور&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  if (departmentType === "watches") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=ساعات&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  if (departmentType === "sportMachine") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=أجهزة رياضية&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  if (departmentType === "animals") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=حيوانات&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
    if (departmentType === "musicalInstruments") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=آلات موسيقية&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
   if (departmentType === "agr") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/products?country=${currency}&department=الزراعة&category=${categoryType}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
};
