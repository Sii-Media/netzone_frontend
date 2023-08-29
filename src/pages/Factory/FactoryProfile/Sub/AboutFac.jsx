import { useRouteLoaderData } from "react-router-dom";
import MainSection from "../../../../components/UI/MainSection";
import CardLi from "./Reusable/CardLi";

const AboutFac = () => {
  const data = useRouteLoaderData("facId");
  console.log(data);
  return (
    <MainSection className={`w-full md:w-[700px] mx-auto`}>
      <ul>
        <CardLi title={"Company Name:"} data={data.factory[0].username} />
        <CardLi title={"Description:"} data={data.factory[0].description} />
        <CardLi title={"Mobile:"} data={data.factory[0].firstMobile} />
        <CardLi title={"E-mail:"} data={data.factory[0].email} />
        <CardLi title={"Bio:"} data={data.factory[0].bio} />
        <CardLi title={"Address:"} data={data.factory[0].address} />
        <CardLi title={"Website:"} data={data.factory[0].website} />
        <CardLi title={"Link:"} data={data.factory[0].link} />
      </ul>
    </MainSection>
  );
};

export default AboutFac;
// export const userAdsFacLoader = async ({ params }) => {
//   const userFacId = params.facId;
//   const response = await fetch(
//     `https://net-zoon.onrender.com/advertisements/${userFacId}`
//   );
//   return response;
// };
