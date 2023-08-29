import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import Card from "../../UI/Card";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const WomenFashion = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);

  const { t } = useTranslation();
  const data = useLoaderData();

  const isCarousel = data[3].results.length >= 5 ? true : false;

  const items = data[3].results.map((ele) => (
    <Card
      key={ele._id}
      isCarousel={isCarousel}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      title={t(ele.name)}
      path={`womenFashion/${ele.name}/${currency}`}
    />
  ));

  return (
    <MainSection className="py-2">
      <SectionsHeader title={"Women Fashion"} path={`womenFashion`} />
      {isCarousel ? (
        <MultiItemCarousel items={items} autoPlayDirection={"rtl"} />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default WomenFashion;
