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
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/user/getUser/${userId}`);
  const data = await response.json();
  const isService = await data.isService;
  const userType = await data.userType;

  let proServData = "";
  if (isService) {
    const responseProServ = await fetch(
      baseUrl + `/categories/local-company/get-services/${userId}`
    );
    proServData = await responseProServ.json();
  }
  if (!isService) {
    const responseProServ = await fetch(
      baseUrl + `/departments/getUserProducts/${userId}`
    );
    proServData = await responseProServ.json();
  }
  if (userType === "car" || userType === "planes") {
    const responseProServ = await fetch(
      baseUrl + `/categories/company-vehicles/${userId}`
    );
    proServData = await responseProServ.json();
  }
  if (userType === "real_estate") {
    const responseProServ = await fetch(
      baseUrl + `/real-estate/get-companies-realestate/${userId}`
    );
    proServData = await responseProServ.json();
  }
  if (userType === "delivery_company") {
    const responseProServ = await fetch(baseUrl + `/delivery/${userId}`);
    proServData = await responseProServ.json();
  }
  let userAds = "";
  if (userType === "user") {
    const responseProServ = await fetch(
      baseUrl + `/user/getSelectedProducts/${userId}`
    );
    userAds = await responseProServ.json();
  } else {
    const responseUserAds = await fetch(
      baseUrl + `/advertisements/getUserAds/${userId}`
    );
    userAds = await responseUserAds.json();
  }
  return { data, userAds, proServData };
};
