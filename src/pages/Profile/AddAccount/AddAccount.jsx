import React, { useState, useEffect, useRef } from "react";
import MainSection from "../../../components/UI/MainSection";
import { useTranslation } from "react-i18next";

const AddAccount = () => {
  const { t } = useTranslation();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState(null); // State variable to store the user data
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    // Retrieve the user data from local storage when the component mounts
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  const submitHandler = async (e) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    e.preventDefault();
    const formData = new FormData();

    // Your fetch and form submission logic here
    // You can use the `user` state variable in your fetch request if needed

    // Example: Adding user data to the form data

    formData.append("email", user.result.email);
    formData.append("username", userNameRef.current.value);
    formData.append("password", passwordRef.current.value);

    // Add other user data fields as needed

    // Example: Sending the form data in a fetch request
    setSubmit(true);
    const response = await fetch(baseUrl + `/user/addaccount`, {
      method: "post",
      body: formData,
    });
    const data = await response.json();
    const responseOfUser = await fetch(
     baseUrl + `/user/getUser/${user.result._id}`
    );
    const responseOfUserData = await responseOfUser.json();
    const theDataToLocalStorage = {
      message: "Success",
      result: responseOfUserData,
      token: undefined,
    };
    window.localStorage.setItem("user", JSON.stringify(theDataToLocalStorage));
    window.alert(data.message === undefined ? data : data.message);
    console.log(data.message);
    setSubmit(false);
    window.location.reload();
    window.location.replace("/");
    // Handle the response as needed
  };

  return (
    <MainSection
      className={`!mt-52 md:!mt-28 min-h-[calc(100vh-200px)] flex justify-center items-center flex-col`}
    >
      <h2 className={`text-center text-2xl text-[#5776a5] font-medium mb-8`}>
        {t("add_account_text")}
      </h2>
      <form onSubmit={submitHandler}>
        {/* Your form components */}
        <div
          className={`flex items-center justify-between flex-col md:flex-row mb-6 pb-2 border-b-[1px] border-[#5776a5]`}
        >
          <label htmlFor="username" className={`text-xl mb-2 md:mb-0 `}>
            {t("username")}
          </label>
          <input
            id="username"
            type="text"
            ref={userNameRef}
            className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            required
          />
        </div>
        <div
          className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
        >
          <label htmlFor="password" className={`text-xl mb-2 md:mb-0 `}>
            {t("password")}
          </label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            required
          />
        </div>
        <button
          className={`px-4 py-1 bg-[#5776a5] border-2 border-transparent text-white duration-300 hover:bg-transparent hover:text-[#5776a5] hover:border-[#5776a5] rounded-lg`}
        >
          {submit === false ? t("add account") : t("adding account...")}
        </button>
      </form>
    </MainSection>
  );
};

export default AddAccount;
