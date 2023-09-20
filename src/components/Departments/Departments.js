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
import Chats from "./Chats/Chats";
import BackToTopButton from "../UI/BackToTopButton/BackToTopButton";
import { PiChatsBold } from "react-icons/pi";
import Other from "./Other/Other";
import { Link } from "react-router-dom";
import { TbMessageChatbot } from "react-icons/tb";

const Departments = () => {
  return (
    <div className={`relative`}>
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
      <Other />
      <Deals />
      <Ads />
      <News />
      <Chats />
      <BackToTopButton
        className={`fixed right-1 top-[91vh] text-[#5776a5] opacity-25  cursor-pointer w-12 h-12 hover:opacity-100 duration-200`}
      />
      <Link
        to="/chats"
        className={`fixed left-1 top-[88vh] bg-[#5776a5] border-2 border-transparent rounded-full text-white p-2 flex justify-center items-center duration-300 hover:bg-white hover:border-[#5776a5] hover:!text-[#5776a5]`}
      >
        <TbMessageChatbot
          className={` cursor-pointer text-5xl hover:opacity-100 duration-200`}
        />
      </Link>
    </div>
  );
};

export default Departments;
