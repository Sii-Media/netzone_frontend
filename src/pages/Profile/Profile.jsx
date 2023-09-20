import React from "react";
import CurrentUserProfile from "../../components/CurrentUserProfile/CurrentUserProfile";
import { Outlet } from "react-router-dom";

const Profile = () => {
  console.log(true);
  return (
    <>
      <CurrentUserProfile />
      <Outlet />
    </>
  );
};

export default Profile;
export const productsCurrentUserLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  if (window.localStorage.getItem("user")) {
    console.log(JSON.parse(window.localStorage.getItem("user")));
    const userCurrentPrOfileId = JSON.parse(window.localStorage.getItem("user"))
      .result._id;
    console.log(userCurrentPrOfileId);
    const isService = await JSON.parse(window.localStorage.getItem("user"))
      .result.isService;
    console.log(isService);
    const userType = await JSON.parse(window.localStorage.getItem("user"))
      .result.userType;
    console.log(userType);
    if (isService === undefined || isService === false) {
      if (userType === "local_company" || userType === "trader") {
        const response = await fetch(
          baseUrl + `/departments/getUserProducts/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        return { id: "local_company_no_service", data: data };
      }
      if (
        userType === "car" ||
        userType === "planes" ||
        userType === "sea_company"
      ) {
        const response = await fetch(
          baseUrl + `/categories/company-vehicles/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        return { id: "viechles", data: data };
      }
      if (userType === "real_estate") {
        const response = await fetch(
          baseUrl +
            `/real-estate/get-companies-realestate/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        console.log(data);
        return { id: "real_estate", data: data };
      }
      if (userType === "news_agency") {
        const response = await fetch(
          baseUrl +
            `/real-estate/get-companies-realestate/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        console.log(data);
        return { id: "news_agency", data: data };
      }
      if (userType === "user") {
        const response = await fetch(
          baseUrl + `/user/getSelectedProducts/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        console.log(data);
        return { id: "user", data: data };
      }
      if (userType === "delivery_company") {
        const response = await fetch(
          baseUrl + `/delivery/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        console.log(data);
        return { id: "delivery_company", data: data };
      }
    }
    if (isService) {
      if (userType === "local_company") {
        const response = await fetch(
          baseUrl +
            `/categories/local-company/get-services/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        return { id: "local_company_service", data: data };
      }
      if (userType === "factory") {
        const response = await fetch(
          baseUrl +
            `/categories/local-company/get-services/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        return { id: "factory", data: data };
      }
    }
  } else {
    return null;
  }

  // return [userCurrentPrOfileId, isService, userType];
};
