import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";
import { useTranslation } from "react-i18next";

const SwitchAccount = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const data = useLoaderData();
  const { t } = useTranslation();
  const switchAccountHandler = async (e) => {
    console.log(e.target.id);
    const taggedId = e.target.id;
    const response = await fetch(baseUrl + `/user/getUser/${taggedId}`);
    const data = await response.json();
    const theDataToLocalStorage = {
      message: "Success",
      result: data,
      token: undefined,
    };
    console.log(theDataToLocalStorage);
    window.localStorage.setItem("user", JSON.stringify(theDataToLocalStorage));
    window.alert("Success!");
    window.location.reload();
    window.location.replace("/");
  };
  return (
    <MainSection className={`!mt-52 md:!mt-28 min-h-screen`}>
      <h2 className={`text-center text-2xl text-[#5776a5] font-medium mb-8`}>
        {t("chooseOneOfYourAccounts")}
      </h2>
      {data.length === 0 && <h3>No Accounts Available</h3>}
      <ul className={`w-[90%] md:w-[70%] mx-auto flex flex-col`}>
        {data.map((ele) => (
          <li
            key={ele._id}
            id={ele._id}
            onClick={switchAccountHandler}
            className={`mb-4 flex items-center justify-betwee bg-[#5776a5] bg-opacity-40 px-2 py-1 rounded-2xl cursor-pointer`}
          >
            <div id={ele._id} className={`mr-5   overflow-hidden  `}>
              <img
                id={ele._id}
                src={ele.profilePhoto}
                alt={ele.username}
                className={`rounded-full w-40`}
              />
            </div>
            <div id={ele._id}>
              <h3 id={ele._id} className={`text-2xl font-semibold mb-1`}>
                {ele.username}
              </h3>
              <p id={ele._id} className={`text-sm text-gray-500`}>
                {ele.bio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default SwitchAccount;
export const switchAccountLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const userData = localStorage.getItem("user");
  console.log(JSON.parse(userData).result.accounts);
  const userDataAccountsArray = JSON.parse(userData).result.accounts;
  console.log(userDataAccountsArray);
  const promises = [];
  for (let i = 0; i < userDataAccountsArray.length; i++) {
    const response = await fetch(
      baseUrl + `/user/getUser/${userDataAccountsArray[i]}`
    ).then((response) => response.json());
    promises.push(response);
  }
  console.log(promises);
  return promises;
};
