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
  return (
    <MainSection className={`!mt-24`}>
      <ul className={`mx-auto w-[50%]`}>
        {data.map((ele) => (
          <li
            key={ele.id}
            className={`bg-[#5776a5] bg-opacity-50 p-2 my-4 rounded-md`}
          >
            <Link className={`flex items-center flex-row`}>
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
                  <span className={`text-gray-600`}>{formatDate(ele.createdAt)}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default Notifications;
