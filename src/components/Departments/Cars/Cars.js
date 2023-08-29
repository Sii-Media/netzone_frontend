import { useLoaderData, useNavigation } from "react-router-dom";
import SectionsHeader from "../../UI/SectionsHeader";
import MainSection from "../../UI/MainSection";
import MultiItemCarousel from "../../UI/MultiItemCarousel";
import AdCard from "../../UI/AdCard";
import { useSelector } from "react-redux";

const Cars = () => {
  const data = useLoaderData();
  const isCarousel = data[7].results.length >= 2 ? true : false;
  const items = data[7].results.map((ele) => (
    <AdCard
      key={ele._id}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      first={ele.name}
      second={ele.description}
      third={`Price : ${ele.price}`}
      fourth={`${ele.kilometers} KM`}
      path={`cars/AE/${ele._id}`}
    />
  ));
  const state = useNavigation();
  const currency = useSelector((state) => state.currency.selectedCurrency);

  return (
    <MainSection className="py-2">
      <SectionsHeader title={"Cars"} path={`/cars/${currency}`} />
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

export default Cars;
