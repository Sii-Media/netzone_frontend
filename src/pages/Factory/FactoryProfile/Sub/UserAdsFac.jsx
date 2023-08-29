import { useLoaderData } from "react-router-dom";
import MainSection from "../../../../components/UI/MainSection";
import Card from "../../../../components/UI/Card";
import AdCard from "../../../../components/UI/AdCard";
const UserAdsFac = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection className={`w-full md:w-[700px] mx-auto`}>
      <p className={`w-full flex justify-center items-center text-lg`}>
        No Items Found
      </p>
      {/* <ul
        className={`flex justify-between flex-wrap w-full mx-auto [&>*]:mb-4`}
      >
        {data.factory[0].userType === "user" ? (
          data.factory[0].userAds.length > 0 ? (
            data.factory[0].userAds.map((ele) => (
              <Card
                imgSrc={ele.imageUrl}
                imgAlt={ele.name}
                title={ele.name}
                price={`${ele.price}$`}
              />
            ))
          ) : (
            <p className={`w-full flex justify-center items-center text-lg`}>
              No Items Found
            </p>
          )
        ) : data.factory[0].userAds.results.length > 0 ? (
          data.factory[0].userAds.results.map((ele) => (
            <AdCard
              classNameHight={`h-[9rem]`}
              className={`!mr-0 mb-4`}
              imgSrc={ele.advertisingImage}
              imgAlt={ele.advertisingTitle}
              first={ele.advertisingTitle}
              second={ele.advertisingDescription}
              third={`Location : ${ele.advertisingLocation}`}
            />
          ))
        ) : (
          <p className={`w-full flex justify-center items-center text-lg`}>
            No Items Found
          </p>
        )}
      </ul> */}
    </MainSection>
  );
};
export default UserAdsFac;
export const userAdsFacLoader = async ({ params }) => {
  const userFacId = params.facId;
  const response = await fetch(
    `https://net-zoon.onrender.com/advertisements/${userFacId}`
  );
  return response;
};
