import React from "react";
import { Link } from "react-router-dom";
import styles from "./Ad.module.css";
const AdCard = ({
  path,
  imgSrc,
  imgAlt,
  first,
  second,
  third,
  fourth,
  className,
  classNameHight,
}) => {
  return (
    <>
      <Link
        to={path}
        className={`inline-block w-full h-full md:w-auto md:h-auto `}
      >
        <div
          className={`w-full md:w-80 md:h-96  rounded-xl mr-4 overflow-hidden ${className}`}
        >
          <div className={`relative h-60 ${styles.ad} `}>
            <img src={imgSrc} alt={imgAlt} className={`w-full h-full`} />
          </div>
          <div className={`p-2 flex items-center justify-center flex-col bg-[#5776a5] bg-opacity-50 text-2xl text-white text-center ${classNameHight}`}>
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

export default AdCard;
