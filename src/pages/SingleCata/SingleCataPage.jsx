import React from "react";
import SingleCata from "../../components/SingleCata/SingleCata";

const SingleCataPage = () => {
  return <SingleCata />;
};

export default SingleCataPage;
export const singleCataPageLoader = async ({ params }) => {
  const id = params.routeId;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const currency = params.currency;
  const response = await fetch(
    baseUrl + `/user/getUserByType?userType=${id}&country=${currency}`
  );
  const data = await response.json();
  return { id, data };
};
