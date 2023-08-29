import React from "react";
import User from "../../components/User/User";
import { Outlet } from "react-router-dom";

const UserPage = () => {
  return (
    <>
      <User />
      <Outlet />
    </>
  );
};

export default UserPage;
export const userPageLoader = async ({ params }) => {
  const userId = params.userId;
  const response = await fetch(
    `https://net-zoon.onrender.com/user/getUser/${userId}`
  );
  const data = await response.json();
  const isService = await data.isService;
  const userType = await data.userType;

  let proServData = "";
  if (isService) {
    const responseProServ = await fetch(
      `https://net-zoon.onrender.com/categories/local-company/get-services/${userId}`
    );
    proServData = await responseProServ.json();
  }
  if (!isService) {
    const responseProServ = await fetch(
      `https://net-zoon.onrender.com/departments/getUserProducts/${userId}`
    );
    proServData = await responseProServ.json();
  }
  if (userType === "car" || userType === "plans") {
    const responseProServ = await fetch(
      `https://net-zoon.onrender.com/categories/company-vehicles/${userId}`
    );
    proServData = await responseProServ.json();
  }
  if (userType === "real_estate") {
    const responseProServ = await fetch(
      `https://net-zoon.onrender.com/real-estate/get-companies-realestate/${userId}`
    );
    proServData = await responseProServ.json();
  }
  if (userType === "delivery") {
    const responseProServ = await fetch(
      `https://net-zoon.onrender.com/delivery/${userId}`
    );
    proServData = await responseProServ.json();
  }
  let userAds = "";
  if (userType === "user") {
    const responseProServ = await fetch(
      `https://net-zoon.onrender.com/user/getSelectedProducts/${userId}`
    );
    userAds = await responseProServ.json();
  } else {
    const responseUserAds = await fetch(
      `https://net-zoon.onrender.com/advertisements/getUserAds/${userId}`
    );
    userAds = await responseUserAds.json();
  }
  return { data, userAds, proServData };
};
