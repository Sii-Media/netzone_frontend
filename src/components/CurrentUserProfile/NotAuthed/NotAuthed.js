import React from "react";
import { Link } from "react-router-dom";

const NotAuthed = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-[calc(100vh-200px)]`}
    >
      <h1 className={`text-2xl text-[#5776a5]`}>Greetings!</h1>
      <p className={`text-xl mb-4 text-center`}>
        You are Not Logged in Please Log in or Sign Up to Continue This Action
      </p>
      <div className={`w-[99%] md:w-96 flex items-center justify-between `}>
        <Link
          to="/signup"
          className={`px-2 bg-[#5776a5] border-[2px] border-[#5776a5] text-white rounded-2xl text-xl w-40 text-center py-1 hover:bg-transparent hover:text-[#5776a5] duration-300`}
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className={`px-2 bg-[#5776a5] border-[2px] border-[#5776a5] text-white rounded-2xl text-xl w-40 text-center py-1 hover:bg-transparent hover:text-[#5776a5] duration-300`}
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NotAuthed;
