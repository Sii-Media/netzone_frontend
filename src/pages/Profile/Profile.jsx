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
    const userCurrentPrOfileId = JSON.parse(window.localStorage.getItem("user"))
      .result._id;
    console.log(userCurrentPrOfileId);
    const isService = await JSON.parse(window.localStorage.getItem("user"))
      .result.isService;
    const userType = await JSON.parse(window.localStorage.getItem("user"))
      .result.userType;
    if (isService === undefined) {
      if (userType === "local_company") {
        const response = await fetch(
          `https://net-zoon.onrender.com/departments/getUserProducts/${userCurrentPrOfileId}`
        );
        const data = await response.json();
        return data;
      }
      if (userType === "car") {
        const response = await fetch(
          `https://net-zoon.onrender.com/categories/company-vehicles/${userCurrentPrOfileId}`
        );
        const data = await response.json();
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
