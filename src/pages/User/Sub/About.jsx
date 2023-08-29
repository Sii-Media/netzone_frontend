import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";
import CardLi from "./Reusable/CardLi";

const About = () => {
  const data = useRouteLoaderData("user");
  return (
    <MainSection className={`w-full md:w-[700px] mx-auto`}>
      <ul>
        <CardLi title={"Company Name:"} data={data.data.username} />
        <CardLi title={"Description:"} data={data.data.description} />
        <CardLi title={"Mobile:"} data={data.data.firstMobile} />
        <CardLi title={"E-mail:"} data={data.data.email} />
        <CardLi title={"Bio:"} data={data.data.bio} />
        <CardLi title={"Address:"} data={data.data.address} />
        <CardLi title={"Website:"} data={data.data.website} />
        <CardLi title={"Link:"} data={data.data.link} />
      </ul>
    </MainSection>
  );
};

export default About;
