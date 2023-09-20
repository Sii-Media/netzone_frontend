import React from "react";
import Catagories from "../../components/Catagories/Catagories";
import PageSection from "../../components/UI/PageSection";
import Departments from "../../components/Departments/Departments";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <PageSection>
      <Catagories />
      <Departments />
    </PageSection>
  );
};

export default Home;
export const loaderHome = async (currency) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const promises = [
    fetch(
      baseUrl + "/departments/categories?department=الكترونيات"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=أجهزة المنزل والمكتب"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=موضة رجالية"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=موضة نسائية"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=منتجات غذائية"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=عطور"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=ساعات"
    ).then((response) => response.json()),
    fetch(
      baseUrl + `/categories/latest-cars-by-creator?country=${currency}`
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=حيوانات"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=آلات موسيقية"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=أجهزة رياضية"
    ).then((response) => response.json()),
    fetch(
      baseUrl + "/departments/categories?department=الزراعة"
    ).then((response) => response.json()),
    fetch(
      baseUrl + `/deals/alldealsItems?country=${currency}`
    ).then((response) => response.json()),
    fetch(baseUrl + "/advertisements").then((response) => response.json()),
    fetch(baseUrl + "/news").then((response) => response.json()),
    fetch(
      baseUrl + `/categories/planes/getnewplanes?country=${currency}`
    ).then((response) => response.json()),
    fetch(baseUrl + `/real-estate?country=${currency}`).then((response) =>
      response.json()
    ),
    fetch(
      baseUrl + "/departments/categories?department=أخرى"
    ).then((response) => response.json()),
  ];

  const data = await Promise.all(promises);
  console.log(data);
  return data;
};
