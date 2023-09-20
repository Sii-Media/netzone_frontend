import React, { useEffect, useState } from "react";
import MainSection from "../UI/MainSection";
import NotAuthed from "./NotAuthed/NotAuthed";
import { BsCart4, BsFillChatLeftTextFill } from "react-icons/bs";
import {
  MdOutlineRequestQuote,
  MdOutlineScreenShare,
  MdTrackChanges,
  MdViewList,
} from "react-icons/md";
import {
  AiFillEdit,
  AiFillHeart,
  AiOutlineAppstoreAdd,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineDoneAll } from "react-icons/md";
import { TbShoppingCart } from "react-icons/tb";
import { BiWallet } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const CurrentUserProfile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (window.localStorage.getItem("user")) {
      setUser(JSON.parse(window.localStorage.getItem("user")));
    }
  }, []);
  const { t } = useTranslation();
  return (
    <MainSection
      className={`flex flex-col  items-center w-[99%] lg::w-[900px] mx-auto  !mt-48 md:!mt-20`}
    >
      {user === null && <NotAuthed />}
      {user !== null &&
        (user.result.userType === "local_company" ||
          user.result.userType === "trader" ||
          user.result.userType === "freezone" ||
          user.result.userType === "factory") && (
          <>
            <div className={`w-full relative`}>
              <div
                className={`bg-gray-100 flex justify-center items-center w-[100%] lg:w-[820px] h-full lg:h-[312px] mx-auto`}
              >
                <img
                  src={user.result.coverPhoto}
                  alt={user.result.username}
                  className={`w-full h-full`}
                />
              </div>
              <div className={`absolute left-1/2 -translate-x-1/2 -bottom-20`}>
                <img
                  src={user.result.profilePhoto}
                  alt={user.result.username}
                  className={`rounded-full border-2 border-white w-28 lg:w-32`}
                />
              </div>
            </div>
            <div className={`mt-20 `}>
              <h2 className={`text-2xl font-semibold flex items-center mt-2`}>
                <Link to="/profile/switchAccount">
                  <AiOutlineUserSwitch
                    className={`text-[#5776a5] w-7 h-7 mr-2 cursor-pointer`}
                  />
                </Link>
                {user.result.username}
                <Link to="/profile/addAccount">
                  <AiOutlineAppstoreAdd
                    className={`text-[#5776a5] w-8 h-8 ml-2 cursor-pointer`}
                  />
                </Link>
              </h2>
            </div>
            <div
              className={`flex items-center justify-between flex-wrap w-[90%] md:w-1/2 mt-4 border-t border-gray-300 pt-4`}
            >
              <div
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <BsCart4 className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
                </div>
                <span className="whitespace-nowrap ">
                  Sold {user.result.isService ? t("services") : t("products")}
                </span>
              </div>
              <Link
                to="myOrders"
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <TbShoppingCart
                    className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                  />
                </div>
                <span>{t("Orders")}</span>
              </Link>
              <Link
                to="myCredit"
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <BiWallet className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
                </div>
                <span className={`whitespace-nowrap`}>
                  {t("NetZoon Credits")}
                </span>
              </Link>
              <div
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <MdOutlineScreenShare
                    className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                  />
                </div>
                <span>{t("popular")}</span>
              </div>
              <div
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <Link to="/chats" className={`flex flex-col items-center`}>
                  <div
                    className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                  >
                    <BsFillChatLeftTextFill
                      className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                    />
                  </div>
                  <span>{t("chat")}</span>
                </Link>
              </div>
              {/* <div
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <AiFillEdit className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
                </div>
                <span>Edit Profile</span>
              </div> */}
            </div>
            <div
              className={`flex items-center justify-between w-[90%] md:w-1/3 mt-5`}
            >
              <Link
                to="followings"
                className={`flex flex-col items-center justify-center`}
              >
                <span>{user.result.followings.length}</span>
                <span>{t("Followings")}</span>
              </Link>
              <Link
                to="followers"
                className={`flex flex-col items-center justify-center`}
              >
                <span>{user.result.followers.length}</span>
                <span>{t("Follower")}s</span>
              </Link>
              <Link
                to="views"
                className={`flex flex-col items-center justify-center`}
              >
                <span>{user.result.profileViews}</span>
                <span>{t("visitors")}</span>
              </Link>
            </div>
            <div
              className={`mt-5 flex justify-between items-center w-[90%] md:w-1/3`}
            >
              <NavLink
                end
                to="/profile"
                className={({ isActive }) =>
                  [
                    isActive ? "text-[#5776a5]" : "text-gray-500",
                    "block",
                    "text-center",
                    "text-xl",
                    "hover:text-[#5776a5]",
                    "transition-colors",
                    "duration-[300ms]",
                    "font-extrabold",
                  ].join(" ")
                }
              >
                {t("about_us")}
              </NavLink>
              <NavLink
                end
                to="/profile/products"
                className={({ isActive }) =>
                  [
                    isActive ? "text-[#5776a5]" : "text-gray-500",
                    "block",
                    "text-center",
                    "text-xl",
                    "hover:text-[#5776a5]",
                    "transition-colors",
                    "duration-[300ms]",
                    "font-extrabold",
                  ].join(" ")
                }
              >
                {user.result.isService ? t("services") : t("products")}
              </NavLink>
            </div>
          </>
        )}
      {/*!  !*/}
      {user !== null &&
        (user.result.userType === "planes" ||
          user.result.userType === "car" ||
          user.result.userType === "sea_company") && (
          <>
            <div className={`w-full relative`}>
              <div
                className={`h-64 overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
              >
                <img
                  src={user.result.coverPhoto}
                  alt={user.result.username}
                  // className={`w-full h-full`}
                />
              </div>
              <div className={`absolute left-1/2 -translate-x-1/2 -bottom-20`}>
                <img
                  src={user.result.profilePhoto}
                  alt={user.result.username}
                  className={`rounded-full border-2 border-white w-28 lg:w-32`}
                />
              </div>
            </div>
            <div className={`mt-20 `}>
              <h2 className={`text-2xl font-semibold flex items-center mt-2`}>
                <Link to="/profile/switchAccount">
                  <AiOutlineUserSwitch
                    className={`text-[#5776a5] w-7 h-7 mr-2 cursor-pointer`}
                  />
                </Link>
                {user.result.username}
                <Link to="/profile/addAccount">
                  <AiOutlineAppstoreAdd
                    className={`text-[#5776a5] w-8 h-8 ml-2 cursor-pointer`}
                  />
                </Link>
              </h2>
            </div>
            <div
              className={`flex items-center justify-between w-[90%] md:w-1/2 mt-4 border-t border-gray-300 pt-4`}
            >
              <div
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <BsCart4 className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
                </div>
                <span>
                  {user.result.userType === "car" && t("sold_cars")}
                  {user.result.userType === "planes" && t("sold_airplanes")}
                  {user.result.userType === "sea_company" && "Ships"}
                </span>
              </div>
              <Link
                to="myOrders"
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <TbShoppingCart
                    className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                  />
                </div>
                <span>{t("Orders")}</span>
              </Link>
              <Link
                to="myCredit"
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <BiWallet className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
                </div>
                <span className={`whitespace-nowrap`}>
                  {t("NetZoon Credits")}
                </span>
              </Link>
              <div
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <Link to="/chats" className={`flex flex-col items-center`}>
                  <div
                    className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                  >
                    <BsFillChatLeftTextFill
                      className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                    />
                  </div>
                  <span>{t("chat")}</span>
                </Link>
              </div>
              <div
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <AiFillEdit className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
                </div>
                <span>{t("edit_profile")}</span>
              </div>
            </div>
            <div
              className={`flex items-center justify-between w-[90%] md:w-1/3 mt-5`}
            >
              <Link
                to="followings"
                className={`flex flex-col items-center justify-center`}
              >
                <span>{user.result.followings.length}</span>
                <span>{t("Followings")}</span>
              </Link>
              <Link
                to="followers"
                className={`flex flex-col items-center justify-center`}
              >
                <span>{user.result.followers.length}</span>
                <span>{t("Followers")}</span>
              </Link>
              <Link
                to="views"
                className={`flex flex-col items-center justify-center`}
              >
                <span>{user.result.profileViews}</span>
                <span>{t("visitors")}</span>
              </Link>
            </div>
            <div
              className={`mt-5 flex justify-between items-center w-[90%] md:w-1/3`}
            >
              <NavLink
                end
                to="/profile"
                className={({ isActive }) =>
                  [
                    isActive ? "text-[#5776a5]" : "text-gray-500",
                    "block",
                    "text-center",
                    "text-xl",
                    "hover:text-[#5776a5]",
                    "transition-colors",
                    "duration-[300ms]",
                    "font-extrabold",
                  ].join(" ")
                }
              >
                {t("about_us")}
              </NavLink>
              <NavLink
                end
                to="/profile/products"
                className={({ isActive }) =>
                  [
                    isActive ? "text-[#5776a5]" : "text-gray-500",
                    "block",
                    "text-center",
                    "text-xl",
                    "hover:text-[#5776a5]",
                    "transition-colors",
                    "duration-[300ms]",
                    "font-extrabold",
                  ].join(" ")
                }
              >
                {user.result.userType === "car" && "Cars"}
                {user.result.userType === "planes" && "Planes"}
                {user.result.userType === "sea_company" && "Ships"}
              </NavLink>
            </div>
          </>
        )}
      {/*  */}
      {user !== null && user.result.userType === "real_estate" && (
        <>
          <div className={`w-full relative`}>
            <div
              className={`h-64 overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
            >
              <img
                src={user.result.coverPhoto}
                alt={user.result.username}
                // className={`w-full h-full`}
              />
            </div>
            <div className={`absolute left-1/2 -translate-x-1/2 -bottom-20`}>
              <img
                src={user.result.profilePhoto}
                alt={user.result.username}
                className={`rounded-full border-2 border-white w-28 lg:w-32`}
              />
            </div>
          </div>
          <div className={`mt-20 `}>
            <h2 className={`text-2xl font-semibold flex items-center mt-2`}>
              <Link to="/profile/switchAccount">
                <AiOutlineUserSwitch
                  className={`text-[#5776a5] w-7 h-7 mr-2 cursor-pointer`}
                />
              </Link>
              {user.result.username}
              <Link to="/profile/addAccount">
                <AiOutlineAppstoreAdd
                  className={`text-[#5776a5] w-8 h-8 ml-2 cursor-pointer`}
                />
              </Link>
            </h2>
          </div>
          <div
            className={`flex items-center justify-between w-[90%] md:w-1/2 mt-4 border-t border-gray-300 pt-4`}
          >
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <BsCart4 className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span>Sold Properties</span>
            </div>
            <Link
              to="myOrders"
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <TbShoppingCart
                  className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                />
              </div>
              <span>{t("Orders")}</span>
            </Link>
            <Link
              to="myCredit"
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <BiWallet className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span className={`whitespace-nowrap`}>
                {t("NetZoon Credits")}
              </span>
            </Link>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <Link to="/chats" className={`flex flex-col items-center`}>
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <BsFillChatLeftTextFill
                    className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                  />
                </div>
                <span>{t("chat")}</span>
              </Link>
            </div>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <AiFillEdit className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span>{t("edit_profile")}</span>
            </div>
          </div>
          <div
            className={`flex items-center justify-between w-[90%] md:w-1/3 mt-5`}
          >
            <Link
              to="followings"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.followings.length}</span>
              <span>{t("Followings")}</span>
            </Link>
            <Link
              to="followers"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.followers.length}</span>
              <span>{t("Followers")}</span>
            </Link>
            <Link
              to="views"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.profileViews}</span>
              <span>{t("visitors")}</span>
            </Link>
          </div>
          <div
            className={`mt-5 flex justify-between items-center w-[90%] md:w-1/3`}
          >
            <NavLink
              end
              to="/profile"
              className={({ isActive }) =>
                [
                  isActive ? "text-[#5776a5]" : "text-gray-500",
                  "block",
                  "text-center",
                  "text-xl",
                  "hover:text-[#5776a5]",
                  "transition-colors",
                  "duration-[300ms]",
                  "font-extrabold",
                ].join(" ")
              }
            >
              {t("about_us")}
            </NavLink>
            <NavLink
              end
              to="/profile/products"
              className={({ isActive }) =>
                [
                  isActive ? "text-[#5776a5]" : "text-gray-500",
                  "block",
                  "text-center",
                  "text-xl",
                  "hover:text-[#5776a5]",
                  "transition-colors",
                  "duration-[300ms]",
                  "font-extrabold",
                ].join(" ")
              }
            >
              {t("Real Estate")}
            </NavLink>
          </div>
        </>
      )}
      {/*  */}
      {user !== null && user.result.userType === "news_agency" && (
        <>
          <div className={`w-full relative`}>
            <div
              className={`h-64 overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
            >
              <img
                src={user.result.coverPhoto}
                alt={user.result.username}
                // className={`w-full h-full`}
              />
            </div>
            <div className={`absolute left-1/2 -translate-x-1/2 -bottom-20`}>
              <img
                src={user.result.profilePhoto}
                alt={user.result.username}
                className={`rounded-full border-2 border-white w-28 lg:w-32`}
              />
            </div>
          </div>
          <div className={`mt-20 `}>
            <h2 className={`text-2xl font-semibold flex items-center mt-2`}>
              <Link to="/profile/switchAccount">
                <AiOutlineUserSwitch
                  className={`text-[#5776a5] w-7 h-7 mr-2 cursor-pointer`}
                />
              </Link>
              {user.result.username}
              <Link to="/profile/addAccount">
                <AiOutlineAppstoreAdd
                  className={`text-[#5776a5] w-8 h-8 ml-2 cursor-pointer`}
                />
              </Link>
            </h2>
          </div>
          <div
            className={`flex items-center justify-between w-[90%] md:w-1/3 mt-4 border-t border-gray-300 pt-4`}
          >
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <Link
                to="myOrders"
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <TbShoppingCart
                    className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                  />
                </div>
                <span>{t("Orders")}</span>
              </Link>
              <Link to="/chats" className={`flex flex-col items-center`}>
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <BsFillChatLeftTextFill
                    className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                  />
                </div>
                <span>{t("chat")}</span>
              </Link>
            </div>
            <Link
              to="myCredit"
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <BiWallet className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span className={`whitespace-nowrap`}>
                {t("NetZoon Credits")}
              </span>
            </Link>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <AiFillEdit className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span>{t("edit_profile")}</span>
            </div>
          </div>
          <div
            className={`flex items-center justify-between w-[90%] md:w-1/3 mt-5`}
          >
            <Link
              to="followings"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.followings.length}</span>
              <span>{t("Followings")}</span>
            </Link>
            <Link
              to="followers"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.followers.length}</span>
              <span>{t("Followers")}</span>
            </Link>
            <Link
              to="views"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.profileViews}</span>
              <span>{t("visitors")}</span>
            </Link>
          </div>
          <div
            className={`mt-5 flex justify-between items-center w-[90%] md:w-1/3`}
          >
            <NavLink
              end
              to="/profile"
              className={({ isActive }) =>
                [
                  isActive ? "text-[#5776a5]" : "text-gray-500",
                  "block",
                  "text-center",
                  "text-xl",
                  "hover:text-[#5776a5]",
                  "transition-colors",
                  "duration-[300ms]",
                  "font-extrabold",
                ].join(" ")
              }
            >
              {t("about_us")}
            </NavLink>
            <NavLink
              end
              to="/profile/products"
              className={({ isActive }) =>
                [
                  isActive ? "text-[#5776a5]" : "text-gray-500",
                  "block",
                  "text-center",
                  "text-xl",
                  "hover:text-[#5776a5]",
                  "transition-colors",
                  "duration-[300ms]",
                  "font-extrabold",
                ].join(" ")
              }
            >
              {t("News")}
            </NavLink>
          </div>
        </>
      )}
      {/*  */}
      {user !== null && user.result.userType === "delivery_company" && (
        <>
          <div className={`w-full relative`}>
            <div
              className={`h-64 overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
            >
              <img
                src={user.result.coverPhoto}
                alt={user.result.username}
                // className={`w-full h-full`}
              />
            </div>
            <div className={`absolute left-1/2 -translate-x-1/2 -bottom-20`}>
              <img
                src={user.result.profilePhoto}
                alt={user.result.username}
                className={`rounded-full border-2 border-white w-28 lg:w-32`}
              />
            </div>
          </div>
          <div className={`mt-20 `}>
            <h2 className={`text-2xl font-semibold flex items-center mt-2`}>
              <Link to="/profile/switchAccount">
                <AiOutlineUserSwitch
                  className={`text-[#5776a5] w-7 h-7 mr-2 cursor-pointer`}
                />
              </Link>
              {user.result.username}
              <Link to="/profile/addAccount">
                <AiOutlineAppstoreAdd
                  className={`text-[#5776a5] w-8 h-8 ml-2 cursor-pointer`}
                />
              </Link>
            </h2>
          </div>
          <div
            className={`flex items-center justify-between flex-wrap w-[90%] md:w-1/3 mt-4 border-t border-gray-300 pt-4`}
          >
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <Link
                to="myOrders"
                className={`flex flex-col justify-center items-center w-[100px]`}
              >
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <TbShoppingCart
                    className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                  />
                </div>
                <span>{t("Orders")}</span>
              </Link>
              <Link to="/chats" className={`flex flex-col items-center`}>
                <div
                  className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
                >
                  <BsFillChatLeftTextFill
                    className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                  />
                </div>
                <span>{t("chat")}</span>
              </Link>
            </div>
            <Link
              to="myCredit"
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <BiWallet className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span className={`whitespace-nowrap`}>
                {t("NetZoon Credits")}
              </span>
            </Link>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <MdOutlineScreenShare
                  className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                />
              </div>
              <span className={`whitespace-nowrap`}>Recovered Request</span>
            </div>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <MdOutlineDoneAll
                  className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                />
              </div>
              <span>{t("done")}</span>
            </div>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <MdTrackChanges
                  className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                />
              </div>
              <span>{t("tracking")}</span>
            </div>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <MdOutlineRequestQuote
                  className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                />
              </div>
              <span className={`whitespace-nowrap`}>
                {t("current requests")}
              </span>
            </div>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <AiFillEdit className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span className={`whitespace-nowrap`}>{t("edit_profile")}</span>
            </div>
          </div>
          <div
            className={`flex items-center justify-between w-[90%] md:w-1/3 mt-5`}
          >
            <Link
              to="followings"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.followings.length}</span>
              <span>{t("Followings")}</span>
            </Link>
            <Link
              to="followers"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.followers.length}</span>
              <span>{t("Followers")}</span>
            </Link>
            <Link
              to="views"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.profileViews}</span>
              <span>{t("visitors")}</span>
            </Link>
          </div>
          <div
            className={`mt-5 flex justify-between items-center w-[90%] md:w-1/3`}
          >
            <NavLink
              end
              to="/profile"
              className={({ isActive }) =>
                [
                  isActive ? "text-[#5776a5]" : "text-gray-500",
                  "block",
                  "text-center",
                  "text-xl",
                  "hover:text-[#5776a5]",
                  "transition-colors",
                  "duration-[300ms]",
                  "font-extrabold",
                ].join(" ")
              }
            >
              {t("about_us")}
            </NavLink>
            <NavLink
              end
              to="/profile/products"
              className={({ isActive }) =>
                [
                  isActive ? "text-[#5776a5]" : "text-gray-500",
                  "block",
                  "text-center",
                  "text-xl",
                  "hover:text-[#5776a5]",
                  "transition-colors",
                  "duration-[300ms]",
                  "font-extrabold",
                ].join(" ")
              }
            >
              {t("services")}
            </NavLink>
          </div>
        </>
      )}
      {user !== null && user.result.userType === "user" && (
        <>
          <div className={`w-full relative`}>
            <div
              className={`h-64 overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
            >
              <img
                src={user.result.coverPhoto}
                alt={user.result.username}
                // className={`w-full h-full`}
              />
            </div>
            <div className={`absolute left-1/2 -translate-x-1/2 -bottom-20`}>
              <img
                src={user.result.profilePhoto}
                alt={user.result.username}
                className={`rounded-full border-2 border-white w-28 lg:w-32`}
              />
            </div>
          </div>
          <div className={`mt-20 `}>
            <h2 className={`text-2xl font-semibold flex items-center mt-2`}>
              <Link to="/profile/switchAccount">
                <AiOutlineUserSwitch
                  className={`text-[#5776a5] w-7 h-7 mr-2 cursor-pointer`}
                />
              </Link>
              {user.result.username}
              <Link to="/profile/addAccount">
                <AiOutlineAppstoreAdd
                  className={`text-[#5776a5] w-8 h-8 ml-2 cursor-pointer`}
                />
              </Link>
            </h2>
          </div>
          <div
            className={`flex items-center justify-between flex-wrap w-[90%] md:w-1/2 mt-4 border-t border-gray-300 pt-4`}
          >
            <Link
              to="myOrders"
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <TbShoppingCart
                  className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                />
              </div>
              <span>{t("Orders")}</span>
            </Link>
            <Link
              to="myOrders"
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <TbShoppingCart
                  className={`w-4 md:w-7 h-4 md:h-7 text-white`}
                />
              </div>
              <span>{t("Orders")}</span>
            </Link>
            <Link
              to="myCredit"
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <BiWallet className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span className={`whitespace-nowrap`}>
                {t("NetZoon Credits")}
              </span>
            </Link>
            <Link
              to="userProducts"
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <MdViewList className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span>{t("my_products")}</span>
            </Link>
            <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                <AiFillHeart className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span>{t("Favorites")}</span>
            </div>
            {/* <div
              className={`flex flex-col justify-center items-center w-[100px]`}
            >
              <div
                className={`flex justify-center items-center p-2 rounded-full bg-[#5776a5]`}
              >
                ! <AiFillEdit className={`w-4 md:w-7 h-4 md:h-7 text-white`} />
              </div>
              <span className={`whitespace-nowrap`}>{t("edit_profile")}</span>
            </div> */}
          </div>
          <div
            className={`flex items-center justify-between w-[90%] md:w-1/3 mt-5`}
          >
            <Link
              to="followings"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.followings.length}</span>
              <span>{t("Followings")}</span>
            </Link>
            <Link
              to="followers"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.followers.length}</span>
              <span>{t("Followers")}</span>
            </Link>
            <Link
              to="views"
              className={`flex flex-col items-center justify-center`}
            >
              <span>{user.result.profileViews}</span>
              <span>{t("visitors")}</span>
            </Link>
          </div>
        </>
      )}
    </MainSection>
  );
};

export default CurrentUserProfile;
