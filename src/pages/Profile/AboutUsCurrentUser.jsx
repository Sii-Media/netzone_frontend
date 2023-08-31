import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AboutUsCurrentUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (window.localStorage.getItem("user")) {
      setUser(JSON.parse(window.localStorage.getItem("user")));
    }
  }, []);
  console.log(user);
  return (
    <div className={`w-[90%] md:w-[900px] mx-auto mt-5 `}>
      {user !== null && (
        <ul>
          <li
            className={`border-b border-gray-300 p-2 flex justify-between items-center`}
          >
            <span className={`text-lg font-medium`}>Company Name:</span>
            <span className={`w-1/2`}>{user.result.username}</span>
          </li>
          <li
            className={`border-b border-gray-300 p-2 flex justify-between items-center`}
          >
            <span className={`text-lg font-medium`}>Email:</span>
            <span className={`w-1/2`}>{user.result.email}</span>
          </li>
          <li
            className={`border-b border-gray-300 p-2 flex justify-between items-center`}
          >
            <span className={`text-lg font-medium`}>Mobile:</span>
            <span className={`w-1/2`}>{user.result.firstMobile}</span>
          </li>
          <li
            className={`border-b border-gray-300 p-2 flex justify-between items-center`}
          >
            <span className={`text-lg font-medium`}>Bio:</span>
            <span className={`w-1/2`}>{user.result.bio}</span>
          </li>
          <li
            className={`border-b border-gray-300 p-2 flex justify-between items-center`}
          >
            <span className={`text-lg font-medium`}>Description:</span>
            <span className={`w-1/2`}>{user.result.description}</span>
          </li>
          <li
            className={`border-b border-gray-300 p-2 flex justify-between items-center`}
          >
            <span className={`text-lg font-medium`}>Website:</span>
            <span className={`w-1/2`}>{user.result.website}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AboutUsCurrentUser;
