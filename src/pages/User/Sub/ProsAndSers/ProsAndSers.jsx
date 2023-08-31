import React from "react";
import ProductDetailsPageCard from "../../../../components/UI/ProductDetailsPageCard/ProductDetailsPageCard";
import { useLoaderData } from "react-router-dom";

const ProsAndSers = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <ProductDetailsPageCard
      title={data.name || data.title}
      description={data.description}
      imgSrc={data.imageUrl}
      imgAlt={data.name || data.title}
      Price={data.price}
      totalRatings={data.totalRatings}
      ratingValue={data.averageRating}
      imgs={data.images || []}
      owner={data.owner ? data.owner.username : data.creator.username}
      category={data.category ? data.category.name : "Services"}
    />
  );
};

export default ProsAndSers;
export const prosAndSersLoader = async ({ params }) => {
  const prodId = params.prodId;
  console.log(prodId);
  const userId = params.userId;
  const responseOfUser = await fetch(
    `https://net-zoon.onrender.com/user/getUser/${userId}`
  );
  const dataOfUser = await responseOfUser.json();
  const isService = dataOfUser.isService;
  const dataId = dataOfUser._id;
  const userType = dataOfUser.userType;
  console.log(dataId);
  const prodServId = params.prodId;
  if (isService === false || isService === undefined) {
    if (userType === "local_company") {
      const product = await fetch(
        `https://net-zoon.onrender.com/departments/getproduct/${prodServId}`
      );
      const data = await product.json();
      console.log(data);
      return data;
    }
    if (userType === "car" || userType === "plans") {
      const product = await fetch(
        `https://net-zoon.onrender.com/categories/vehicle/${prodServId}`
      );
      const data = await product.json();
      console.log(data);
      const results = data.results;
      return results;
    }
  } else {
    const product = await fetch(
      `https://net-zoon.onrender.com/categories/local-company/get-service/${prodServId}`
    );
    const data = await product.json();
    console.log(data);
    return data;
  }
};
