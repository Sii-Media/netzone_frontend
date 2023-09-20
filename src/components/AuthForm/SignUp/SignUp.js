import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const options = [
    { value: "", label: "Select an option" },
    { value: "local_company", label: "local companies" },
    { value: "real_estate", label: "Real Estate" },
    { value: "trader", label: "Trader" },
    { value: "car", label: "Cars" },
    { value: "sea_companies", label: "Sea Companies" },
    { value: "user", label: "Clients" },
    { value: "freezone", label: "Free Zone" },
    { value: "factory", label: "Factories" },
    { value: "news_agency", label: "New Agency" },
    { value: "delivery_company", label: "Delivery Company" },
  ];

  // const [tradeLicenseFile, setTradeLicenseFile] = useState(null);
  // const [profilePhotoFile, setProfilePhotoFile] = useState(null);
  // const [coverPhotoFile, setCoverPhotoFile] = useState(null);
  // const [frontIdPhotoFile, setFrontIdPhotoFile] = useState(null);
  // const [backIdPhotoFile, setBackIdPhotoFile] = useState(null);
  // console.log(profilePhotoFile);
  // const handleTradeLicenseChange = (event) => {
  //   setTradeLicenseFile(event.target.files[0]);
  // };

  // const handleProfilePhotoChange = (event) => {
  //   setProfilePhotoFile(event.target.files[0]);
  // };

  // const handleCoverPhotoChange = (event) => {
  //   setCoverPhotoFile(event.target.files[0]);
  // };

  // const handleFrontIdPhotoChange = (event) => {
  //   setFrontIdPhotoFile(event.target.files[0]);
  // };

  // const handleBackIdPhotoChange = (event) => {
  //   setBackIdPhotoFile(event.target.files[0]);
  // };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const userTypeRef = useRef();

  return (
    <div
      className={`min-h-screen flex justify-center items-center flex-col py-10`}
    >
      <h2 className={`text-2xl font-semibold text-[#5776a5] mb-6`}>
        {t("Signup to Netzoon")}
      </h2>
      <form>
        <div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="userType" className={`text-xl`}>
              {t("selectTheUserType")}
            </label>
            <select
              required
              ref={userTypeRef}
              id="userType"
              name="userType"
              value={selectedOption}
              onChange={handleOptionChange}
              className={`outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300 `}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* <button
          type="submit"
          className={`w-24 flex justify-center items-center border-2 bg-[#5776a5] border-[#5776a5] rounded-xl text-white hover:bg-transparent hover:text-[#5776a5] duration-300`}
        >
          {t("Next")}
        </button> */}
        <Link
          className={`border-2 border-[#5776a5] px-4 py-1 rounded-lg bg-[#5776a5] hover:bg-transparent text-white hover:text-[#5776a5] duration-300`}
          to={selectedOption}
        >
          {t("next")}
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
