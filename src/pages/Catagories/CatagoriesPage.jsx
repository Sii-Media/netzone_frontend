import React from "react";
import freeZoneCompaniesImg from "../../assets/Catas/free_zones.png";
import factories from "../../assets/Catas/factories.png";
import localCompanies from "../../assets/Catas/local_companies.png";
import cars from "../../assets/Catas/cars.png";
import plan from "../../assets/Catas/plan.jpg";
import governmental from "../../assets/Catas/governmental.jpg";
import users from "../../assets/Catas/users.png";
import real_estate from "../../assets/Catas/real_estate.jpg";
import seller from "../../assets/Catas/seller.jpg";
import delivery from "../../assets/Catas/delivery.jpg";
import Card from "../../components/UI/Card";
import { useTranslation } from "react-i18next";
import MainSection from "../../components/UI/MainSection";

const CatagoriesPage = () => {
  const { t } = useTranslation();
  const items = [
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={freeZoneCompaniesImg}
      imgAlt={"Free Zone Companies"}
      title={t("Free Zone Companies")}
      path="/catagories/freezone"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={factories}
      imgAlt={"Factories"}
      title={t("Factories")}
      path="/catagories/factory"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={localCompanies}
      imgAlt={"Local Companies"}
      title={t("Local Companies")}
      path="/catagories/local_company"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={cars}
      imgAlt={"Cars"}
      title={t("Cars")}
      path="/catagories/car"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={plan}
      imgAlt={"Civil Aircraft"}
      title={t("Civil Aircraft")}
      path="/catagories/plans"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={governmental}
      imgAlt={"Governmental Institutions"}
      title={t("Governmental Institutions")}
      path="/catagories/governmental"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={users}
      imgAlt={"Users"}
      title={t("Users")}
      path="/catagories/user"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={real_estate}
      imgAlt={"Real Estate"}
      title={t("Real Estate")}
      path="/catagories/real_estate"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={seller}
      imgAlt={"Traders"}
      title={t("Traders")}
      path="/catagories/trader"
    />,
    <Card
      w=" w-72 h-72"
      className={`w-40  md:w-72 h-40 md:h-72`}
      isCarousel={true}
      imgSrc={delivery}
      imgAlt={"Delivery"}
      title={t("Delivery")}
      path="/catagories/delivery_company"
    />,
  ];
  return (
    <MainSection className={`!mt-56 md:!mt-24 mb-2 `}>
      <ul
        className={`flex  justify-between flex-row items-center md:items-start flex-wrap w-full md:w-[calc(18rem*2+3rem)] lg:w-[calc(18rem*3+5rem)] mx-auto [&>*]:mb-4`}
      >
        {items.map((ele) => (
          <li className="[&>*]:mr-0 [&>*]:text-2xl">{ele}</li>
        ))}
      </ul>
    </MainSection>
  );
};

export default CatagoriesPage;
