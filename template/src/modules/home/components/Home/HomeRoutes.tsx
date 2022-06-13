import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Landing = lazy(() => import("../../pages/Landing"));

function HomeRoutes() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  );
}

export default HomeRoutes;
