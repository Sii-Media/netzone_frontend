import React from "react";
import Notifications from "../../components/Notifications/Notifications";

const Notification = () => {
  return <Notifications />;
};

export default Notification;
export const loaderNotifications = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + "/notifications/get-notification");
  const data = await response.json();
  return data;
};
