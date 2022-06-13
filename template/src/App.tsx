import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("./shared/layout/Layout"));

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
