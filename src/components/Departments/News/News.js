import { useLoaderData } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import AdCard from "../../UI/AdCard";
import CardNews from "../../UI/CardNews";
import { useSelector } from "react-redux";

const News = () => {
  const data = useLoaderData();
  const isCarousel = data[14].results.length >= 2 ? true : false;

  const items = data[14].results.map((ele) => (
    <CardNews
      w="md:w-full md:h-[140rem]"
      key={ele._id}
      imgSrc={ele.imgUrl}
      imgAlt={ele.imgUrl}
      first={ele.title}
      fourth={ele.description}
      path={`/news`}
    />
  ));

  return (
    <MainSection className="mt-10 mb-40 md:mb-32">
      <SectionsHeader title={"News"} path="/news" />
      {isCarousel ? (
        <MultiItemCarousel
          count0={1}
          count1={1}
          count2={1}
          count3={1}
          count4={1}
          count5={1}
          count6={1}
          items={items}
          autoPlayDirection={"rtl"}
        />
      ) : (
        <div className="flex">{items}</div>
      )}
    </MainSection>
  );
};

export default News;
