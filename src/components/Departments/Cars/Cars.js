import { useLoaderData, useNavigation } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import AdCard from "../../UI/AdCard";
import { useSelector } from "react-redux";
import { getCurrencySymbol } from "../../../funcs/Currency";
import { useTranslation } from "react-i18next";

const Cars = () => {
  const { t } = useTranslation();
  const data = useLoaderData();
  const isCarousel = data[7].results.length >= 2 ? true : false;
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const items = data[7].results.map((ele) => (
    <AdCard
      className={`xl:!w-[25rem] 2xl:!w-[30rem]`}
      key={ele._id}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      first={ele.name}
      second={ele.description}
      third={`${t("price")} : ${ele.price.toLocaleString()} ${t(
        currencySymbol
      )}`}
      fourth={`${ele.kilometers} KM`}
      path={`cars/${currency}/${ele._id}`}
    />
  ));
  const state = useNavigation();

  return (
    <MainSection className="py-2">
      <SectionsHeader title={"Cars"} path={`/cars/${currency}`} />
      {data[7].results.length > 0 && isCarousel ? (
        <MultiItemCarousel
          isCarouselAutoPlayMobile={true}
          count0={1}
          count1={2}
          count2={2}
          count3={3}
          count4={3}
          count5={3}
          count6={3}
          autoPlayInterval={2000}
          items={items}
          autoPlayDirection={"ltr"}
        />
      ) : (
        <div className="flex">{items}</div>
      )}
      {data[7].results.length === 0 && (
        <p className={`text-2xl font-semibold`}>Sorry,No Data Found</p>
      )}
    </MainSection>
  );
};

export default Cars;
