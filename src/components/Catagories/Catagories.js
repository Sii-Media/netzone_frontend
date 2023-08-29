import React from "react";
import SectionsHeader from "../UI/SectionsHeader";
import MainSection from "../UI/MainSection";
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
import MultiItemCarousel from "../UI/MultiItemCarousel";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";
const Catagories = () => {
  const { t } = useTranslation();
  const items = [
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={freeZoneCompaniesImg}
      imgAlt={"Free Zone Companies"}
      title={t("Free Zone Companies")}
      path="/catagories/freezone"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={factories}
      imgAlt={"Factories"}
      title={t("Factories")}
      path="/catagories/factory"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={localCompanies}
      imgAlt={"Local Companies"}
      title={t("Local Companies")}
      path="/catagories/local_company"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={cars}
      imgAlt={"Cars"}
      title={t("Cars")}
      path="/catagories/car"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={plan}
      imgAlt={"Civil Aircraft"}
      title={t("Civil Aircraft")}
      path="/catagories/plans"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={governmental}
      imgAlt={"Governmental Institutions"}
      title={t("Governmental Institutions")}
      path="/catagories/governmental"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={users}
      imgAlt={"Users"}
      title={t("Users")}
      path="/catagories/user"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={real_estate}
      imgAlt={"Real Estate"}
      title={t("Real Estate")}
      path="/catagories/real_estate"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={seller}
      imgAlt={"Traders"}
      title={t("Traders")}
      path="/catagories/trader"
    />,
    <Card
      w=" w-80 h-80"
      isCarousel={true}
      imgSrc={delivery}
      imgAlt={"Delivery"}
      title={t("Delivery")}
      path="/catagories/delivery_company"
    />,
  ];

  return (
    <MainSection>
      <SectionsHeader title={"Catagories"} path="/catagories" />
      <MultiItemCarousel
        count0={1}
        count1={2}
        count2={2}
        count3={3}
        count4={3}
        count5={3}
        count6={4}
        items={items}
        autoPlayDirection={"ltr"}
      />
    </MainSection>
  );
};

export default Catagories;
