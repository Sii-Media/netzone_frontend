import React, { useState } from "react";
import MainSection from "../UI/MainSection";
import { useLoaderData } from "react-router-dom";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";

const SingleCata = () => {
  const data = useLoaderData();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter data based on searchQuery
  const filteredData = data.data.filter((ele) => {
    const nameToSearch = ele.username || ele.name;
    return nameToSearch.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <MainSection className={`mt-48 md:!mt-32 min-h-screen`}>
      {/* Search input */}
      <div className={`flex items-center mb-8 justify-center`}>
        <label className={`text-2xl text-[#5776a5] mr-2`}>Search</label>
        <input
          className={`rounded-md border border-[#5776a5] p-1 w-32 outline-none md:mr-2`}
          type="text"
          placeholder={`${t("Filter your preferences")}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <ul
        className={`flex md:flex-row items-center md:items-start flex-wrap w-full md:w-[calc(16rem*2+3rem)] lg:w-[calc(16rem*3+5rem)] mx-auto [&>*]:mb-4`}
      >
        {filteredData.map((ele) => (
          <li
            className={`w-1/2 flex justify-center items-center`}
            key={ele._id}
          >
            <Card
              textSize={"text-xl"}
              className={`!mb-4 !mr-4`}
              path={ele._id}
              imgSrc={ele.profilePhoto || ele.imageUrl}
              imgAlt={ele.username || ele.name}
              title={t(ele.username) || t(ele.name)}
            />
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default SingleCata;
