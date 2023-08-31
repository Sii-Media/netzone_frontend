import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetailsPageCard from "../../../components/UI/ProductDetailsPageCard/ProductDetailsPageCard";

const FacProd = () => {
  const data = useLoaderData();
  return (
    <ProductDetailsPageCard
      title={data.title}
      description={data.description}
      imgAlt={data.title}
      imgSrc={data.imageUrl}
      imgs={data.serviceImageList}
      totalRatings={data.averageRating}
      ratingValue={data.totalRatings}
      owner={data.owner.username}
      condition={!data.condition && "N/A"}
      category={!data.category && "N/A"}
    />
  );
};

export default FacProd;
export const facProdLoader = async ({ params }) => {
  const prodId = params.productId;
  console.log(prodId);
  const response = await fetch(
    `https://net-zoon.onrender.com/categories/local-company/get-service/${prodId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
