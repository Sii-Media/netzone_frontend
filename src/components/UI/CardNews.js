import React from "react";
import { Link } from "react-router-dom";

const CardNews = ({
  path,
  imgSrc,
  imgAlt,
  first,
  second,
  third,
  fourth,
  forthClassName,
}) => {
  return (
    <>
      <Link
        to={path}
        className={`block relative w-full rounded-lg overflow-hidden`}
      >
        <div className={``}>
          <div className={`w-full`}>
            <img src={imgSrc} alt={imgAlt} className={`w-full h-60`} />
          </div>
          <div
            className={`text-center p-2 bg-[#5776a5] bg-opacity-50 text-2xl text-white text-ellipsis`}
          >
            <p
              className={` md:overflow-auto  md:whitespace-normal text-base  text-[#404553] mb-2`}
            >
              {first}
            </p>
            <p
              className={`text-xl text-ellipsis overflow-hidden md:overflow-auto whitespace-nowrap md:whitespace-normal  text-white mb-1`}
            >
              {second}
            </p>
            <p className={`text-lg  text-white mb-1`}>{third}</p>
            <p
              className={`text-lg  text-white  md:overflow-auto md:whitespace-normal ${forthClassName}`}
            >
              {fourth}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardNews;
