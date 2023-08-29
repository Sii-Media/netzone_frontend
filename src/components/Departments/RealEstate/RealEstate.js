import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import AdCard from "../../UI/AdCard";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const RealEstate = () => {
  const data = useLoaderData();
  const isCarousel = data[16].length >= 2 ? true : false;
  const { t } = useTranslation();
  const items = data[16].map((ele) => (
    <AdCard
      key={ele._id}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      first={t(ele.title)}
      second={ele.description}
      third={`Price : ${ele.price}`}
      fourth={`Location : ${ele.location}`}
      path={`realEstate/AE/${ele._id}`}
    />
  ));
  const currency = useSelector((state) => state.currency.selectedCurrency);

  return (
    <MainSection className="py-2">
      <SectionsHeader title={"Real Estate"} path={`/realEstate/${currency}`} />
      {isCarousel ? (
        <MultiItemCarousel
          count0={1}
          count1={2}
          count2={2}
          count3={3}
          count4={3}
          count5={3}
          count6={4}
          items={items}
          autoPlayDirection={"rtl"}
        />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default RealEstate;
