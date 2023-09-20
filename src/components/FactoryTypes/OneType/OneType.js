import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../UI/MainSection";
import Card from "../../UI/Card";

const OneType = () => {
  const data = useLoaderData();

  return (
    <MainSection className={`!mt-52 md:!mt-24 md mb-4`}>
      <ul>
        {data.factory.map((ele) => (
          <Card
            path={ele._id}
            imgSrc={ele.profilePhoto}
            imgAlt={ele.username}
            title={ele.username}
          />
        ))}
      </ul>
    </MainSection>
  );
};

export default OneType;
