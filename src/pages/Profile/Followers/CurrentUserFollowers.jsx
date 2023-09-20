import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";

const CurrentUserFollowers = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection className={`!mt-52 md:!mt-24 min-h-screen`}>
      <h2 className="text-2xl font-semibold pb-4 border-b border-b-gray-300 mb-4">
        Followers
      </h2>
      {data.length === 0 && (
        <p className={`text-center text-3xl font-bold`}>No Followers</p>
      )}
      <ul>
        {data.map((ele) => (
          <li>
            {console.log(ele)}
            <Link
              to={`/catagories/${ele.userType}/${ele._id}`}
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

export default CurrentUserFollowers;
export const currentUserFollowersLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  if (window.localStorage.getItem("user")) {
    console.log(true);
    const userCurrentPrOfileId = JSON.parse(window.localStorage.getItem("user"))
      .result._id;
    console.log(userCurrentPrOfileId);
    const response = await fetch(
      baseUrl + `/user/getUserFollowers/${userCurrentPrOfileId}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
};
