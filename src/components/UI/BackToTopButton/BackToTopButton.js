import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const BackToTopButton = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    // Trigger the scroll event once to check visibility on initial load
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run only once on mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonContainerStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? "auto" : "none",
    transition: "opacity 0.3s ease-in-out",
  };

  const buttonStyle = {
    fontSize: "24px",
    cursor: "pointer",
  };

  return (
    <div style={buttonContainerStyle}>
      <BsFillArrowUpCircleFill
        className={`back-to-top-button ${className}`}
        style={buttonStyle}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default BackToTopButton;
