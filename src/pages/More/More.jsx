import React from "react";
import { Link, redirect, useLocation } from "react-router-dom";
import { TbGavel } from "react-icons/tb";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import MainSection from "../../components/UI/MainSection";
import { GoPerson } from "react-icons/go";
import Complaints from "./ContactUs/Complaints/Complaints";
import Opinions from "./ContactUs/Opinions/Opinions";
import Question from "./ContactUs/Question/Question";
import { Send } from "@mui/icons-material";
import { SendMail } from "./ContactUs/SendMail/SendMail";
import SpecialRequest from "./ContactUs/SpecialRequest/SpecialRequest";
import ShareLink from "../../components/UI/ShareLink";
const More = () => {
  const location = useLocation();

  const copyCurrentRouteLink = () => {
    const currentURL = window.location.href;

    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        // Handle successful copy
        console.log("Link copied to clipboard: " + currentURL);
        window.alert("Link copied to clipboard: " + currentURL);
      })
      .catch((error) => {
        // Handle error
        console.error("Copy failed: ", error);
      });
  };

  const logOutHandler = () => {
    window.localStorage.removeItem("user");
    window.location.href = "/profile";
  };
  return (
    <MainSection className={`min-h-screen !mt-52 md:!mt-24`}>
      <ul className={`mx-auto w-[90%] md:w-[50%]`}>
        <li
          className={`px-2 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
        >
          <Link to="legalAdvice" className={`flex items-center w-full`}>
            <TbGavel className={`w-10 h-10 mr-4`} />
            <span className={`text-2xl font-semibold`}>Legal Advices</span>
          </Link>
        </li>
        {/* <li
          className={`px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
        >
          <Link to="contactUs" className={`flex items-center w-full`}>
            <BsFillEnvelopeFill className={`w-10 h-10 mr-4`} />
            <span className={`text-2xl font-semibold`}>Contact Us</span>
          </Link>
        </li> */}
        <li
          className={`px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
        >
          <Link to="/profile" className={`flex items-center w-full`}>
            {window.localStorage.getItem("user") ? (
              <img
                src={
                  JSON.parse(window.localStorage.getItem("user")).result
                    .profilePhoto
                }
                alt={
                  JSON.parse(window.localStorage.getItem("user")).result
                    .username
                }
                className={`w-10 h-10 object-cover rounded-full mr-4`}
              />
            ) : (
              <GoPerson className={`w-10 h-10 mr-4`} />
            )}
            <span className={`text-2xl font-semibold`}>profile</span>
          </Link>
        </li>
        <li
          className={`px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
        >
          <button
            onClick={logOutHandler}
            className={`flex items-center w-full`}
          >
            <LuLogOut className={`w-10 h-10 mr-4`} />
            <span className={`text-2xl font-semibold`}>Logout</span>
          </button>
        </li>
        <li
          onClick={copyCurrentRouteLink}
          className={`text-2xl font-semibold px-1 py-2  flex items-center mb-5 rounded-xl duration-300 border broder-[#5776a5]  hover:bg-transparent cursor-pointer`}
        >
          <ShareLink
            containerClassName={`flex items-center duration-300`}
            iconClassName={`!text-white !w-8 !h-8 !mr-4 !text-[#5776a5]`}
            spanClassName={`text-2xl font-semibold !text-[#5776a5] `}
          >
            <span>Share Netzoon with others</span>
          </ShareLink>
        </li>
      </ul>
      <div className={`mx-auto w-[90%] md:w-[50%]`}>
        <h2 className={`text-2xl font-semibold text-center mb-4`}>
          Contact Us
        </h2>
        <ul>
          <li>
            <Link
              to="contactUs/opinions"
              className={`text-2xl font-semibold px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
            >
              Opinions
            </Link>
          </li>
          <li>
            <Link
              to="contactUs/complaints"
              className={`text-2xl font-semibold px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
            >
              Complaints
            </Link>
          </li>
          <li>
            <Link
              to="contactUs/questions"
              className={` text-2xl font-semibold px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
            >
              Leave your question
            </Link>
          </li>
          <li>
            <Link
              to="contactUs/specialRequest"
              className={`text-2xl font-semibold px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
            >
              Special Request
            </Link>
          </li>
          <li
            className={`text-2xl font-semibold px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
          >
            Chat with Netzoon
          </li>
          <li>
            <Link
              to="contactUs/mailNetzoon"
              className={`text-2xl font-semibold px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
            >
              Send a Mail
            </Link>
          </li>
        </ul>

        <button className={`self-center`}></button>
      </div>
      {/* <Complaints />
      <Opinions />
      <Question />
      <SendMail />
      <SpecialRequest /> */}
    </MainSection>
  );
};

export default More;
