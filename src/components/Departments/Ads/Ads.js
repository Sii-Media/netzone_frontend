import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import AdCard from "../../UI/AdCard";

const Ads = () => {
  const data = useLoaderData();
  const isCarousel = data[13].results.length >= 2 ? true : false;
  const items = data[13].results.map((ele) => (
    <AdCard
      key={ele._id}
      imgSrc={ele.advertisingImage}
      imgAlt={ele.advertisingTitle}
      first={ele.advertisingTitle}
      second={ele.advertisingDescription}
      third={`Location : ${ele.advertisingLocation}`}
      fourth={`${ele.advertisingViews} Views`}
      path={`/advertisements/${ele._id}`}
    />
  ));

  return (
    <MainSection className="py-2 bg-[#5776a5] bg-opacity-40">
      <SectionsHeader title={"Advertisements"} path="/advertisements" />
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
          autoPlayDirection={"ltr"}
        />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default Ads;
