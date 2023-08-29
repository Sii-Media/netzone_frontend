import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import Card from "../../UI/Card";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Food = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);

  const data = useLoaderData();
  const isCarousel = data[4].results.length >= 5 ? true : false;
  const { t } = useTranslation();
  const items = data[4].results.map((ele) => (
    <Card
      key={ele._id}
      isCarousel={isCarousel}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      title={t(ele.name)}
      path={`foods/${ele.name}/${currency}`}
    />
  ));

  return (
    <MainSection className="py-2 bg-[#5776a5] bg-opacity-40">
      <SectionsHeader title={"Foods"} path={"/foods"} />
      {isCarousel ? (
        <MultiItemCarousel items={items} autoPlayDirection={"ltr"} />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default Food;
