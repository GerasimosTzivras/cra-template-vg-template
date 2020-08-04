import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
import ChangeLanguage from './components/ChangeLanguage'
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('LAYOUT.LOGIN')}
        </a>
        <ChangeLanguage />
      </header>
    </div>
  );
}

export default App;

// The following code is used for react-router
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./Routes"; 

// function App() {
//   return (
//     <Router>
//       <Routes />
//     </Router>
//   );
// }

// export default App;

