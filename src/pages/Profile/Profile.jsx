import React from "react";
import CurrentUserProfile from "../../components/CurrentUserProfile/CurrentUserProfile";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <CurrentUserProfile />
      <Outlet />
    </>
  );
};

export default Profile;
export const productsCurrentUserLoader = async () => {
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
      if (userType === "local_company") {
        const response = await fetch(
          `https://net-zoon.onrender.com/departments/getUserProducts/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        return data;
      }
      if (
        userType === "car" ||
        userType === "planes" ||
        userType === "sea_company"
      ) {
        const response = await fetch(
          `https://net-zoon.onrender.com/categories/company-vehicles/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        return data;
      }
      if (userType === "real_estate") {
        const response = await fetch(
          `https://net-zoon.onrender.com/real-estate/get-companies-realestate/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        console.log(data);
        return data;
      }
      if (userType === "news_agency") {
        const response = await fetch(
          `https://net-zoon.onrender.com/real-estate/get-companies-realestate/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        console.log(data);
        return data;
      }
      if (userType === "delivery_company") {
        const response = await fetch(
          `https://net-zoon.onrender.com/delivery/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        console.log(data);
        return data;
      }
    }
    if (isService) {
      const response = await fetch(
        `https://net-zoon.onrender.com/categories/local-company/get-services/${userCurrentPrOfileId}`
      );
      const data = await response.json();
      return data;
    }
  } else {
    return null;
  }

  // return [userCurrentPrOfileId, isService, userType];
};
