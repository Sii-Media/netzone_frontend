import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import AdCard from "../../UI/AdCard";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getCurrencySymbol } from "../../../funcs/Currency";

const Aircraft = () => {
  const data = useLoaderData();
  const isCarousel = data[15].results.length >= 2 ? true : false;
  const { t } = useTranslation();
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const items = data[15].results.map((ele) => (
    <AdCard
      key={ele._id}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      first={t(ele.name)}
      second={ele.description}
      third={`Price : ${ele.price.toLocaleString()} ${t(currencySymbol)}`}
      fourth={`${ele.kilometers} KM`}
      path={`planes/${currency}/${ele._id}`}
    />
  ));

  return (
    <MainSection className="py-2 bg-[#5776a5] bg-opacity-40">
      <SectionsHeader title={"Civil Aircraft"} path={`/planes/${currency}`} />
      {data[15].results.length > 0 && isCarousel ? (
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
          autoPlayDirection={"ltr"}
        />
      ) : (
        <div className="flex">{items}</div>
      )}
      {data[15].results.length === 0 && (
        <p className={`text-2xl font-semibold`}>Sorry,No Data Found</p>
      )}
    </MainSection>
  );
};

export default Aircraft;
