import React from "react";
import Notifications from "../../components/Notifications/Notifications";

const Notification = () => {
  return <Notifications />;
};

export default Notification;
export const loaderNotifications = async () => {
  const response = await fetch(
    "https://net-zoon.onrender.com/notifications/get-notification"
  );
  const data = await response.json();
  return data;
};
