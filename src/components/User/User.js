import React, { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import MainSection from "../UI/MainSection";
import { BsLink } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import RatingSystem from "../UI/RatingSystem";
import ShareLink from "../UI/ShareLink";
const User = () => {
  const [user, setUser] = useState(null);
  const data = useLoaderData();
  console.log(data);
  const [followStatus, setFollowStatus] = useState(
    window.localStorage.getItem("user")
      ? data.data.followers.includes(
          JSON.parse(window.localStorage.getItem("user")).result._id
        )
      : false
  );
  console.log();
  const handleFollowButton = () => {
    setFollowStatus(!followStatus);
  };
  console.log(data);
  console.log();
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
    const response = await fetch(
      `https://net-zoon.onrender.com/user/toggleFollow/${param.userId}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <MainSection
      className={`!mt-28 md:!mt-[4.6rem] !px-0 mb-4 w-full lg:w-[800px] mx-auto relative`}
    >
      <div
        className={`h-64 overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
      >
        <img src={data.data.coverPhoto} alt={data.data._id} className="" />
      </div>
      <div
        className={`flex items-center justify-between w-[90%] absolute top-56 left-1/2 -translate-x-1/2`}
      >
        <img
          src={data.data.profilePhoto}
          alt={data.data._id}
          className={`w-24 h-24 md:w-40 md:h-40 rounded-full  border-4 border-white `}
        />
        <div
          className={`flex flex-col md:flex-row items-center justify-between w-full h-auto`}
        >
          <div className={`ml-8`}>
            <h2 className={`text-2xl font-semibold pt-2`}>
              {data.data.username}
            </h2>
            <h3 className={`text-sm font-medium text-gray-600 mb-2`}>
              {data.data.slogn ? data.data.slogn : "No Slogan to display"}
            </h3>
            <div className={`flex`}>
              <span className={`mr-2 text-gray-600 pt-[0.1rem]`}>
                {data.data.averageRating}
              </span>
              <RatingSystem value={data.data.averageRating} />
              <span className={`ml-2 text-gray-600`}>
                ({data.data.totalRatings}Reviews)
              </span>
            </div>
          </div>
          <div className={`flex items-center`}>
            <ShareLink />
            <button
              disabled={user === null ? true : false}
              onClick={followButtonHandler}
              className={`px-4 mt-0 bg-[#5776a5] rounded-3xl text-white text-xl font-medium hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5] self-center`}
            >
              {followStatus ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </div>
      <div className={`mt-32 md:mt-40 text-xl px-8 w-[90%] mx-auto`}>
        <p>{data.data.bio}</p>
      </div>
      <div className={`flex px-8 items-center mt-2 w-[90%] mx-auto`}>
        <BsLink className={`mr-2`} />
        <a href={data.data.link} target="_blank" rel="noreferrer">
          {data.data.link}
        </a>
      </div>
      <div className="flex justify-center items-center w-[90%] mx-auto">
        <div className={` mr-8`}>
          <Link to="followings">
            <span
              className={`text-lg font-semibold flex flex-col items-center`}
            >
              {data.data.followings.length}
            </span>
            <span>Following</span>
          </Link>
        </div>
        <div className={``}>
          <Link to="followers">
            <span
              className={`text-lg font-semibold flex flex-col items-center`}
            >
              {data.data.followers.length}
            </span>
            <span>Followers</span>
          </Link>
        </div>
      </div>
      <div
        className={`flex justify-between items-center mt-2 w-[90%] md:w-[calc(13rem*2+1rem)] mx-auto`}
      >
        <button
          className={`w-36 md:w-52 flex justify-center items-center p-1 md:p-2 bg-[#5776a5] rounded-2xl text-white text-sm md:text-xl hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5]`}
        >
          <RiMoneyDollarCircleLine /> Live Auction
        </button>
        <button
          className={`w-36 md:w-52 flex justify-center items-center p-1 md:p-2 bg-[#5776a5] rounded-2xl text-white text-sm md:text-xl hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5]`}
        >
          <BiMessageDetail />
          Customer Support
        </button>
      </div>
      <nav
        className={`w-[90%] mx-auto flex justify-between items-center mt-4  border-t-[1px] px-4 border-[#5776a5] [&>*]:text-xl [&>*]:font-semibold [&>*]:p-2`}
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
          to={`/catagories/${param.routeId}/${param.userId}`}
        >
          {data.data.userType === "local_company" && data.data.isService
            ? "Services"
            : "Products"}
          {data.data.userType === "car" && "Cars"}
          {data.data.userType === "user" && "Product"}
          {/* {data.data.isFreeZoon  && "Products"} */}
          {data.data.userType === "plans" && "Aircraft"}
          {data.data.userType === "real_estate" && "Real Estate"}
          {data.data.userType === "trader" && "Products"}
          {data.data.userType === "delivery_company" && "Services"}

          {/* {data.data.isService ? "Services" : "Products"}
          {data.data.isService ? "Services" : "Products"}
          {data.data.isService ? "Services" : "Products"}
          {data.data.isService ? "Services" : "Products"}
          {data.data.isService ? "Services" : "Products"}
          {data.data.isService ? "Services" : "Products"} */}
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
          {data.data.userType === "user" ? "Companies Products" : "Ads"}
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
          {data.data.userType === "user" ? "Info" : "About Us"}
        </NavLink>
      </nav>
    </MainSection>
  );
};

export default User;
