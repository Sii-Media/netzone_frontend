import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";

const CurrentUserFollowings = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection className={`!mt-52 md:!mt-24 min-h-screen`}>
      <h2 className="text-2xl font-semibold pb-4 border-b border-b-gray-300 mb-4">
        Followings
      </h2>
      {data.length === 0 && (
        <p className={`text-center text-3xl font-bold`}>No Followings</p>
      )}
      <ul>
        {data.map((ele) => (
          <li>
            <Link
              className={`flex items-center py-2 border-b border-b-gray-300`}
            >
              <img
                src={ele.profilePhoto}
                alt={ele.username}
                className={`w-14 rounded-full mr-6`}
              />
              <h4 className={`text-lg font-medium`}>{ele.username}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default CurrentUserFollowings;
export const currentUserFollowingsLoader = async () => {
  if (window.localStorage.getItem("user")) {
    console.log(true);
    const userCurrentPrOfileId = JSON.parse(window.localStorage.getItem("user"))
      .result._id;
    console.log(userCurrentPrOfileId);
    const response = await fetch(
      `https://net-zoon.onrender.com/user/getUserFollowings/${userCurrentPrOfileId}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
};