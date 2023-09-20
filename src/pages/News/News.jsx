import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainSection from "../../components/UI/MainSection";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import ShareLink from "../../components/UI/ShareLink";

const News = () => {
  const data = useLoaderData();
  const [liked, setLiked] = useState(false);
  const userId = JSON.parse(window.localStorage.getItem("user"))?.result?._id;

  useEffect(() => {
    if (!userId) {
      // If "user" item is not available in local storage, show an alert and redirect or handle it as needed
      window.alert("Please login");
      // You can also redirect the user to the login page or perform some other action here
    }
  }, [userId]);

  const handleLikeChange = async (e) => {
    if (!userId) {
      // If "user" item is not available, do not proceed with liking/unliking
      window.alert("Please login");

      return;
    }

    // Rest of your handleLikeChange code
    console.log(userId);
    console.log(e);
    setLiked(!liked);
    const formData = new FormData();
    formData.append("userId", userId);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const response = await fetch(baseUrl + `/news/${e}/toggleonlike`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <MainSection className={`!mt-48 md:!mt-28`}>
      <ul>
        {data.results.map((ele) => (
          <li className={`md:w-[70%] mx-auto  mb-8 border-b border-gray-400`}>
            <div className={` flex items-center overflow-hidden mb-4`}>
              <img
                src={ele.creator.profilePhoto}
                alt={ele.creator.username}
                className={`w-14 h-14 rounded-full mr-2 `}
              />
              <p className={`text-xl font-semibold`}>{ele.creator.username}</p>
            </div>
            <div>
              <div className={`overflow-hidden`}>
                <img
                  src={ele.imgUrl}
                  alt={ele.description}
                  className={` rounded-t-xl`}
                />
              </div>
              <p className={` text-center py-1 bg-[#5776a5] bg-opacity-20`}>
                {ele.createdAt.slice(0, 10)}
              </p>

              <div
                className={` p-2  overflow-hidden text-center text-ellipsis rounded-b-xl bg-[#5776a5] bg-opacity-20`}
              >
                {ele.description}
              </div>
            </div>
            <div className={`flex justify-between`}>
              <div className={` mt-4 flex items-center mb-2 `}>
                <div className={`cursor-pointer `}>
                  {!liked && (
                    <AiOutlineHeart
                      id={ele._id}
                      onClick={() => handleLikeChange(ele._id)}
                      className={`text-[#5776a5] w-9 h-9 mr-4 p-1 `}
                    />
                  )}
                  {liked && (
                    <AiFillHeart
                      id={ele._id}
                      onClick={() => handleLikeChange(ele._id)}
                      className={`text-[#5776a5] w-9 h-9 mr-4 p-1 `}
                    />
                  )}
                </div>
                <Link to={`${ele._id}/comments`}>
                  <FaRegComments
                    className={`text-[#5776a5] w-8 h-8 mr-4 p-1 `}
                  />
                </Link>
                <ShareLink />
              </div>
            </div>
            <div className={`mb-1`}>
              {liked ? "You and" : ""} {ele.likes.length} People Liked This
            </div>
            <div className={`mb-1`}>{ele.comments.length} Comments</div>
            <div className={`mb-1`}></div>
            <div className={`mb-1`}>
              <Link
                to={`${ele._id}/comments`}
                className={`underline text-gray-400`}
              >
                View All Comments
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default News;

export const newsLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/news`);
  const data = await response.json();
  return data;
};
