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
  // const cou = useRef();
  // const emailRef = useRef();
  // const userNameRef = useRef();
  // const password = useRef();
  // const rePassword = useRef();
  // const firstMobile = useRef();
  // const secondeMobile = useRef();
  // const thirdMobile = useRef();
  // const bio = useRef();
  // const description = useRef();
  // const website = useRef();
  // const link = useRef();
  // const slogn = useRef();
  // const deliverable = useRef();
  // const subcategory = useRef();
  // const address = useRef();
  // const isFreeZoon = useRef();
  // const isService = useRef();
  // const companyProductsNumber = useRef();
  // const sellType = useRef();
  // const toCountry = useRef();
  // const tradeLicensePhoto = useRef();
  // const profilePhoto = useRef();
  // const coverPhoto = useRef();
  // const frontIdPhoto = useRef();
  // const backIdPhoto = useRef();
  // console.log(backIdPhoto);
  // useEffect(() => {
  //   console.log(userNameRef.current.value);
  // });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("userType", userTypeRef.current.value);
  //   formData.append("country", cou.current.value);
  //   formData.append("email", emailRef.current.value);
  //   formData.append("username", userNameRef.current.value.toString());
  //   formData.append("password", password.current.value);
  //   formData.append("firstMobile", firstMobile.current.value);
  //   formData.append("secondeMobile", secondeMobile.current.value);
  //   formData.append("thirdMobile", thirdMobile.current.value);
  //   formData.append("bio", bio.current.value);
  //   formData.append("description", description.current.value);
  //   formData.append("website", website.current.value);
  //   formData.append("link", link.current.value);
  //   formData.append("slogn", slogn.current.value);
  //   formData.append("deliverable", deliverable.current.value ? true : false);
  //   formData.append("subcategory", subcategory.current.value);
  //   formData.append("address", address.current.value);
  //   formData.append("isFreeZoon", isFreeZoon.current.value ? true : false);
  //   formData.append("isService", isService.current.value ? true : false);
  //   formData.append(
  //     "companyProductsNumber",
  //     companyProductsNumber.current.value
  //   );
  //   formData.append("sellType", sellType.current.value);
  //   formData.append("toCountry", toCountry.current.value);
  //   formData.append("tradeLicensePhoto", tradeLicenseFile);
  //   formData.append("profilePhoto", profilePhotoFile);
  //   formData.append("coverPhoto", coverPhotoFile);
  //   formData.append("frontIdPhoto", frontIdPhotoFile);
  //   formData.append("backIdPhoto", backIdPhotoFile);
  //   console.log(formData);

  //   console.log(formData.getAll("bio"));
  //   console.log(formData.getAll("description"));
  //   console.log(bio.current.value);
  //   console.log(description.current.value);
  //   try {
  //     const response = await fetch(
  //       "https://net-zoon.onrender.com/user/register",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     if (response.ok) {
  //       // Handle success
  //       console.log("Data sent successfully");
  //       const data = await response.json();
  //       console.log(data);
  //       window.sessionStorage.setItem("id", data.result._id);
  //       window.sessionStorage.setItem("id", data.result.username);
  //       window.alert("User Created, please go to LogIn page");
  //       navigate("/login");
  //     } else {
  //       const data = await response.json();
  //       // Handle error
  //       console.log(data);
  //       console.log(formData);
  //       window.alert("User not created, please check again :)");
  //       console.error("Error sending data");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const [passwordMatch, setPasswordMatch] = useState(false); // New state for password matching

  // const handlePasswordChange = () => {
  //   setPasswordMatch(password.current.value === rePassword.current.value);
  // };

  // const handleRePasswordChange = () => {
  //   setPasswordMatch(password.current.value === rePassword.current.value);
  // };
  return (
    <div
      className={`min-h-screen flex justify-center items-center flex-col py-10`}
    >
      <h2 className={`text-2xl font-semibold text-[#5776a5] mb-6`}>
        Signup to Netzoon
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
          {/* <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="email" className={`text-xl`}>
              {t("enterTheEmailId")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              ref={emailRef}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
              required
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="username" className={`text-xl`}>
              {t("enterTheUserName")}
            </label>
            <input
              id="username"
              type="text"
              name="username"
              required
              ref={userNameRef}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="password" className={`text-xl`}>
              {t("enterThePassword")}
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              onChange={handlePasswordChange}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
              ref={password}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="password" className={`text-xl`}>
              {t("enterThePasswordAgain")}
            </label>
            <input
              id="rePassword"
              type="password"
              name="rePassword"
              required
              onChange={handleRePasswordChange}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
              ref={rePassword}
            />
          </div>
          <div>
            <div
              className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
            >
              <label htmlFor="firstMobile" className={`text-xl`}>
                {t("enterTheContactNumber1")}
              </label>
              <input
                id="firstMobile"
                type="number"
                name="firstMobile"
                required
                ref={firstMobile}
                className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
              />
            </div>
            <div
              className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
            >
              <label htmlFor="secondeMobile" className={`text-xl`}>
                {t("enterTheContactNumber2IfAvailable")}
              </label>
              <input
                id="secondeMobile"
                type="number"
                name="secondeMobile"
                ref={secondeMobile}
                className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
              />
            </div>
            <div
              className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
            >
              <label htmlFor="thirdMobile" className={`text-xl`}>
                {t("enterTheContactNumber3IfAvailable")}
              </label>
              <input
                id="thirdMobile"
                type="number"
                name="thirdMobile"
                ref={thirdMobile}
                className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
              />
            </div>
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="bio" className={`text-xl`}>
              {t("enterTheBio")}
            </label>
            <textarea
              id="bio"
              name="bio"
              minLength={0}
              maxLength={300}
              ref={bio}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="description" className={`text-xl`}>
              {t("enterTheDescription")}
            </label>
            <textarea
              id="description"
              name="description"
              minLength={0}
              ref={description}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="website" className={`text-xl`}>
              {t("enterTheLink")}
            </label>
            <input
              id="website"
              type="text"
              name="website"
              ref={website}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="link" className={`text-xl`} s>
              {t("enterTheWebLink")}
            </label>
            <input
              id="link"
              type="text"
              name="link"
              ref={link}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="slogn" className={`text-xl`}>
              {t("enterTheSlogan")}
            </label>
            <input
              id="slogn"
              type="text"
              name="slogn"
              ref={slogn}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="deliverable" className={`text-xl`}>
              {t("isThereDelivery")}
            </label>
            <input
              type="checkbox"
              id="deliverable"
              name="deliverable"
              ref={deliverable}
              className={` ml-2 w-10 h-10 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="subcategory" className={`text-xl`} s>
              {t("enterTheSubcategory")}
            </label>
            <input
              id="subcategory"
              type="text"
              name="subcategory"
              ref={subcategory}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="address" className={`text-xl`}>
              {t("enterTheAddress")}
            </label>
            <input
              id="address"
              type="text"
              name="address"
              ref={address}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="cou" className={`text-xl`}>
              {t("country")}
            </label>
            <input
              id="cou"
              type="text"
              name="cou"
              required
              ref={cou}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="isFreeZoon" className={`text-xl`}>
              {t("affiliatedToFreeZone")}
            </label>
            <input
              type="checkbox"
              id="isFreeZoon"
              name="isFreeZoon"
              ref={isFreeZoon}
              className={` ml-2 w-10 h-10 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="isService" className={`text-xl`}>
              {t("doYouOfferServicesRatherThanProducts")}
            </label>
            <input
              type="checkbox"
              id="isService"
              name="isService"
              ref={isService}
              className={` ml-2 w-10 h-10 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="companyProductsNumber" className={`text-xl`}>
              {t("numberOfCompanyProducts")}
            </label>
            <input
              id="companyProductsNumber"
              type="number"
              name="companyProductsNumber"
              required
              ref={companyProductsNumber}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="sellType" className={`text-xl`}>
              {t("methodOfSaleRetailOrWholesale")}
            </label>
            <input
              id="sellType"
              type="text"
              name="sellType"
              ref={sellType}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div
            className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
          >
            <label htmlFor="toCountry" className={`text-xl`}>
              {t("whereToSellToWhichCountry")}
            </label>
            <input
              id="toCountry"
              type="text"
              name="toCountry"
              ref={toCountry}
              className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
            />
          </div>
          <div>
            <div
              className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
            >
              <label htmlFor="tradeLicensePhoto" className={`text-xl`} s>
                {t("copyOfTradeLicense")}
              </label>
              <input
              required
                id="tradeLicensePhoto"
                type="file"
                name="tradeLicensePhoto"
                ref={tradeLicensePhoto}
                multiple
                onChange={handleTradeLicenseChange}
              />
            </div>
            <div
              className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
            >
              <label htmlFor="profilePhoto" className={`text-xl`}>
                {t("profilePhoto")}
              </label>
              <input
              required
                id="profilePhoto"
                type="file"
                name="profilePhoto"
                ref={profilePhoto}
                multiple
                onChange={handleProfilePhotoChange}
              />
            </div>
            <div
              className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
            >
              <label htmlFor="coverPhoto" className={`text-xl`}>
                {t("coverPhoto")}
              </label>
              <input
              required
                id="coverPhoto"
                type="file"
                name="coverPhoto"
                ref={coverPhoto}
                multiple
                onChange={handleCoverPhotoChange}
              />
            </div>
            <div
              className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
            >
              <label htmlFor="frontIdPhoto" className={`text-xl`}>
                {t("frontIdPhoto")}
              </label>
              <input
              required
                id="frontIdPhoto"
                type="file"
                name="frontIdPhoto"
                ref={frontIdPhoto}
                multiple
                onChange={handleFrontIdPhotoChange}
              />
            </div>
            <div
              className={`flex items-center justify-between mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
            >
              <label htmlFor="backIdPhoto" className={`text-xl`}>
                {t("backIdPhoto")}
              </label>
              <input
              required
                id="backIdPhoto"
                type="file"
                name="backIdPhoto"
                ref={backIdPhoto}
                multiple
                onChange={handleBackIdPhotoChange}
              />
            </div>
          </div>*/}
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
          Next
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
