import React from "react";
import MainSection from "../../../components/UI/MainSection";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <MainSection className={`!mt-52 md:!mt-24 flex flex-col`}>
      <h2 className={`text-2xl font-semibold text-center mb-4`}>Contact Us</h2>
      <ul>
        <li>
          <Link
            to="opinions"
            className={`text-lg font-medium block mb-2 p-2 bg-[#5776a5] border-2 text-white rounded-2xl hover:text-[#5776a5] hover:bg-transparent hover:border-[#5776a5] duration-300`}
          >
            Opinions
          </Link>
        </li>
        <li>
          <Link
            to="complaints"
            className={`text-lg font-medium block mb-2 p-2 bg-[#5776a5] border-2 text-white rounded-2xl hover:text-[#5776a5] hover:bg-transparent hover:border-[#5776a5] duration-300`}
          >
            Complaints
          </Link>
        </li>
        <li>
          <Link
            to="questions"
            className={`text-lg font-medium block mb-2 p-2 bg-[#5776a5] border-2 text-white rounded-2xl hover:text-[#5776a5] hover:bg-transparent hover:border-[#5776a5] duration-300`}
          >
            Leave your question
          </Link>
        </li>
        <li>
          <Link
            to="specialRequest"
            className={`text-lg font-medium block mb-2 p-2 bg-[#5776a5] border-2 text-white rounded-2xl hover:text-[#5776a5] hover:bg-transparent hover:border-[#5776a5] duration-300`}
          >
            Special Request
          </Link>
        </li>
      </ul>
      <button className={`mb-2`}>Chat with Netzoon</button>
      <button className={`self-center`}>
        <Link
          to="mailNetzoon"
          className={` text-lg font-medium block mb-2 p-2 bg-[#5776a5] border-2 text-white rounded-2xl hover:text-[#5776a5] hover:bg-transparent hover:border-[#5776a5] duration-300`}
        >
          Send a Mail
        </Link>
      </button>
    </MainSection>
  );
};

export default ContactUs;
