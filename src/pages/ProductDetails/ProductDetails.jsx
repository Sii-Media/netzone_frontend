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
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(
    baseUrl + `/departments/getproduct/${productId}`
  );
  const data = await response.json();
  return data;
};
