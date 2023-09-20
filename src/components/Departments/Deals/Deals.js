import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import AdCard from "../../UI/AdCard";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getCurrencySymbol } from "../../../funcs/Currency";

const Deals = () => {
  const data = useLoaderData();
  const isCarousel = data[12].results.length >= 2 ? true : false;
  const { t } = useTranslation();
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const currency = useSelector((state) => state.currency.selectedCurrency);

  const items = data[12].results.map((ele) => (
    <AdCard
      className={`2xl:!w-[22rem]`}
      key={ele._id}
      imgSrc={ele.imgUrl}
      imgAlt={ele.name}
      first={t(ele.name)}
      second={ele.companyName}
      third={
        <>
          {t("curr_price")}:{" "}
          <span className=" text-green-900 font-bold">
            {ele.currentPrice.toLocaleString()} {t(currencySymbol)}
          </span>
        </>
      }
      fourth={
        <>
          {t("prev_price")} :{" "}
          <del className=" text-red-500">
            {ele.prevPrice} {t(currencySymbol)}
          </del>
        </>
      }
      path={`deals/${currency}/dealsTypes`}
    />
  ));

  return (
    <MainSection className="py-2">
      <SectionsHeader title={"Deals"} path={`/deals/${currency}/dealsTypes`} />
      {isCarousel ? (
        <MultiItemCarousel
          isCarouselAutoPlayMobile={true}
          count0={1}
          count1={2}
          count2={2}
          count3={3}
          count4={3}
          count5={3}
          count6={4}
          items={items}
          autoPlayInterval={2000}
          autoPlayDirection={"rtl"}
        />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default Deals;
