import React from "react";

const LiCard = ({ data, title, w }) => {
  return (
    <>
      {data && (
        <li
          className={`border-b-[1px] border-gray-600 p-4 flex items-center justify-between`}
        >
          <span className={`font-bold text-lg`}>{title}</span>{" "}
          <span className={`${w || "w-80"}`}>{data}</span>
        </li>
      )}
    </>
  );
};

export default LiCard;
