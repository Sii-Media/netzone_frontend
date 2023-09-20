import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import Card from "../../UI/Card";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useCarouselLogic from "../../../hooks/useCarouselHook";

const Agr = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);

  const data = useLoaderData();
    const isCarousel = useCarouselLogic(11);
  const { t } = useTranslation();
  const items = data[11].results.map((ele) => (
    <Card
      key={ele._id}
      isCarousel={isCarousel}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      title={t(ele.name)}
      path={`agr/${ele.name}/${currency}`}
    />
  ));

  return (
    <MainSection className="py-2 bg-[#5776a5] bg-opacity-40">
      <SectionsHeader title={"Agriculture"} path="/agr" />
      {isCarousel ? (
        <MultiItemCarousel items={items} autoPlayDirection={"ltr"} />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default Agr;
