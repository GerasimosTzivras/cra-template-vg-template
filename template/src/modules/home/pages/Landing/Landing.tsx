import React from "react";
import { useTranslation } from "react-i18next";
import { HackerWalking } from "../../../../assets";
import ChangeLanguage from "../../components/ChangeLanguage";
import ChangeTheme from "../../components/ChangeTheme";

function Landing() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={HackerWalking} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("LAYOUT.LOGIN")}
        </a>
        <ChangeLanguage />
        <br />
        <ChangeTheme />
      </header>
    </div>
  );
}

export default Landing;
