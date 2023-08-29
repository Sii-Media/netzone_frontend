import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import MainSection from "../../UI/MainSection";
import { BsLink } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import RatingSystem from "../../UI/RatingSystem";
import ShareLink from "../../UI/ShareLink";
import { useSelector } from "react-redux";
const User = () => {
  const data = useLoaderData();
  console.log(data.factory[0]);
  const param = useParams();
  console.log(param);
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  return (
    <MainSection
      className={`!mt-28 md:!mt-[4.6rem] !px-0 mb-4 w-full lg:w-[800px] mx-auto relative`}
    >
      <div
        className={`h-64 overflow-hidden flex justify-center items-center rounded-b-lg w-full md:w-auto`}
      >
        <img
          src={data.factory[0].coverPhoto}
          alt={data.factory[0].username}
          className=""
        />
      </div>
      <div
        className={`flex items-center justify-between w-[90%] absolute top-56 left-1/2 -translate-x-1/2`}
      >
        <img
          src={data.factory[0].profilePhoto}
          alt={data.factory[0].username}
          className={`w-24 h-24 md:w-40 md:h-40 rounded-full  border-4 border-white `}
        />
        <div
          className={`flex flex-col md:flex-row items-center justify-between w-full h-auto`}
        >
          <div className={`ml-8`}>
            <h2 className={`text-2xl font-semibold pt-2`}>
              {data.factory[0].username}
            </h2>
            <h3 className={`text-sm font-medium text-gray-600 mb-2`}>
              {data.factory[0].userType
                ? data.factory[0].userType
                : "No Slogan to display"}
            </h3>
            <div className={`flex`}>
              <span className={`mr-2 text-gray-600 pt-[0.1rem]`}>
                {data.factory[0].averageRating}
              </span>
              <RatingSystem value={data.factory[0].averageRating} />
              <span className={`ml-2 text-gray-600`}>
                ({data.factory[0].totalRatings}Reviews)
              </span>
            </div>
          </div>
          <div className={`flex items-center`}>
            <ShareLink />

            <button
              className={`px-4 mt-0 bg-[#5776a5] rounded-3xl text-white text-xl font-medium hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5] self-center`}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className={`mt-40 text-xl px-8 w-[90%] mx-auto`}>
        <p>Bio</p>
      </div>
      {/* <div className={`flex px-8 items-center mt-2 w-[90%] mx-auto`}>
        <BsLink className={`mr-2`} />
        <a href={data.factory[0].link} target="_blank" rel="noreferrer">
          {data.data.link}
        </a>
      </div> */}
      <div className="flex justify-center items-center w-[90%] mx-auto">
        <div className={`flex flex-col items-center mr-8`}>
          <span className={`text-lg font-semibold`}>
            {data.factory[0].followings.length}
          </span>
          <span>Following</span>
        </div>
        <div className={`flex flex-col items-center`}>
          <span className={`text-lg font-semibold`}>
            {data.factory[0].followers.length}
          </span>
          <span>Followers</span>
        </div>
      </div>
      <div
        className={`flex justify-between items-center mt-2 w-[calc(13rem*2+1rem)] mx-auto`}
      >
        <button
          className={`w-52 flex justify-center items-center p-2 bg-[#5776a5] rounded-2xl text-white text-xl hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5]`}
        >
          <RiMoneyDollarCircleLine /> Live Auction
        </button>
        <button
          className={`w-52 flex justify-center items-center p-2 bg-[#5776a5] rounded-2xl text-white text-xl hover:text-[#5776a5] hover:bg-transparent duration-300 border-2 border-[#5776a5]`}
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
          to={`/catagories/factory/${param.typeId}/${selectedCurrency}/${param.facId}`}
        >
          Products
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
          Ads
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
          Info
        </NavLink>
      </nav>
    </MainSection>
  );
};

export default User;
