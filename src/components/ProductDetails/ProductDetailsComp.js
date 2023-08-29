import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetailsPageCard from "../UI/ProductDetailsPageCard/ProductDetailsPageCard";

const ProductDetailsComp = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <ProductDetailsPageCard
      imgSrc={data.imageUrl}
      imgAlt={data.name}
      title={data.name}
      description={data.description}
      Price={data.price}
      ratingValue={data.averageRating}
      totalRatings={data.totalRatings}
      imgs={data.images}
      category={data.category.name}
      owner={data.owner.username}
      quantity={data.quantity}
      condition={data.condition}
      guarantee={data.guarantee}
    />
  );
};

export default ProductDetailsComp;
