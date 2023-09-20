import React, { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import MainSection from "../../UI/MainSection";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import RatingSystem from "../../UI/RatingSystem";
import ShareLink from "../../UI/ShareLink";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const User = () => {
  const data = useLoaderData();

  const param = useParams();

  const [dataToUse] = data.factory.filter((ele) => param.facId === ele._id);

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const [user, setUser] = useState(null);
  const [followStatus, setFollowStatus] = useState(
    window.localStorage.getItem("user")
      ? dataToUse.followers.includes(
          JSON.parse(window.localStorage.getItem("user")).result._id
        )
      : false
  );
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      setUser(JSON.parse(window.localStorage.getItem("user")));
    }
  }, []);
  const followButtonHandler = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    setFollowStatus(!followStatus);
    const formData = new FormData();
    formData.append("currentUserId", user.result._id);
    const response = await fetch(
      baseUrl + `/user/toggleFollow/${param.facId}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    const data = await response.json();

  };
  const { t } = useTranslation();
  return (
    // <MainSection
    //   className={`!mt-28 md:!mt-[4.6rem] !px-0 mb-4 w-full lg:w-[800px] mx-auto relative`}
    // ></MainSection>
    <MainSection
      className={`!mt-28 md:!mt-[4.6rem] !px-0 mb-4 w-full lg:w-[800px] mx-auto relative`}
    >
      <div
        className={`h-64 overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
      >
        <img src={dataToUse.coverPhoto} alt={dataToUse.username} className="" />
      </div>
      <div
        className={`flex items-center justify-between w-[90%] absolute top-56 left-1/2 -translate-x-1/2 !mt-14 md:!mt-0`}
      >
        <img
          src={dataToUse.profilePhoto}
          alt={dataToUse.username}
          className={`w-24 h-24 md:w-40 md:h-40 rounded-full  border-4 border-white `}
        />
        <div
          className={`flex flex-col md:flex-row items-center justify-between w-full h-auto`}
        >
          <div className={`ml-8`}>
            <h2 className={`text-2xl font-semibold pt-2`}>
              {t(dataToUse.username)}
            </h2>
            <h3 className={`text-sm font-medium text-gray-600 mb-2`}>
              {dataToUse.userType
                ? t(dataToUse.userType)
                : "No Slogan to display"}
            </h3>
            <div className={`flex`}>
              <span className={`mr-2 text-gray-600 pt-[0.1rem]`}>
                {+dataToUse.averageRating.toFixed(2)}
              </span>
              <RatingSystem value={dataToUse.averageRating} />
              <span className={`ml-2 text-gray-600`}>
                ({dataToUse.totalRatings}
                {t("review")})
              </span>
            </div>
          </div>
          <div className={`flex items-center`}>
            <ShareLink />
            <button
              disabled={user === null ? true : false}
              onClick={followButtonHandler}
              className={`px-4 mt-0 bg-[#5776a5] rounded-3xl text-white text-xl font-medium hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5] self-center disabled:cursor-not-allowed`}
            >
              {followStatus ? t("unfollow") : t("follow")}
            </button>
          </div>
        </div>
      </div>
      <div className={`mt-40 text-xl px-8 w-[90%] mx-auto`}>
        <p>Bio</p>
      </div>
      {/* <div className={`flex px-8 items-center mt-2 w-[90%] mx-auto`}>
        <BsLink className={`mr-2`} />
        <a href={dataToUse.link} target="_blank" rel="noreferrer">
          {data.data.link}
        </a>
      </div> */}
      <div className="flex justify-between items-center w-[70%] mx-auto mt-4 mb-4">
        <div className={``}>
          <Link to="followings">
            <span
              className={`text-lg font-semibold flex flex-col items-center`}
            >
              {dataToUse.followings.length}
            </span>
            <span>{t("following")}</span>
          </Link>
        </div>
        <div className={``}>
          <Link to="followers">
            <span
              className={`text-lg font-semibold flex flex-col items-center`}
            >
              {dataToUse.followers.length}
            </span>
            <span>{t("followers")}</span>
          </Link>
        </div>
        <div className={``}>
          <span className={`text-lg font-semibold flex flex-col items-center`}>
            {dataToUse.profileViews}
          </span>
          <span>{t("visitors")}</span>
        </div>
      </div>
      <div
        className={`flex justify-between items-center mt-2 w-[90%] md:w-[calc(13rem*2+1rem)] mx-auto`}
      >
        <button
          className={`w-36 md:w-52 flex justify-center items-center p-1 md:p-2 bg-[#5776a5] rounded-2xl text-white text-sm md:text-xl hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5]`}
        >
          <RiMoneyDollarCircleLine /> {t("Live Auction")}
        </button>
        <Link
          to="/chats"
          className={`w-36 md:w-52 flex justify-center items-center p-1 md:p-2 bg-[#5776a5] rounded-2xl text-white text-sm md:text-xl hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5]`}
        >
          <BiMessageDetail />
          {t("customers service")}
        </Link>
      </div>
      <nav
        className={`w-[90%] mx-auto flex justify-between items-center mt-4  border-t-[1px] px-4 border-[#5776a5] text-xs md:[&>*]:text-xl [&>*]:font-semibold [&>*]:p-2`}
      >
        <NavLink
          className={({ isActive }) =>
            [
              isActive ? "text-[#5776a5]" : "text-black",
              "block",
              "text-center",
              "hover:text-[#5776a5]",
              "transition-colors",
              "duration-[300ms]",
              "font-extrabold",
            ].join(" ")
          }
          end
          to={`/catagories/factory/${param.typeId}/${selectedCurrency}/${param.facId}`}
        >
          {t("production services")}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            [
              isActive ? "text-[#5776a5]" : "text-black",
              "block",
              "text-center",
              "hover:text-[#5776a5]",
              "transition-colors",
              "duration-[300ms]",
              "font-extrabold",
            ].join(" ")
          }
          end
          to="ads"
        >
          {t("products")}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            [
              isActive ? "text-[#5776a5]" : "text-black",
              "block",
              "text-center",
              "hover:text-[#5776a5]",
              "transition-colors",
              "duration-[300ms]",
              "font-extrabold",
            ].join(" ")
          }
          to="about"
          end
        >
          {t("my_info")}
        </NavLink>
      </nav>
    </MainSection>
  );
};

export default User;
