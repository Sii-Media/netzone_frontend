import React from "react";
import SingleCata from "../../components/SingleCata/SingleCata";

const SingleCataPage = () => {
  return <SingleCata />;
};

export default SingleCataPage;
export const singleCataPageLoader = async ({ params }) => {
  const id = params.routeId;
  const response = await fetch(
    `https://net-zoon.onrender.com/user/getUserByType?userType=${id}`
  );
  const data = await response.json();
  return { id, data };
};
