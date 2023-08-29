import React from "react";
import ProductDetailsComp from "../../components/ProductDetails/ProductDetailsComp";

const ProductDetails = () => {
  return <ProductDetailsComp />;
};

export default ProductDetails;
export const productDetailsLoader = async ({ params }) => {
  console.log(params);
  const productId = params.productId;
  console.log(productId);
  const response = await fetch(
    `https://net-zoon.onrender.com/departments/getproduct/${productId}`
  );
  const data = await response.json();
  return data;
};
