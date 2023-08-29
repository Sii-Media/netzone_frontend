import React from "react";
import "./MultiItemCarousel.css";
const MainSection = ({ children, className }) => {
  return (
    <section className={`px-4 rounded-lg md:mt-8 mt-14 ${className}`}>
      {children}
    </section>
  );
};

export default MainSection;
