import React from "react";
import { Link, redirect } from "react-router-dom";
import { TbGavel } from "react-icons/tb";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import MainSection from "../../components/UI/MainSection";
const More = () => {
  const logOutHandler = () => {
    window.localStorage.removeItem("user");
    window.location.href = "/profile";

  };
  return (
    <MainSection className={`min-h-screen !mt-52 md:!mt-24`}>
      <ul>
        <li
          className={`px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
        >
          <Link to="legalAdvice" className={`flex items-center w-full`}>
            <TbGavel className={`w-10 h-10 mr-4`} />
            <span className={`text-2xl font-semibold`}>Legal Advices</span>
          </Link>
        </li>
        <li
          className={`px-1 py-2 text-white bg-[#5776a5] flex items-center mb-5 rounded-xl border-2 duration-300 hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent`}
        >
          <Link to="contactUs" className={`flex items-center w-full`}>
            <BsFillEnvelopeFill className={`w-10 h-10 mr-4`} />
            <span className={`text-2xl font-semibold`}>Contact Us</span>
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
      </ul>
    </MainSection>
  );
};

export default More;
