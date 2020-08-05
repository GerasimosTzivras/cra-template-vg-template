import React from 'react';
import logo from '../logo.svg';
import { useTranslation } from "react-i18next";
import ChangeLanguage from './ChangeLanguage'
import ChangeTheme from './ChangeTheme';

function Components() {
  const { t } = useTranslation();
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('LAYOUT.LOGIN')}
      </a>
      <ChangeLanguage />
      <br />
      <ChangeTheme />
    </header>
  </div>
       
       
    
    
  );
}

export default Components;


