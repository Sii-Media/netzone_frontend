import { useLoaderData } from "react-router-dom";
import MainSection from "../../../../components/UI/MainSection";
import Card from "../../../../components/UI/Card";

const ProServFac = () => {
  const data = useLoaderData();
  console.log(data);
  console.log(data);
  return (
    <MainSection className={`w-full md:w-[600px] mx-auto`}>
      <ul className={`flex flex-wrap justify-between [&>*]:mb-4`}>
        {data.length > 0 ? (
          data.map((ele) => (
            <Card
              path={ele._id}
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
export const ProServFacLoader = async ({ params }) => {
  const facId = params.facId;
  console.log(facId);
  console.log(facId);
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/local-company/get-services/${facId}`
  );
  const data = await response.json();
  return data;
};
