import React from "react";
import DepartmentAsAGridComp from "../../components/DepartmentAsAGrid/DepartmentAsAGridComp";

const DepartmentAsAGrid = () => {
  return <DepartmentAsAGridComp />;
};

export default DepartmentAsAGrid;
export const departmentAsAGridLoader = async ({ params }) => {
  const departmentType = params.department;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  if (departmentType === "electronicDevices") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=الكترونيات`
    );
    const data = await response.json();
    return { type: "electronicDevices", data };
  }
  if (departmentType === "officeDevices") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=أجهزة المنزل والمكتب`
    );
    const data = await response.json();
    return { type: "officeDevices", data };
  }
  if (departmentType === "other") {
    const response = await fetch(
      baseUrl + "/departments/categories?department=أخرى"
    );
    const data = await response.json();
    return { type: "officeDevices", data };
  }
  if (departmentType === "menFashion") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=موضة رجالية`
    );
    const data = await response.json();
    return { type: "menFashion", data };
  }
  if (departmentType === "womenFashion") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=موضة نسائية`
    );
    const data = await response.json();
    return { type: "womenFashion", data };
  }
  if (departmentType === "foods") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=منتجات غذائية`
    );
    const data = await response.json();
    return { type: "foods", data };
  }
  if (departmentType === "perfumes") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=عطور`
    );
    const data = await response.json();
    return { type: "perfumes", data };
  }
  if (departmentType === "watches") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=ساعات`
    );
    const data = await response.json();
    return { type: "watches", data };
  }
  if (departmentType === "sportMachine") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=أجهزة رياضية`
    );
    const data = await response.json();
    return { type: "sportMachine", data };
  }
  if (departmentType === "musicalInstruments") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=آلات موسيقية`
    );
    const data = await response.json();
    return { type: "musicalInstruments", data };
  }
  if (departmentType === "cars") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=سيارات`
    );
    const data = await response.json();
    return { type: "cars", data };
  }
  if (departmentType === "animals") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=حيوانات`
    );
    const data = await response.json();
    return { type: "animals", data };
  }
  if (departmentType === "agr") {
    const response = await fetch(
      baseUrl + `/departments/categories?department=الزراعة`
    );
    const data = await response.json();
    return { type: "agr", data };
  }
  if (departmentType === "advertisements") {
    const response = await fetch(baseUrl + `/advertisements`);
    const data = await response.json();
    return { type: "advertisements", data };
  }
  if (departmentType === "news") {
    const response = await fetch(baseUrl + `/news`);
    const data = await response.json();
    return { type: "advertisements", data };
  }
};
