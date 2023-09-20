import React from "react";
import { Link } from "react-router-dom";

const FooterULsStatic = ({ title, items }) => {
  return (
    <div className="flex flex-col mb-4 mr-4 w-[28%] md:w-[11%]">
      <h3 className={`text-xl font-semibold text-black overflow-hidden text-ellipsis whitespace-nowrap`}>{title}</h3>
      <ul>
        {items.map((ele, i) => (
          <li key={i} className={`w-full text-ellipsis overflow-hidden`}>
            <Link
              className={`text-white whitespace-nowrap text-ellipsis`}
              to={ele.path}
            >
              {ele.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterULsStatic;
