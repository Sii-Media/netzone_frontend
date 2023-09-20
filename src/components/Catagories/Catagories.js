import React, { useEffect, useState } from "react";
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
import whiteBackground from "../../assets/Catas/white-background.jpg";
import MultiItemCarousel from "../UI/MultiItemCarousel";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const Catagories = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState();
  const currency = useSelector((state) => state.currency.selectedCurrency);
  useEffect(() => {
    if (currency === "AE") {
      setItems([
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={freeZoneCompaniesImg}
          imgAlt={"Free Zone Companies"}
          title={t("Free Zone Companies")}
          path={`/catagories/freezone/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={factories}
          imgAlt={"Factories"}
          title={t("Factories")}
          path={`/catagories/factory`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={localCompanies}
          imgAlt={"Local Companies"}
          title={t("Local Companies")}
          path={`/catagories/local_company/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={cars}
          imgAlt={"Cars"}
          title={t("Cars")}
          path={`/catagories/car/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={plan}
          imgAlt={"Civil Aircraft"}
          title={t("Civil Aircraft")}
          path={`/catagories/planes/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={governmental}
          imgAlt={"Governmental Institutions"}
          title={t("government_institutions")}
          path={`/catagories/governmental`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={users}
          imgAlt={"Users"}
          title={t("Users")}
          path={`/catagories/user/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={real_estate}
          imgAlt={"Real Estate"}
          title={t("Real Estate")}
          path={`/catagories/real_estate/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={seller}
          imgAlt={"Traders"}
          title={t("Traders")}
          path={`/catagories/trader/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={delivery}
          imgAlt={"Delivery"}
          title={t("Delivery")}
          path={`/catagories/delivery_company/${currency}`}
        />,
      ]);
    } else {
      setItems([
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={freeZoneCompaniesImg}
          imgAlt={"Free Zone Companies"}
          title={t("Free Zone Companies")}
          path={`/catagories/freezone/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={factories}
          imgAlt={"Factories"}
          title={t("Factories")}
          path={`/catagories/factory`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={localCompanies}
          imgAlt={"Local Companies"}
          title={t("Local Companies")}
          path={`/catagories/local_company/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={cars}
          imgAlt={"Cars"}
          title={t("Cars")}
          path={`/catagories/car/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={plan}
          imgAlt={"Civil Aircraft"}
          title={t("Civil Aircraft")}
          path={`/catagories/planes/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={whiteBackground}
          imgAlt={"Governmental Institutions"}
          title={t("government_institutions")}
          onClick={() => {
            window.alert("Not Available Now");
          }}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={users}
          imgAlt={"Users"}
          title={t("Users")}
          path={`/catagories/user/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={real_estate}
          imgAlt={"Real Estate"}
          title={t("Real Estate")}
          path={`/catagories/real_estate/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={seller}
          imgAlt={"Traders"}
          title={t("Traders")}
          path={`/catagories/trader/${currency}`}
        />,
        <Card
          // textSize={"text-xl font-semibold"}
          w="w-[8.7rem] h-[8.7rem] md:w-80 md:h-80 2xl:w-[22rem] 2xl:h-[22rem]"
          isCarousel={true}
          imgSrc={delivery}
          imgAlt={"Delivery"}
          title={t("Delivery")}
          path={`/catagories/delivery_company/${currency}`}
        />,
      ]);
    }
  }, [currency, t]);

  return (
    <MainSection>
      <SectionsHeader title={"Catagories"} path="/catagories" />
      <MultiItemCarousel
        count0={2}
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
