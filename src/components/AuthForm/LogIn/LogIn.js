import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { t } = useTranslation();
  const email = useRef();
  const password = useRef();
  const [submit, setSubmit] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;


    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email.current.value.toString());
    formData.append("password", password.current.value.toString());
    setSubmit(true);
    try {
      const response = await fetch(baseUrl + "/user/signin", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success
        console.log("Data sent successfully");
        const data = await response.json();
        window.localStorage.setItem("user", JSON.stringify(data));
        navigate("/profile");
      } else {
        const data = await response.json();
        setServerMessage(data);
        window.alert("Error Sending Data, please check your credentials");
        console.error("Error sending data");
      }
      setSubmit(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`h-screen flex justify-center items-center flex-col`}>
      <form onSubmit={handleSubmit} className={`flex flex-col`}>
        <div className={`flex items-center mb-4`}>
          <label htmlFor="email" className={`w-20`}>
            {t("email")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t("enterYourMailId")}
            required
            ref={email}
            className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
          />
        </div>

        <div className={`flex items-center mb-4`}>
          <label htmlFor="password" className={`w-20`}>
            {t("password")}
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder={t("enterYourPassword")}
            required
            ref={password}
            className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
          />
        </div>
        <div className={`flex justify-center mb-4`}>
          <button
            className={`w-24 flex justify-center items-center border-2 bg-[#5776a5] border-[#5776a5] rounded-xl text-white hover:bg-transparent hover:text-[#5776a5] duration-300`}
          >
            {submit ? t("Submitting...") : t("submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
