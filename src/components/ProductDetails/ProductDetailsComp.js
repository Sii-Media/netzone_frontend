import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetailsPageCard from "../UI/ProductDetailsPageCard/ProductDetailsPageCard";

const ProductDetailsComp = () => {
  const data = useLoaderData();

  return (
    <ProductDetailsPageCard
      id={data._id}
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
      ownerType={data.owner.userType}
      quantity={data.quantity}
      condition={data.condition}
      guarantee={data.guarantee}
    />
  );
};

export default ProductDetailsComp;
