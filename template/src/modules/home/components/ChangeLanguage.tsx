import React from "react";
import i18n from "i18next";

import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { t } = useTranslation();
  function changeLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }
  return (
    <div>
      <button onClick={() => changeLanguage("el")}>Greek</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
};

export default ChangeLanguage;
