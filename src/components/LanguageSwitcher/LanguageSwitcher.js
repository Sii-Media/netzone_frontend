import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    document.documentElement.dir = selectedLanguage === "ar" ? "rtl" : "ltr";
  };

  // Get the detected language from i18n.language
  const detectedLanguage = i18n.language;

  return (
    <select onChange={changeLanguage} value={detectedLanguage} className={`outline-none`}>
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  );
};

export default LanguageSwitcher;
