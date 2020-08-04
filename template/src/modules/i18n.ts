import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import elGR from "../assets/elGR.json";
import enUS from "../assets/enUS.json";

//todo lng must understand automatically if the ip is in greece and send greek or if in other country send en
i18n.use(initReactI18next).init({
  resources: {
    el: {
      translation: elGR,
    },
    en: {
      translation: enUS,
    },
  },
  lng: "el",

  interpolation: {
    escapeValue: false, // react already safe from xss
  },
});

export default i18n;
