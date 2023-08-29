import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Select, { components } from "react-select";
import "./Adda.css";
import { useTranslation } from "react-i18next";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <AiOutlineSearch className={`text-[#5776a5] text-2xl`} />
    </components.DropdownIndicator>
  );
};
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    cursor: "pointer",
    border: "#5776a5 1px solid",
    borderRadius: "20px",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = "red";
    return {
      ...styles,
      backgroundColor: isFocused ? "#5776A56B" : "white",
      transition: "0.3s",
      color: isSelected ? "#5776a5" : "#000000",
      backgroundColor: isSelected ? "#5776A56B" : "white",
    };
  },
};
const Search = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const options = [
    {
      value: "All_Departments",
      label: "All Departments",
      path: "/",
    },
    {
      value: "local_company",
      label: "Local Companies",
      path: "/search/local_company",
    },
    {
      value: "products",
      label: "Products",
      path: `/search/products/${currency}`,
    },
    {
      value: "advertisement",
      label: "Advertisement",
      path: "/search/advertisements",
    },
    { value: "car", label: "Cars", path: "/search/car" },
    {
      value: "civilAirCraft",
      label: "Civil AirCraft",
      path: `/search/civilAirCraft/${currency}`,
    },
    { value: "real_estate", label: "Real Estate", path: "/search/real_estate" },
  ];
  const formatOptionLabel = ({ label, path }) => (
    <NavLink
      className={({ isActive }) =>
        [
          isActive ? "text-[#5776a5]" : "text-gray-500",
          "block",
          "text-center",
          "hover:text-[#5776a5]",
          "transition-colors",
          "duration-[300ms]",
          "font-extrabold",
        ].join(" ")
      }
      to={path}
    >
      {label}
    </NavLink>
  );
  const { t } = useTranslation();
  return (
    <div className="w-72 md:w-[35rem] mb-2 md:mb-0 mx-0 md:mx-2  cursor-pointer custom-select">
      <Select
        styles={colourStyles}
        placeholder={t(`Search in Netzoon`)}
        options={options}
        components={{ DropdownIndicator }}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default Search;
