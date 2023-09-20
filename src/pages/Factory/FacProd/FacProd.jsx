import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetailsPageCard from "../../../components/UI/ProductDetailsPageCard/ProductDetailsPageCard";
import ReactPlayer from "react-player";
import { Hidden } from "@mui/material";

const FacProd = () => {
  const data = useLoaderData();
  return (
    <>
      <ProductDetailsPageCard
        id={data._id}
        title={data.title}
        description={data.description}
        imgAlt={data.title}
        imgSrc={data.imageUrl}
        imgs={data.serviceImageList}
        totalRatings={data.averageRating}
        ishidden={Hidden}
        ratingValue={data.totalRatings}
        owner={data.owner.username}
        ownerType={data.owner.userType}
        condition={!data.condition ? "N/A" : data.condition}
        category={!data.category ? "N/A" : data.category}
      />
      <div className={`w-[65%] mx-auto mb-4 rounded-lg overflow-hidden`}>
        <ReactPlayer
          url={data.vedioUrl}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default FacProd;
export const facProdLoader = async ({ params }) => {
  const prodId = params.productId;
  console.log(prodId);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const response = await fetch(
    baseUrl + `/categories/local-company/get-service/${prodId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
