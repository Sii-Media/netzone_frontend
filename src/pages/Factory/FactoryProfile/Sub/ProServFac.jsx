import { useLoaderData } from "react-router-dom";
import MainSection from "../../../../components/UI/MainSection";
import Card from "../../../../components/UI/Card";

const ProServFac = () => {
  const data = useLoaderData();
  console.log(data);
  console.log(data);
  return (
    <MainSection className={`w-full md:w-[80%] flex  mx-auto`}>
      <ul
        className={`grid grid-cols-2 place-items-center md:grid-cols-3 [&>*]:mb-4 [&>*]:mr-4 mx-auto`}
      >
        {data.length > 0 ? (
          data.map((ele) => (
            <Card
              path={ele._id}
              className={`!w-36 !h-36 md:!w-[15rem] md:!h-[15rem] 2xl:!w-52 2xl:!h-52`}
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
export const ProServFacLoader = async ({ params }) => {
  const facId = params.facId;
  console.log(facId);
  console.log(facId);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const response = await fetch(
    baseUrl + `/categories/local-company/get-services/${facId}`
  );
  const data = await response.json();
  return data;
};
