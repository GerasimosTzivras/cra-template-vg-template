import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const BasicAntDesign = lazy(() => import("../../pages/BasicAntDesign"));

function AntDesingRoutes() {
  return (
    <Switch>
      <Route path="/" component={BasicAntDesign} />
    </Switch>
  );
}

export default AntDesingRoutes;
