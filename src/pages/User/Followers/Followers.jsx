import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";

const Followers = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection className={`!mt-44 md:!mt-24 min-h-screen`}>
      <h2 className={`text-center text-2xl font-bold mb-4`}>Followers</h2>
      {data.length > 0 && (
        <ul className={`flex flex-col `}>
          {data.map((ele) => (
            <li
              className={`flex items-center mb-4 py-2 border-b-2 border-gray-200 last:border-none`}
            >
              <div>
                <img
                  src={ele.profilePhoto}
                  alt={ele.username}
                  className={`w-32 rounded-full`}
                />
              </div>
              <div className={`ml-2`}>
                <p className={`text-lg font-semibold`}>{ele.username}</p>
                {/* <p className={`text-gray-400 text-sm`}>{ele.description}</p> */}
              </div>
            </li>
          ))}
        </ul>
      )}
      {data.length <= 0 && <p className={`flex`}>No Data Found</p>}
    </MainSection>
  );
};

export default Followers;
export const followersLoader = async ({ params }) => {
  const userId = params.userId;
  const response = await fetch(
    `https://net-zoon.onrender.com/user/getUserFollowers/${userId}`
  );
  const data = await response.json();
  return data;
};
