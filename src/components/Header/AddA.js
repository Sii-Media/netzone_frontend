import React from "react";
import Select, { components } from "react-select";
import { NavLink } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const DropDown = ({ className }) => {
  // Retrieve user data from localStorage
  const userJSON = localStorage.getItem("user");
  const user = userJSON ? JSON.parse(userJSON) : {};

  // Use optional chaining to safely access properties
  const { userType, isService } = user.result || {};
  const { t } = useTranslation();

  let dynamicOptions = [];

  if (userType === "local_company" || userType === "trader") {
    if (!isService) {
      dynamicOptions = [
        { value: "products", label: t("Products"), path: "add/products" },
        {
          value: "advertisement",
          label: t("Advertisement"),
          path: "add/advertisement",
        },
        { value: "deal", label: t("deal"), path: "add/deal" },
      ];
    } else {
      dynamicOptions = [
        { value: "services", label: t("Services"), path: "add/services" },
        {
          value: "advertisement",
          label: t("Advertisement"),
          path: "add/advertisement",
        },
        { value: "deal", label: t("deal"), path: "add/deal" },
      ];
    }
  }
  const currency = useSelector((state) => state.currency.selectedCurrency);
  if (userType === "user") {
    dynamicOptions = [
      {
        value: "selectFromOurProducts",
        label: t("select_from_our_products"),
        path: `/add/selectFromOurProducts/${currency}`,
      },
      {
        value: "advertisement",
        label: t("Advertisement"),
        path: "add/advertisement",
      },
      { value: "deal", label: t("deal"), path: "add/deal" },
    ];
  }
  if (userType === "delivery_company") {
    dynamicOptions = [
      {
        value: "addDeliveryService",
        label: t("add_delivery_service"),
        path: `/add/addDeliveryService`,
      },
      {
        value: "advertisement",
        label: t("Advertisement"),
        path: "add/advertisement",
      },
      { value: "deal", label: t("deal"), path: "add/deal" },
    ];
  }

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

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <AiOutlinePlusSquare className={`text-[#5776a5] text-2xl`} />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className={`w-32 lg:w-40 cursor-pointer ${className}`}>
      <Select
        styles={colourStyles}
        placeholder={`${t("Add a")}...`}
        options={dynamicOptions}
        formatOptionLabel={formatOptionLabel}
        components={{ DropdownIndicator }}
      />
    </div>
  );
};

export default DropDown;
