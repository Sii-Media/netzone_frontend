import React from "react";
import { Link } from "react-router-dom";

const FooterULsStatic = ({ title, items }) => {
  return (
    <div className="flex flex-col justify-between mb-4 mr-4 " >
      <h3 className={`text-xl font-semibold text-black`}>{title}</h3>
      <ul>
        {items.map((ele, i) => (
          <li key={i}>
            <Link className={`text-white`} to={ele.path}>
              {ele}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterULsStatic;
