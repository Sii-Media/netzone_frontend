import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import Card from "../../UI/Card";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useCarouselLogic from "../../../hooks/useCarouselHook";

const ElectronicDevices = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const { t } = useTranslation();
  const data = useLoaderData();
  const isCarousel = useCarouselLogic(0);

  const items = data[0].results.map((ele) => (
    <Card
      key={ele._id}
      isCarousel={isCarousel}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      title={t(ele.name)}
      path={`electronicDevices/${ele.name}/${currency}`}
    />
  ));

  return (
    <MainSection className="py-2 bg-[#5776a5] bg-opacity-40 !mt-5">
      <SectionsHeader title={"Electronic Devices"} path="/electronicDevices" />
      {isCarousel ? (
        <MultiItemCarousel items={items} autoPlayDirection={"ltr"} />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default ElectronicDevices;
