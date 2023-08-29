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
  const id = params.searchId;
  const currency = params.searchCurrency;
  if (id === "local_company" || id === "car" || id === "real_estate") {
    const response = await fetch(
      `https://net-zoon.onrender.com/user/getUserByType?userType=${id}`
    );
    const data = await response.json();
    return { id, data };
  }
  if (id === "products") {
    const response = await fetch(
      `https://net-zoon.onrender.com/departments/allProducts?country=${currency}`
    );
    const data = await response.json();
    return { id, data };
  }
  if (id === "advertisements") {
    const response = await fetch(`https://net-zoon.onrender.com/${id}`);
    const data = await response.json();
    return { id, data };
  }
  if (id === "civilAirCraft") {
    const response = await fetch(
      `https://net-zoon.onrender.com/categories/planes?country=${currency}`
    );
    const data = await response.json();
    return {id, data};
  }
};
