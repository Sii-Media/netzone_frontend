import React, { useEffect, useState } from "react";
import freeZoneCompaniesImg from "../../assets/Catas/free_zones.png";
import factories from "../../assets/Catas/factories.png";
import localCompanies from "../../assets/Catas/local_companies.png";
import cars from "../../assets/Catas/cars.png";
import plan from "../../assets/Catas/plan.jpg";
import governmental from "../../assets/Catas/governmental.jpg";
import whiteBackground from "../../assets/Catas/white-background.jpg";
import users from "../../assets/Catas/users.png";
import real_estate from "../../assets/Catas/real_estate.jpg";
import seller from "../../assets/Catas/seller.jpg";
import delivery from "../../assets/Catas/delivery.jpg";
import Card from "../../components/UI/Card";
import { useTranslation } from "react-i18next";
import MainSection from "../../components/UI/MainSection";
import { useSelector } from "react-redux";

const CatagoriesPage = () => {
  const { t } = useTranslation();
  const currency = useSelector((state) => state.currency.selectedCurrency);

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (currency === "AE") {
      setItems([
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          // textSize={`t`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-0`}
          isCarousel={true}
          imgSrc={freeZoneCompaniesImg}
          imgAlt={"Free Zone Companies"}
          title={t("Free Zone Companies")}
          path={`/catagories/freezone/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={factories}
          imgAlt={"Factories"}
          title={t("Factories")}
          path="/catagories/factory"
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={localCompanies}
          imgAlt={"Local Companies"}
          title={t("Local Companies")}
          path={`/catagories/local_company/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={cars}
          imgAlt={"Cars"}
          title={t("Cars")}
          path={`/catagories/car/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={plan}
          imgAlt={"Civil Aircraft"}
          title={t("Civil Aircraft")}
          path={`/catagories/planes/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={governmental}
          imgAlt={"Governmental Institutions"}
          title={t("government_institutions")}
          path="/catagories/governmental"
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={users}
          imgAlt={"Users"}
          title={t("Users")}
          path={`/catagories/user/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={real_estate}
          imgAlt={"Real Estate"}
          title={t("Real Estate")}
          path={`/catagories/real_estate/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={seller}
          imgAlt={"Traders"}
          title={t("Traders")}
          path={`/catagories/trader/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
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
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={freeZoneCompaniesImg}
          imgAlt={"Free Zone Companies"}
          title={t("Free Zone Companies")}
          path={`/catagories/freezone/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={factories}
          imgAlt={"Factories"}
          title={t("Factories")}
          path={`/catagories/factory`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={localCompanies}
          imgAlt={"Local Companies"}
          title={t("Local Companies")}
          path={`/catagories/local_company/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={cars}
          imgAlt={"Cars"}
          title={t("Cars")}
          path={`/catagories/car/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={plan}
          imgAlt={"Civil Aircraft"}
          title={t("Civil Aircraft")}
          path={`/catagories/planes/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={whiteBackground}
          imgAlt={"Governmental Institutions"}
          title={t("government_institutions")}
          onClick={() => {
            window.alert("Not Available Now");
          }}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={users}
          imgAlt={"Users"}
          title={t("Users")}
          path={`/catagories/user/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={real_estate}
          imgAlt={"Real Estate"}
          title={t("Real Estate")}
          path={`/catagories/real_estate/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={seller}
          imgAlt={"Traders"}
          title={t("Traders")}
          path={`/catagories/trader/${currency}`}
        />,
        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={delivery}
          imgAlt={"Delivery"}
          title={t("Delivery")}
          path={`/catagories/delivery_company/${currency}`}
        />,

        <Card
          w="w-32 h-32"
          userBoxClassName={`py-4`}
          textSize={`font-medium text-sm`}
          className={`w-40 md:w-72 h-40 md:h-72 text-2xl font-semibold !mr-2`}
          isCarousel={true}
          imgSrc={whiteBackground}
          imgAlt={"Governmental Institutions"}
          title={t("government_institutions")}
          onClick={() => {
            window.alert("Not Available Now");
          }}
        />,
      ]);
    }
  }, [currency, t]);

  return (
    <MainSection className={`!mt-56 md:!mt-24 mb-2 `}>
      <ul
        className={`grid grid-cols-2 md:grid-cols-3 w-full md:w-[80%] place-items-center mx-auto [&>*]:mb-4`}
      >
        {items.map((ele) => (
          <li className="[&>*]:mr-0 [&>*]:text-2xl">{ele}</li>
        ))}
      </ul>
    </MainSection>
  );
};

export default CatagoriesPage;
