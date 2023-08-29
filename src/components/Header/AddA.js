import React from "react";
import Select, { components } from "react-select";
import { NavLink } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useTranslation } from "react-i18next";
// import "./Adda.css";
const options = [
  { value: "products", label: "Products", path: "/products" },
  { value: "services", label: "Services", path: "/services" },
  { value: "deal", label: "Deal", path: "/deal" },
  { value: "advertisement", label: "Advertisement", path: "/advertisement" },
  { value: "news", label: "News", path: "/news" },
  { value: "cars", label: "Cars", path: "/cars" },
  { value: "aircraft", label: "Aircraft", path: "/aircraft" },
  { value: "realestate", label: "Real Estate", path: "/realestate" },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <AiOutlinePlusSquare className={`text-[#5776a5] text-2xl`} />
    </components.DropdownIndicator>
  );
};

const DropDown = () => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      cursor: "pointer",
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
    <div className="w-32 lg:w-40 cursor-pointer">
      <Select
        styles={colourStyles}
        placeholder={`${t("Add a")}...`}
        options={options}
        formatOptionLabel={formatOptionLabel}
        components={{ DropdownIndicator }}
      />
    </div>
  );
};

export default DropDown;
