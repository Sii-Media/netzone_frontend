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
import { useTranslation } from "react-i18next";
import { FaApplePay } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Footer = () => {
  const date = new Date();
  const { t } = useTranslation();
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const footerStatics = [
    {
      title: t("Catagories"),
      catas: [
        {
          title: t("car"),
          path: "/catagories/car",
        },
        {
          title: t("Factories"),
          path: "/catagories/factory",
        },
        {
          title: t("Local Companies"),
          path: "/catagories/local_company",
        },
        {
          title: t("government_institutions"),
          path: "/catagories/governmental",
        },
      ],
    },
    {
      title: t("Electronic Devices"),
      catas: [
        {
          title: t("mobiles"),
          path: `/electronicDevices/mobiles/${currency}`,
        },
        {
          title: t("tvs"),
          path: `/electronicDevices/tvs/${currency}`,
        },
        {
          title: t("headphones"),
          path: `/electronicDevices/headphones/${currency}`,
        },
        {
          title: t("musicalInstruments"),
          path: `/electronicDevices/Audio & musical devices/${currency}`,
        },
      ],
    },
    {
      title: t("Office Devices"),
      catas: [
        {
          title: t("computers"),
          path: `/officeDevices/computers/${currency}`,
        },
        {
          title: t("tables"),
          path: `/officeDevices/tables/${currency}`,
        },
        {
          title: t("chairs"),
          path: `/officeDevices/chairs/${currency}`,
        },
        {
          title: t("Furniture"),
          path: `/officeDevices/Furniture/${currency}`,
        },
      ],
    },
    {
      title: t("Men Fashion"),
      catas: [
        {
          title: t("Sportswear"),
          path: `/menFashion/Sportswear/${currency}`,
        },
        {
          title: t("tshirts"),
          path: `/menFashion/tshirts/${currency}`,
        },
        {
          title: t("pants"),
          path: `/menFashion/pants/${currency}`,
        },
        {
          title: t("shoes"),
          path: `/menFashion/shoes/${currency}`,
        },
      ],
    },
    {
      title: t("Women Fashion"),
      catas: [
        {
          title: t("accessories"),
          path: `/womenFashion/accessories/${currency}`,
        },
        {
          title: t("pants"),
          path: `/womenFashion/pants/${currency}`,
        },
        {
          title: t("beachwear"),
          path: `/womenFashion/beachwear/${currency}`,
        },
        {
          title: t("Pajamas"),
          path: `/womenFashion/Pajamas/${currency}`,
        },
      ],
    },
    {
      title: t("Foods"),
      catas: [
        {
          title: t("Freezers"),
          path: `/foods/Freezers/${currency}`,
        },
        {
          title: t("meat"),
          path: `/foods/meat/${currency}`,
        },
        {
          title: t("drinks"),
          path: `/foods/drinks/${currency}`,
        },
        {
          title: t("Fast food"),
          path: `/foods/Fast food/${currency}`,
        },
      ],
    },
    {
      title: t("perfumes"),
      catas: [
        {
          title: t("Women's perfumes"),
          path: `/perfumes/Women's perfumes/${currency}`,
        },
        {
          title: t("Men's perfumes"),
          path: `/perfumes/Men's perfumes/${currency}`,
        },
        {
          title: t("perfumes"),
          path: `/perfumes/perfumes/${currency}`,
        },
        {
          title: t("perfumes"),
          path: `/perfumes/perfumes/${currency}`,
        },
      ],
    },
    {
      title: t("Watches"),
      catas: [
        {
          title: t("Smart watches"),
          path: `/watches/Smart watches/${currency}`,
        },
        {
          title: t("digital"),
          path: `/watches/digital/${currency}`,
        },
        {
          title: t("metal bracelet"),
          path: `/watches/metal bracelet/${currency}`,
        },
        {
          title: t("Wall clocks"),
          path: `/watches/Wall clocks/${currency}`,
        },
      ],
    },
    {
      title: t("Sports Machine"),
      catas: [
        {
          title: t("Strength devices"),
          path: `/sportMachine/Strength devices/${currency}`,
        },
        {
          title: t(`aerobic Exercise Equipment`),
          path: `/sportMachine/Aerobic Exercise Equipment/${currency}`,
        },
        {
          title: t("Warm-up & stretching equipment"),
          path: `/sportMachine/Warm-up & stretching equipment/${currency}`,
        },
      ],
    },
    {
      title: t("Musical Instruments"),
      catas: [
        {
          title: t("Strings"),
          path: `/musicalInstruments/Strings/${currency}`,
        },
        {
          title: t("Wind"),
          path: `/musicalInstruments/Wind/${currency}`,
        },
        {
          title: t("Percussion"),
          path: `/musicalInstruments/Percussion/${currency}`,
        },
        {
          title: t("Electrical"),
          path: `/musicalInstruments/Electrical/${currency}`,
        },
      ],
    },
    {
      title: t("Cars"),
      catas: [
        {
          title: t("Elite Concepts Rents A Car"),
          path: "/catagories/car/64d4ecb8a996d787f60e6e01",
        },
        {
          title: t("Rally Group"),
          path: "/catagories/car/64d62c7b52231265e742c427",
        },
      ],
    },
    {
      title: t("Civil Aircraft"),
      catas: [
        {
          title: t("Airbus Group"),
          path: "/catagories/car/64d62c7b52231265e742c427",
        },
      ],
    },
    {
      title: t("real_estate"),
      catas: [
        {
          title: t("real estate company"),
          path: "/catagories/real_estate/64a949da12259de3aad71a65",
        },
      ],
    },
    {
      title: t("Animals"),
      catas: [
        {
          title: t("Birds"),
          path: `/animals/Birds/${currency}`,
        },
        {
          title: t("Dogs"),
          path: `/animals/Dogs/${currency}`,
        },
        {
          title: t("Cats"),
          path: `/animals/Cats/${currency}`,
        },
        {
          title: t("Fish"),
          path: `/animals/Fish/${currency}`,
        },
      ],
    },
    {
      title: t("Agriculture"),
      catas: [
        {
          title: t("Pesticides & fertilizers"),
          path: `/agr/Pesticides & fertilizers/${currency}`,
        },
        {
          title: t("Seeds & seedlings"),
          path: `/agr/Seeds & seedlings/${currency}`,
        },
      ],
    },
    {
      title: t("Deals"),
      catas: [
        {
          title: t("civil_aircraft"),
          path: `/deals/${currency}/dealsTypes/aircraft/${currency}`,
        },
        {
          title: t("cars"),
          path: `/deals/${currency}/dealsTypes/cars/${currency}`,
        },
        {
          title: t("tenders"),
          path: `/deals/${currency}/dealsTypes/tenders/${currency}`,
        },
        {
          title: t("محلات نشطة"),
          path: `/deals/${currency}/dealsTypes/shops/${currency}`,
        },
      ],
    },
    // {
    //   title: t("Advertisements"),
    //   catas: [
    //     {
    //       title: `${t("advertisement")}1`,
    //       path: "/advertisements/64df754ea4d4da8d4c58b3d4",
    //     },
    //     {
    //       title: `${t("advertisement")}2`,
    //       path: "/advertisements/645b998bf700c9d204217a0b",
    //     },
    //     {
    //       title: `${t("advertisement")}3`,
    //       path: "/advertisements/645b9feef700c9d204217a14",
    //     },
    //     {
    //       title: `${t("advertisement")}4`,
    //       path: "/advertisements/645ba1fdf700c9d204217a19",
    //     },
    //   ],
    // },
    // {
    //   title: t("News"),
    //   catas: [
    //     t("freezone"),
    //     t("Factories"),
    //     t("Local Companies"),
    //     t("government_institutions"),
    //   ],
    // },s
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
              {t("Stay Connected, Stay Satisfied with Netzoon")}
            </h3>
            <Link to="/">
              <img src={n} alt={n.toString()} className="w-10 ml-2" />
            </Link>
          </div>

          <p>{t("We will be happy to resolve your issue")} </p>
        </div>
        <div>
          <div className={`flex items-center`}>
            <BsInfo
              className={`text-4xl p-1 border-[1px] rounded-full lg:mr-4`}
            />
            <div className={`mb-2`}>
              <h4 className={`text-xl font-bold`}>{t("HELP CENTER")}</h4>
              <a href="sad" className={`text-[#5776a5] cursor-pointer`}>
                help@netzoon.com
              </a>
            </div>
          </div>
          <div className={`flex items-center `}>
            <CiMail className={`text-4xl lg:mr-4`} />
            <div>
              <h4 className={`text-xl font-bold`}>{t("EMAIL SUPPORT")}</h4>
              <a href="sad" className={`text-[#5776a5] cursor-pointer`}>
                support@netzoon.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`px-5 md:px-10 py-6 bg-[#5776a5] rounded-xl`}>
        <div className={`flex flex-wrap md:hidden`}>
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
            {t("Netzoon every where")}
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
            {t("Connect with us")}
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
            {/* <a className={`cursor-pointer`}>
              <AiOutlineTwitter
                className={`text-4xl text-[#5776A547] hover:text-[#5776a5] duration-300`}
              />
            </a> */}
            <a className={`cursor-pointer`}>
              <AiOutlineLinkedin
                className={`text-4xl text-[#5776A547] hover:text-[#5776a5] duration-300`}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="px-8 flex justify-between flex-col lg:flex-row items-center">
        <div className="flex mb-2 lg:mb-0 lg:justify-normal justify-between mr-2">
          {/* <Amex /> */}

          <div className={`flex items-center mr-2 [&>*]:mr-2`}>
            <Master />
            <Visa />
            <FaApplePay className={`w-12 h-12`} />
            <SiGooglepay className={`w-12 h-12`} />
          </div>
          <div className={`flex items-center [&>*]:mr-2`}>
            <Tabby />
            <Tamara />
          </div>
        </div>
        <div className="mb-2 lg:mb-0">
          <span className="lg:mr-2 "> {t("Careers")}</span>
          <span className="lg:mr-2"> {t("Warranty")}</span>
          <span> {t("Policy")} </span>
          <span className="lg:mr-2"> {t("Sell with us")}</span>
          <span className="lg:mr-2"> {t("Terms of Use")}</span>
          <span className="lg:mr-2"> {t("Terms of Sale")}</span>
          <span className="lg:mr-2"> {t("Privacy Policy")} </span>
          <span className="lg:mr-2"> {t("Consumer Rights")}</span>
        </div>
        <p className={`text-xl text-[#5776A547] mb-2 lg:mb-0`}>
          {date.getFullYear()}
          {t("© All Rights Reserved Netzoon")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
