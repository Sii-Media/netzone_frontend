import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ path, children, onClick }) => {
  return (
    <li className={``}>
      <NavLink
        onClick={onClick}
        to={path}
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
      >
        {children}
      </NavLink>
    </li>
  );
};

export default CustomNavLink;
