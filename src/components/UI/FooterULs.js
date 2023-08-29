import React from "react";
import { Link } from "react-router-dom";

const FooterULs = ({ title, items }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.map((ele) => (
          <li>
            <Link to={ele.path}>{ele.linkTitle}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterULs;
