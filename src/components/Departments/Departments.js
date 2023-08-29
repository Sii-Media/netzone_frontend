import React from "react";
import ElectronicDevices from "./ElectronicDevices/ElectronicDevices";
import OfficeDevices from "./OfficeDevices/OfficeDevices";
import MenFashion from "./MenFashion/MenFashion";
import WomenFashion from "./WomenFashion/WomenFashion";
import Food from "./Foods/Foods";
import Perfume from "./Perfums/Perfums";
import Watches from "./Wathces/Watches";
import Animals from "./Animals/Animals";
import Instr from "./Instr/Instr";
import SportsMachine from "./SportsMachine/SportsMachine";
import Agr from "./Agr/Agr";
import Deals from "./Deals/Deals";
import Ads from "./Ads/Ads";
import News from "./News/News";
import Cars from "./Cars/Cars";
import Aircraft from "./AirCraft/AirCraft";
import RealEstate from "./RealEstate/RealEstate";

const Departments = () => {
  return (
    <>
      <ElectronicDevices />
      <OfficeDevices />
      <MenFashion />
      <WomenFashion />
      <Food />
      <Perfume />
      <Watches />
      <SportsMachine />
      <Instr />
      <Cars />
      <Aircraft />
      <RealEstate />
      <Animals />
      <Agr />
      <Deals />
      <Ads />
      <News />
    </>
  );
};

export default Departments;
