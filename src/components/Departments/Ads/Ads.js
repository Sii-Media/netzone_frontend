import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import AdCard from "../../UI/AdCard";
import { useTranslation } from "react-i18next";

const Ads = () => {
  const data = useLoaderData();
  const isCarousel = data[13].results.length >= 2 ? true : false;
  const { t } = useTranslation();
  const items = data[13].results.map((ele) => (
    <AdCard
      className={`2xl:!w-[22rem]`}
      key={ele._id}
      imgSrc={ele.advertisingImage}
      imgAlt={ele.advertisingTitle}
      first={ele.advertisingTitle}
      second={ele.advertisingDescription}
      third={`${t("Location")} : ${ele.advertisingLocation}`}
      fourth={`${ele.advertisingViews} Views`}
      path={`/advertisements/${ele._id}`}
    />
  ));

  return (
    <MainSection className="py-2 bg-[#5776a5] bg-opacity-40">
      <SectionsHeader title={"Advertisements"} path="/advertisements" />
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
          autoPlayDirection={"ltr"}
        />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default Ads;
