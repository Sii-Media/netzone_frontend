import React from "react";
import { useLoaderData } from "react-router-dom";

const CurrentUserFollowers = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Followers</div>;
};

export default CurrentUserFollowers;
export const currentUserFollowersLoader = async () => {
  if (window.localStorage.getItem("user")) {
    const userCurrentPrOfileId = JSON.parse(window.localStorage.getItem("user"))
      .result._id;
    console.log(userCurrentPrOfileId);
    const response = await fetch(
      `https://net-zoon.onrender.com/user/getUserFollowers/${userCurrentPrOfileId}`
    );
    const data = await response.json();
    console.log(data);
    return userCurrentPrOfileId;
  }
};
