import { useRouteLoaderData } from "react-router-dom";
import MainSection from "../../../../components/UI/MainSection";
import Card from "../../../../components/UI/Card";


const ProServFac = () => {
  const data = useRouteLoaderData("user");
  console.log(data.proServData);
  return (
    <MainSection className={`w-full md:w-[600px] mx-auto`}>
      <ul className={`flex flex-wrap justify-between [&>*]:mb-4`}>
        {data.factory[0].proServData.length > 0 ? (
          data.factory[0].proServData.map((ele) => (
            <Card
              className={`!w-40 !h-40`}
              imgSrc={ele.imageUrl}
              imgAlt={ele.title || ele.name}
              title={ele.title || ele.name}
            />
          ))
        ) : (
          <p className={`w-full flex justify-center items-center text-lg`}>
            No Items Found
          </p>
        )}
      </ul>
    </MainSection>
  );
};

export default ProServFac;
