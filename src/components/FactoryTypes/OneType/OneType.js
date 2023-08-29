import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../UI/MainSection";
import Card from "../../UI/Card";

const OneType = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection className={`!mt-24 mb-4`}>
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
