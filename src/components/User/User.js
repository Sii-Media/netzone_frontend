import React, { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import MainSection from "../UI/MainSection";
import { BsLink } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import RatingSystem from "../UI/RatingSystem";
import ShareLink from "../UI/ShareLink";
import { useTranslation } from "react-i18next";
const User = () => {
  const [user, setUser] = useState(null);
  const data = useLoaderData();

  const [followStatus, setFollowStatus] = useState(
    window.localStorage.getItem("user")
      ? data.data.followers.includes(
          JSON.parse(window.localStorage.getItem("user")).result._id
        )
      : false
  );

  const handleFollowButton = () => {
    setFollowStatus(!followStatus);
  };

  const param = useParams();
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      setUser(JSON.parse(window.localStorage.getItem("user")));
    }
  }, []);
  const followButtonHandler = async () => {
    setFollowStatus(!followStatus);
    const formData = new FormData();
    formData.append("currentUserId", user.result._id);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const response = await fetch(
      baseUrl + `/user/toggleFollow/${param.userId}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    const data = await response.json();

  };

  const { t } = useTranslation();
  return (
    <MainSection
      className={`!mt-32 md:!mt-20 !px-0 mb-4 w-full lg:w-[800px] mx-auto relative`}
    >
      <div
        className={`overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
      >
        <img src={data.data.coverPhoto} alt={data.data._id} className="h-60" />
      </div>
      <div className={`flex items-center justify-between w-[90%] mx-auto`}>
        <img
          src={data.data.profilePhoto}
          alt={data.data._id}
          className={`w-24 h-24 md:w-40 md:h-40 rounded-full  border-4 border-white `}
        />
        <div
          className={`flex flex-col mt-9 md:mt-0 md:flex-row  justify-between w-full h-auto`}
        >
          <div className={`ml-8`}>
            <h2 className={`text-2xl font-semibold pt-2`}>
              {t(data.data.username)}
            </h2>
            <h3 className={`text-sm font-medium text-gray-600 mb-2`}>
              {t(data.data.slogn) ? t(data.data.slogn) : ""}
            </h3>
            <div className={`flex`}>
              <span className={`mr-2 text-gray-600 pt-[0.1rem]`}>
                {+data.data.averageRating.toFixed(2)}
              </span>
              <Link to="rateUser">
                <RatingSystem value={data.data.averageRating} />
              </Link>
              <span className={`ml-2 text-gray-600`}>
                ({data.data.totalRatings}
                {t("review")})
              </span>
            </div>
          </div>
          <div className={`flex items-center ml-8`}>
            <ShareLink />
            <button
              disabled={user === null ? true : false}
              onClick={followButtonHandler}
              className={`px-4 mt-0 bg-[#5776a5] rounded-3xl text-white text-xl font-medium hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5] self-center`}
            >
              {followStatus ? t("unfollow") : t("follow")}
            </button>
          </div>
        </div>
      </div>
      <div className={`mt-12 md:mt-2 text-xl px-8 w-[90%] mx-auto`}>
        <p>{t(data.data.bio)}</p>
      </div>
      <div className={`flex px-8 items-center mt-2 w-[90%] mx-auto`}>
        <BsLink className={`mr-2`} />
        <a href={data.data.link} target="_blank" rel="noreferrer">
          {t(data.data.link)}
        </a>
      </div>
      <div className="flex justify-between items-center w-[60%] md:w-[50%] mx-auto mt-4 mb-4">
        <div className={``}>
          <Link to="followings">
            <span
              className={`text-lg font-semibold flex flex-col items-center`}
            >
              {data.data.followings.length}
            </span>
            <span>{t("following")}</span>
          </Link>
        </div>
        <div className={``}>
          <Link to="followers">
            <span
              className={`text-lg font-semibold flex flex-col items-center`}
            >
              {data.data.followers.length}
            </span>
            <span>{t("followers")}</span>
          </Link>
        </div>
        <div className={``}>
          <span className={`text-lg font-semibold flex flex-col items-center`}>
            {data.data.profileViews}
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
        className={`w-[90%] mx-auto flex justify-between items-center mt-4  border-t-[1px] px-4 border-[#5776a5] [&>*]:text-base md:[&>*]:text-xl [&>*]:font-semibold [&>*]:p-2`}
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
          to={`/catagories/${param.routeId}/${param.currency}/${param.userId}`}
        >
          {data.data.userType === "local_company"
            ? data.data.isService === true
              ? t("services")
              : t("products")
            : data.data.userType === "car"
            ? t("cars")
            : data.data.userType === "user"
            ? t("products")
            : data.data.userType === "planes"
            ? t("aircraft")
            : data.data.userType === "real_estate"
            ? t("real_estate")
            : data.data.userType === "trader"
            ? t("products")
            : data.data.userType === "delivery_company"
            ? t("services")
            : ""}
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
          {data.data.userType === "user"
            ? t("companies_products")
            : t("my_ads")}
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
          {data.data.userType === "user" ? t("my_info") : t("about_us")}
        </NavLink>
      </nav>
    </MainSection>
  );
};

export default User;
