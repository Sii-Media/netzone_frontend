import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import Card from "../../UI/Card";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const OfficeDevices = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);

  const data = useLoaderData();
  const isCarousel = data[1].results.length >= 5 ? true : false;
  const { t } = useTranslation();
  const items = data[1].results.map((ele) => (
    <Card
      key={ele._id}
      isCarousel={isCarousel}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      title={t(ele.name)}
      path={`officeDevices/${ele.name}/${currency}`}
    />
  ));

  return (
    <MainSection className="py-2">
      <SectionsHeader title={"Office Devices"} path="/officeDevices" />
      {isCarousel ? (
        <MultiItemCarousel items={items} autoPlayDirection={"rtl"} />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default OfficeDevices;
