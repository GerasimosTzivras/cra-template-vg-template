import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
const Layout = lazy(() => import("./app/layout/Layout"));
function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Layout />
      </Router>
    </Suspense>
  );
}

export default App;
