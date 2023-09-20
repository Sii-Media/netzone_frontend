import React from "react";
import { useTranslation } from "react-i18next";

const LiCard = ({ data, title, w }) => {
  const { t } = useTranslation();
  return (
    <>
      {data && (
        <li
          className={`border-b-[1px] border-gray-600 p-4 flex items-center justify-between`}
        >
          <span className={`font-bold text-lg`}>{title}</span>{" "}
          <span className={`${w || "w-80"}`}>{t(data)}</span>
        </li>
      )}
    </>
  );
};

export default LiCard;
