import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import Card from "../../UI/Card";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Instr = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);

  const data = useLoaderData();
  const isCarousel = data[9].results.length >= 5 ? true : false;
  const { t } = useTranslation();
  const items = data[9].results.map((ele) => (
    <Card
      key={ele._id}
      isCarousel={isCarousel}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      title={t(ele.name)}
      path={`musicalInstruments/${ele.name}/${currency}`}
    />
  ));

  return (
    <MainSection className="py-2 bg-[#5776a5] bg-opacity-40">
      <SectionsHeader
        title={"Musical Instruments"}
        path={`/musicalInstruments`}
      />
      {isCarousel ? (
        <MultiItemCarousel items={items} autoPlayDirection={"ltr"} />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default Instr;
