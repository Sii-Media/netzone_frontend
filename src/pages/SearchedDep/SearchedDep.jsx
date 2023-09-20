import React from "react";
import SearchedItem from "../../components/SearchedItem/SearchedItem";
import PageSection from "../../components/UI/PageSection";

const SearchedDep = () => {
  return (
    <PageSection>
      <SearchedItem />
    </PageSection>
  );
};

export default SearchedDep;
export const searchedDepLoader = async ({ params }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const id = params.searchId;
  const currency = params.searchCurrency;
  if (id === "local_company" || id === "car" || id === "real_estate") {
    const response = await fetch(
      baseUrl + `/user/getUserByType?userType=${id}`
    );
    const data = await response.json();
    return { id, data };
  }
  if (id === "products") {
    const response = await fetch(
      baseUrl + `/departments/allProducts?country=${currency}`
    );
    const data = await response.json();
    return { id, data };
  }
  if (id === "advertisements") {
    const response = await fetch(baseUrl + `/${id}`);
    const data = await response.json();
    return { id, data };
  }
  if (id === "civilAirCraft") {
    const response = await fetch(
      baseUrl + `/categories/planes?country=${currency}`
    );
    const data = await response.json();
    return { id, data };
  }
};
