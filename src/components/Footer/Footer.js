import React from "react";
import { BsInfo } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import FooterULsStatic from "../UI/FooterULsStatic";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import AppleIcon from "../UI/AppleIcon";
import AndroidIcon from "../UI/AndroidIcon";
import Amex from "../UI/PymentMethod/Amex";
import Master from "../UI/PymentMethod/Master";
import Tabby from "../UI/PymentMethod/Tabby";
import Tamara from "../UI/PymentMethod/Tamara";
import Visa from "../UI/PymentMethod/Visa";
import Cash from "../UI/PymentMethod/Cash";
import n from "../../assets/N.png";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
const Footer = () => {
  const date = new Date();
  const footerStatics = [
    {
      title: "Catagories",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Electronic Devices",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Office Devices",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Men Fashion",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Women Fashion",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Foods",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Perfume",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Watches",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Sports Machine",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Musical Instruments",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Cars",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "AirCraft",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Real Estate",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Animals",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Agriculture",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Deals",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "Advertisements",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
    {
      title: "News",
      catas: ["free_zone", "factories", "local_companies", "governmental"],
    },
  ];
  return (
    <footer
      className={`flex flex-col  border-t-2 border-[#5776a5] text-[#404553]`}
    >
      <div
        className={`flex justify-between items-center md:items-center flex-col md:flex-row px-10 py-4`}
      >
        <div className={`mb-4 md:mb-0`}>
          <div className="flex">
            <h3 className={`font-extrabold text-xl text-center`}>
              Stay Connected, Stay Satisfied with Netzoon
            </h3>
            <img src={n} alt={n.toString()} className="w-10 ml-2" />
          </div>

          <p>We will be happy to resolve your issue</p>
        </div>
        <div>
          <div className={`flex items-center`}>
            <BsInfo
              className={`text-4xl p-1 border-[1px] rounded-full lg:mr-4`}
            />
            <div className={`mb-2`}>
              <h4 className={`text-xl font-bold`}>HELP CENTER</h4>
              <a href="sad" className={`text-[#5776a5] cursor-pointer`}>
                help@netzoon.com
              </a>
            </div>
          </div>
          <div className={`flex items-center `}>
            <CiMail className={`text-4xl lg:mr-4`} />
            <div>
              <h4 className={`text-xl font-bold`}>EMAIL SUPPORT</h4>
              <a href="sad" className={`text-[#5776a5] cursor-pointer`}>
                support@netzoon.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`px-10 py-6 bg-[#5776a5] rounded-xl`}>
        <div className={`flex flex-wrap justify-between md:hidden`}>
          {footerStatics.slice(0, footerStatics.length / 2).map((ele, i) => (
            <FooterULsStatic key={i} title={ele.title} items={ele.catas} />
          ))}
        </div>

        <div className={`md:flex flex-wrap justify-between hidden`}>
          {footerStatics.map((ele, i) => (
            <FooterULsStatic key={i} title={ele.title} items={ele.catas} />
          ))}
        </div>
      </div>
      <div
        className={`px-10 py-6 mt-4 flex flex-col md:flex-row items-center justify-between border-[#0000007F]`}
      >
        <div className="flex flex-col md:items-start items-center mb-4">
          <h3
            className={`text-[#5776a5] text-2xl font-bold text-center md:text-left mb-1`}
          >
            Netzoon every where
          </h3>
          <div className="flex items-center">
            <div className="flex items-center">
              <AndroidIcon />
            </div>
            <div className="flex items-center">
              <AppleIcon />
            </div>
          </div>
        </div>
        <div>
          <h3
            className={`text-[#5776a5] text-2xl font-bold text-center md:text-left mb-1`}
          >
            Connect with us
          </h3>
          <div className={`flex justify-between items-center`}>
            <a className={`cursor-pointer`}>
              <AiFillFacebook
                className={`text-4xl text-[#5776A547] hover:text-[#5776a5] duration-300`}
              />
            </a>
            <a className={`cursor-pointer`}>
              <AiOutlineInstagram
                className={`text-4xl text-[#5776A547] hover:text-[#5776a5] duration-300`}
              />
            </a>
            <a className={`cursor-pointer`}>
              <AiOutlineTwitter
                className={`text-4xl text-[#5776A547] hover:text-[#5776a5] duration-300`}
              />
            </a>
            <a className={`cursor-pointer`}>
              <AiOutlineLinkedin
                className={`text-4xl text-[#5776A547] hover:text-[#5776a5] duration-300`}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="px-8 flex justify-between flex-col lg:flex-row">
        <p className={`text-xl text-[#5776a5] mb-2 lg:mb-0`}>
          {date.getFullYear()}© All Rights Reserved Sii Media
        </p>
        <div className="flex mb-2 lg:mb-0 lg:justify-normal justify-between">
          <Amex />
          <Master />
          <Tabby />
          <Tamara />
          <Visa />
          <Cash />
        </div>
        <div className="mb-2 lg:mb-0">
          <span className="lg:mr-2 "> Careers</span>
          <span className="lg:mr-2">Warranty</span>
          <span> Policy</span>
          <span className="lg:mr-2">Sell with us</span>
          <span className="lg:mr-2">Terms of Use</span>
          <span className="lg:mr-2">Terms of Sale</span>
          <span className="lg:mr-2">Privacy Policy </span>
          <span className="lg:mr-2">Consumer Rights</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
