import React, { useEffect, useRef, useState } from "react";
import MainSection from "../../../components/UI/MainSection";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/netzoon-logo.png";
import styles from "./SignUpInfoPage.module.css";
const SignUpInfoPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const params = useParams();
  const [submitStatus, setSubmitStatus] = useState("SignUp");
  const [tradeLicenseFile, setTradeLicenseFile] = useState(null);
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);
  const [coverPhotoFile, setCoverPhotoFile] = useState(null);
  const [frontIdPhotoFile, setFrontIdPhotoFile] = useState(null);
  const [backIdPhotoFile, setBackIdPhotoFile] = useState(null);
  const [isDeliverable, setIsDeliverable] = useState(false);
  const [isFreeZone, setIsFreeZone] = useState(false);
  const [isServiceChecked, setIsServiceChecked] = useState(false);

  const handleTradeLicenseChange = (event) => {
    setTradeLicenseFile(event.target.files[0]);
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhotoFile(event.target.files[0]);
  };

  const handleCoverPhotoChange = (event) => {
    setCoverPhotoFile(event.target.files[0]);
  };

  const handleFrontIdPhotoChange = (event) => {
    setFrontIdPhotoFile(event.target.files[0]);
  };

  const handleBackIdPhotoChange = (event) => {
    setBackIdPhotoFile(event.target.files[0]);
  };

  const userTypeRef = useRef();
  const cou = useRef();
  const emailRef = useRef();
  const userNameRef = useRef();
  const password = useRef();
  const rePassword = useRef();
  const firstMobile = useRef();
  const secondeMobile = useRef();
  const thirdMobile = useRef();
  const bio = useRef();
  const description = useRef();
  const website = useRef();
  const link = useRef();
  const slogn = useRef();
  const subcategory = useRef();
  const address = useRef();
  const companyProductsNumber = useRef();
  const sellType = useRef();
  const toCountry = useRef();
  const tradeLicensePhoto = useRef();
  const profilePhoto = useRef();
  const coverPhoto = useRef();
  const frontIdPhoto = useRef();
  const backIdPhoto = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const formData = new FormData();
    console.log("not user");
    formData.append("userType", params.userType);
    formData.append("country", cou.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("username", userNameRef.current.value.toString());
    formData.append("password", password.current.value);
    formData.append("firstMobile", firstMobile.current.value);
    formData.append("secondeMobile", secondeMobile.current.value);
    formData.append("thirdMobile", thirdMobile.current.value);
    formData.append("bio", bio.current.value);
    formData.append("description", description.current.value);
    formData.append("website", website.current.value);
    formData.append("link", link.current.value);
    formData.append("slogn", slogn.current.value);
    // formData.append("deliverable", deliverable.current.checked ? true : false);
    formData.append("subcategory", subcategory.current.value);
    formData.append("address", address.current.value);
    // formData.append("isFreeZoon", isFreeZoon.current.checked ? true : false);
    // formData.append("isService", isService.current.checked ? true : false);
    formData.append("deliverable", isDeliverable);
    formData.append("isFreeZoon", isFreeZone);
    formData.append("isService", isServiceChecked);

    formData.append(
      "companyProductsNumber",
      companyProductsNumber.current.value
    );
    formData.append("sellType", sellType.current.value);
    formData.append("toCountry", toCountry.current.value);
    formData.append("tradeLicensePhoto", tradeLicenseFile);
    formData.append("profilePhoto", profilePhotoFile);
    formData.append("coverPhoto", coverPhotoFile);
    formData.append("frontIdPhoto", frontIdPhotoFile);
    formData.append("backIdPhoto", backIdPhotoFile);
    setSubmitStatus("Wait Submitting...");
    formData.forEach((ele) => console.log(ele));
    try {
      const response = await fetch(baseUrl + "/user/register", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        // Handle success
        console.log("Data sent successfully");
        const data = await response.json();
        console.log(data);
        window.localStorage.setItem("user", JSON.stringify(data));
        window.alert("User Created, please go to LogIn page");
        navigate("/profile");
        setSubmitStatus("Done");
      } else {
        const data = await response.json();
        // Handle error
        console.log(data);
        console.log(formData);
        window.alert("User not created, please check again :)");
        console.error("Error sending data");
        navigate("/");
        setSubmitStatus("Submit");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [passwordMatch, setPasswordMatch] = useState(false); // New state for password matching

  const handlePasswordChange = () => {
    setPasswordMatch(password.current.value === rePassword.current.value);
  };

  const handleRePasswordChange = () => {
    setPasswordMatch(password.current.value === rePassword.current.value);
  };

  return (
    <MainSection className={`!mt-52 md:!mt-36`}>
      <h2 className={`text-3xl font-medium text-[#5776a5] text-center mb-8`}>
        Welcome you are signing in as a {params.userType}
      </h2>
      {(params.userType === "local_company" ||
        params.userType === "real_estate" ||
        params.userType === "trader" ||
        params.userType === "user" ||
        params.userType === "car" ||
        params.userType === "sea_companies" ||
        params.userType === "freezone" ||
        params.userType === "factory" ||
        params.userType === "news_agency" ||
        params.userType === "delivery_company") && (
        <form onSubmit={handleSubmit} className={``}>
          <div
            className={`flex justify-between flex-col-reverse lg:flex-row w-[90%] mx-auto`}
          >
            <div className={`py-2 px-2 bg-[#5776A5] bg-opacity-10 rounded-2xl`}>
              <div
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="email" className={`text-xl mb-2 md:mb-0 `}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="username" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="password" className={`text-xl mb-2 md:mb-0`}>
                  {t("enterThePassword")}
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  min={9}
                  onChange={handlePasswordChange}
                  className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                  ref={password}
                />
              </div>
              <div
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="password" className={`text-xl mb-2 md:mb-0`}>
                  {t("enterThePasswordAgain")}
                </label>
                <input
                  id="rePassword"
                  type="password"
                  name="rePassword"
                  required
                  min={9}
                  onChange={handleRePasswordChange}
                  className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                  ref={rePassword}
                />
              </div>
              <div>
                <div
                  className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
                >
                  <label
                    htmlFor="firstMobile"
                    className={`text-xl mb-2 md:mb-0`}
                  >
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
                  className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
                >
                  <label
                    htmlFor="secondeMobile"
                    className={`text-xl mb-2 md:mb-0`}
                  >
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
                  className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
                >
                  <label
                    htmlFor="thirdMobile"
                    className={`text-xl mb-2 md:mb-0`}
                  >
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="bio" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="description" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="website" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between  flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="link" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="slogn" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="deliverable" className={`text-xl mb-2 md:mb-0`}>
                  {t("isThereDelivery")}
                </label>
                <input
                  type="checkbox"
                  id="deliverable"
                  name="deliverable"
                  checked={isDeliverable}
                  className={` ml-2 w-10 h-10 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                  onChange={(e) => setIsDeliverable(e.target.checked)}
                />
              </div>

              <div
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="subcategory" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="address" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="cou" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="isFreeZoon" className={`text-xl mb-2 md:mb-0`}>
                  {t("affiliatedToFreeZone")}
                </label>
                <input
                  type="checkbox"
                  id="isFreeZoon"
                  name="isFreeZoon"
                  checked={isFreeZone}
                  className={` ml-2 w-10 h-10 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                  onChange={(e) => setIsFreeZone(e.target.checked)}
                />
              </div>

              <div
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="isService" className={`text-xl mb-2 md:mb-0`}>
                  {t("doYouOfferServicesRatherThanProducts")}
                </label>
                <input
                  type="checkbox"
                  id="isService"
                  name="isService"
                  checked={isServiceChecked}
                  onChange={(e) => setIsServiceChecked(e.target.checked)}
                  className={` ml-2 w-10 h-10 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                />
              </div>

              <div
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label
                  htmlFor="companyProductsNumber"
                  className={`text-xl mb-2 md:mb-0`}
                >
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="sellType" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="toCountry" className={`text-xl mb-2 md:mb-0`}>
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

              <div
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label
                  htmlFor="tradeLicensePhoto"
                  className={`text-xl mb-2 md:mb-0`}
                >
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label
                  htmlFor="profilePhoto"
                  className={`text-xl mb-2 md:mb-0`}
                >
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="coverPhoto" className={`text-xl mb-2 md:mb-0`}>
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label
                  htmlFor="frontIdPhoto"
                  className={`text-xl mb-2 md:mb-0`}
                >
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
                className={`flex items-center justify-between flex-col md:flex-row mb-4 pb-2 border-b-[1px] border-[#5776a5]`}
              >
                <label htmlFor="backIdPhoto" className={`text-xl mb-2 md:mb-0`}>
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
            </div>
            <div className={`flex flex-col items-center`}>
              <img
                src={logo}
                alt={logo.toString().slice(0, 3)}
                className={`w-[200px] md:w-[400px] ${styles.logo} opacity-20`}
              />
              <p
                className={`text-2xl text-[#5776a5] font-semibold text-center mt-8`}
              >
                Stay Connected, Stay Satisfied with Netzoon
              </p>
              <p
                className={`mt-8 text-xl font-medium text-[#5776a5] text-center`}
              >
                Already you have an account on Netzoon!{" "}
                <Link to={"/login"} className={`underline`}>
                  Sign in from here
                </Link>
              </p>
            </div>
          </div>
          <div className={`mt-4 mb-8 flex w-[90%] mx-auto`}>
            <button
              disabled={!passwordMatch}
              className={`py-1 px-2 bg-[#5776a5] border-2 border-[#5776a5] text-white text-xl hover:text-[#5776a5] hover:bg-transparent duration-300 rounded-md`}
            >
              {submitStatus}
            </button>
          </div>
        </form>
      )}
    </MainSection>
  );
};

export default SignUpInfoPage;
