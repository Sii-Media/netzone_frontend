import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainSection from "../UI/MainSection";

const Notifications = () => {
  const data = useLoaderData();
  const formatDate = (date) => {
    const theDate = new Date(date);
    const ampm = theDate.getHours() >= 12 ? "PM" : "AM";
    const formattedHours =
      theDate.getHours() % 12 === 0 ? 12 : theDate.getHours() % 12;
    const formattedMinutes =
      theDate.getMinutes() < 10
        ? `0${theDate.getMinutes()}`
        : theDate.getMinutes();
    const formattedDate = `${theDate.getDay()}/${theDate.getMonth()}/${theDate.getFullYear()} ${formattedHours}:${formattedMinutes} ${ampm}`;
    return formattedDate;
  };

  // Check if "user" item exists in Local Storage
  const hasUserItem = localStorage.getItem("user");

  return (
    <MainSection className={`!mt-52 md:!mt-32 h-[calc(100vh-100px)]`}>
      {!hasUserItem ? (
        <div className={`flex justify-center items-center h-full`}>
          <p className={`text-2xl text-[#5776a5] font-semibold`}>
            No Notifications found
          </p>
        </div>
      ) : (
        <ul className={`mx-auto w-[90%] md:w-[70%] `}>
          {data.map((ele) => (
            <li
              key={ele.id}
              className={`bg-[#5776a5] bg-opacity-50 p-2 my-4 rounded-md`}
            >
              <div className={`flex items-center flex-row`}>
                <img
                  src={ele.userProfileImage}
                  alt={ele.username}
                  className={`rounded-full mr-4 w-24 h-24`}
                />
                <div>
                  <p className={`text-xl`}>
                    <span className={`font-bold`}>{ele.username}</span> Added a{" "}
                    <span className={`font-bold`}>{ele.text} </span>to
                    <span className={`font-bold`}> {ele.category}</span>
                  </p>
                  <p>
                    <span className={`text-gray-600`}>
                      {formatDate(ele.createdAt)}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </MainSection>
  );
};

export default Notifications;
