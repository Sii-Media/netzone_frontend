import React from "react";
import MainSection from "../../UI/MainSection";
import { useLoaderData, useParams } from "react-router-dom";
import LiCard from "./LiCard/LiCard";
import YouTube from "react-youtube";

const EmInfoCom = () => {
  const { govermentalCompanies } = useLoaderData();
  const param = useParams();
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReadyHandler = (e) => {
    e.target.pauseVideo();
  };
  const dataToUse = govermentalCompanies.filter(
    (ele) => ele._id === param.emInfoId
  );
  // const dataToDisplay = [];
  // for (const property in dataToUse[0]) {
  //   const value = dataToUse[0][property];
  //   dataToDisplay.push(value);
  // }
  // console.log(dataToDisplay);

  return (
    <MainSection
      className={`!mt-28 md:!mt-[4.6rem] !px-0 mb-4 w-full lg:w-[600px] mx-auto relative`}
    >
      <ul className={`mt-24 w-[600px] mx-auto`}>
        {/* {dataToDisplay.map(ele=><LiCard />)} */}
        <LiCard w="w-auto" data={dataToUse[0].govname} title={`Company Name`} />
        <LiCard
          w="w-auto"
          data={dataToUse[0].city}
          title={`Region of Emirate`}
        />
        <LiCard w="w-auto" data={dataToUse[0].address} title={`Address`} />
        <LiCard w="w-auto" data={dataToUse[0].mobile} title={`Mobile`} />
        <LiCard w="w-auto" data={dataToUse[0].phone} title={`Phone`} />
        <LiCard w="w-auto" data={dataToUse[0].email} title={`E-mail`} />
        <LiCard
          w="w-auto"
          data={dataToUse[0].info}
          title={`Government Organization Detailed`}
        />
        <li
          className={`border-b-[1px] border-gray-600 p-4 flex items-center justify-between`}
        >
          <span className={`font-bold text-lg`}>Services</span>{" "}
          <a href={dataToUse[0].link} className={`w-auto underline`}>
            Click Here
          </a>
        </li>
        <li className={`border-b-[1px] border-gray-600 p-4 `}>
          <p className={`font-bold text-lg`}>Images</p>
          <ul>
            {dataToUse[0].images.map((ele) => (
              <li>
                <img src={ele} alt={ele} className={`w-64`} />
              </li>
            ))}
          </ul>
        </li>
        {/* <LiCard data={dataToUse[0].} title={`Images`} />
        <LiCard data={dataToUse[0].} title={`Video`} /> */}
      </ul>
      <div className={`mb-4`}>
        <h4 className={`text-2xl mb-2 font-semibold`}>Video</h4>

        <YouTube
          videoId={dataToUse[0].videourl}
          opts={opts}
          onReady={onReadyHandler}
        />
      </div>
    </MainSection>
  );
};

export default EmInfoCom;
