import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SectionsHeader = ({ title, path }) => {
  const { t } = useTranslation();
  return (
    <div className={`flex justify-between items-center mb-3`}>
      <h2 className={`text-2xl font-bold`}>{t(title)}</h2>
      <Link to={path}>
        <button
          className={`border-2 border-transparent rounded-md text-sm md:text-lg bg-[#5776a5] text-white p-1 md:p-2 hover:border-[#5776a5] hover:bg-transparent hover:text-[#5776a5] duration-300`}
        >
          {t("Show all")}
        </button>
      </Link>
    </div>
  );
};

export default SectionsHeader;
