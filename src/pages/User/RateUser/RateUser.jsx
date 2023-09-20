import React from "react";
import MainSection from "../../../components/UI/MainSection";
import { useLoaderData, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import RatingSystem from "../../../components/UI/RatingSystem";

const RateUser = () => {
  // Check if "user" item is available in local storage
  const isUserAvailable = !!window.localStorage.getItem("user");

  const data = useLoaderData();
  const params = useParams();
  const { t } = useTranslation();

  const [value, setValue] = useState(null);
  const [hover, setHover] = useState(-1);

  const labels = {
    0.5: "Terrible",
    1: "Poor",
    1.5: "Mediocre",
    2: "Fair",
    2.5: "Good",
    3: "Very Good",
    3.5: "Excellent",
    4: "Outstanding",
    4.5: "Superb",
    5: "Amazing",
  };

  const getLabelText = (value) => {
    return labels[value];
  };

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

  const submitHandler = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const userId = JSON.parse(window.localStorage.getItem("user")).result._id;
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("rating", value.toString());
    formData.forEach((ele) => console.log(ele));
    const response = await fetch(baseUrl + `/user/${params.userId}/rate`, {
      method: "post",
      body: formData,
    });
    const data = await response.json();
    window.alert(data);
    console.log(data);
    console.log(userId);
    console.log(params.userId);
    console.log(value);
    // window.location.reload();
  };

  return (
    <MainSection className={`!mt-52 md:!mt-28 min-h-screen`}>
      <h2 className={`text-2xl text-center mb-4`}>
        {t("What do you think about")}{" "}
        <span className={`font-semibold text-[#5776a5]`}>{data.username}</span>?
      </h2>
      <div
        className={`p-2 bg-[#5776a5] bg-opacity-40 rounded-xl w-full md:w-[80%] mx-auto`}
      >
        <p className={`text-xl`}>{t("message_1")}</p>
        <p className={`text-xl`}>{t("instruction1")}</p>
        <ul>
          <li className={`text-lg font-semibold text-red-600`}>
            {t("instruction2")}
          </li>
          <li className={`text-lg font-semibold text-red-600`}>
            {t("instruction3")}
          </li>
          <li className={`text-lg font-semibold text-red-600`}>
            {t("instruction4")}
          </li>
        </ul>
      </div>
      <div
        className={`flex flex-col md:flex-row justify-between items-center mt-2 w-full md:w-[80%] mx-auto`}
      >
        <div
          className={`flex items-center justify-between  w-full md:w-[70%] bg-[#5776a5] bg-opacity-10 p-1 rounded-2xl  mb-4 md:mb-0`}
        >
          <div className={`mr-2`}>
            <img
              src={data.profilePhoto}
              alt={data.username}
              className={`w-20 rounded-full`}
            />
          </div>
          <div className={` overflow-hidden`}>
            <h2 className={`text-xl font-medium`}>{data.username}</h2>
            <p className={`text-sm text-gray-700 text-ellipsis`}>{data.bio}</p>
          </div>
          <div>
            <h3 className={`text-base text-gray-400 font-bold`}>
              {t("current_rate")}
            </h3>
            <div className={`flex text-base text-gray-400 font-bold`}>
              <span
                className={`mr-2  pt-[0.1rem text-base text-gray-400 font-bold]`}
              >
                {+data.averageRating.toFixed(2)}
              </span>
              <RatingSystem value={data.averageRating} />
              <span
                className={`ml-2  pt-[0.1rem text-base text-gray-400 font-bold]`}
              >
                ({data.totalRatings}
                {t("review")})
              </span>
            </div>
          </div>
        </div>
        <div className={`flex flex-col w-full md:w-auto mb-4 md:mb-0`}>
          <h2 className={`mb-2`}>{t("rate_here")}:</h2>
          <Rating
            name="hover-feedback"
            value={value}
            precision={1}
            getLabelText={getLabelText}
            onChange={handleRatingChange}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
          {isUserAvailable && (
            <button
              onClick={submitHandler}
              className={`mt-4 md:mt-2 text-white bg-[#5776a5] rounded-lg px-4 py-1 border-2 border-transparent duration-300 hover:text-[#5776a5] hover:bg-transparent hover:border-[#5776a5]`}
            >
              {t("submit")}!
            </button>
          )}
        </div>
      </div>
      <div className={`text-sm  text-center mt-10`}>{t("conclusion")}</div>
    </MainSection>
  );
};

export default RateUser;
export const rateUserLoader = async ({ params }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const userId = params.userId;
  const response = await fetch(baseUrl + `/user/getUser/${userId}`);
  const data = await response.json();
  return data;
};
