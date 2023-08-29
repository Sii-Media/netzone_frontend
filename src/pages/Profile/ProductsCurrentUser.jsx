import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import Card from "../../components/UI/Card";
const ProductsCurrentUser = () => {
  const data = useRouteLoaderData("currentLoader");
  console.log(data);

  return (
    <div className={`w-[80%] md:w-[900px] mx-auto mt-5 `}>
      <ul className={` flex justify-between items-center flex-wrap`}>
        {data.map((ele) => (
          <li className={`mb-5`}>
            <Card
              className={`!mr-0`}
              imgSrc={ele.imageUrl}
              imgAlt={ele.name || ele.title}
              title={ele.name || ele.title}
            />
            {/* <img src={ele.imageUrl} alt={ele.name} className={`w-36`} />
            <h3>{ele.name || ele.title}</h3>
            <p>{ele.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsCurrentUser;
