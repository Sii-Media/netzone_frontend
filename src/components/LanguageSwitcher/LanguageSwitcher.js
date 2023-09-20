import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ className }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    const direction = selectedLanguage === "ar" ? "rtl" : "ltr";

    // Set the language and direction in local storage
    localStorage.setItem("selectedLanguage", selectedLanguage);
    localStorage.setItem("direction", direction);

    i18n.changeLanguage(selectedLanguage);
    document.documentElement.dir = direction;
  };

  // Get the detected language from i18n.language or retrieve from local storage
  const detectedLanguage =
    i18n.language || localStorage.getItem("selectedLanguage");

  // Get the direction from local storage
  const direction = localStorage.getItem("direction");

  // Set the initial direction
  useEffect(() => {
    if (direction) {
      document.documentElement.dir = direction;
    }
  }, [direction]);

  return (
    <select
      onChange={changeLanguage}
      value={detectedLanguage}
      className={`outline-none ${className}`}
    >
      <option value="en">EN</option>
      <option value="ar">عربي</option>
    </select>
  );
};

export default LanguageSwitcher;
