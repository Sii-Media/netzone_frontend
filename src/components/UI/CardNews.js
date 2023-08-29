import React from "react";
import { Link } from "react-router-dom";

const CardNews = ({ path, imgSrc, imgAlt, first, second, third, fourth }) => {
  return (
    <>
      <Link
        to={path}
        className={`block relative w-full rounded-lg overflow-hidden`}
      >
        <div className={``}>
          <div className={`w-full`}>
            <img src={imgSrc} alt={imgAlt} className={`w-full h-96`} />
          </div>
          <div
            className={`text-center p-2 bg-[#5776a5] bg-opacity-50 text-2xl text-white text-ellipsis`}
          >
            <p className={`text-2xl  text-[#404553] mb-2`}>{first}</p>
            <p className={`text-xl  text-white mb-1`}>{second}</p>
            <p className={`text-lg  text-white mb-1`}>{third}</p>
            <p className={`text-lg  text-white`}>{fourth}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardNews;
