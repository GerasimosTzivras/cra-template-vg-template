import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const BasicSemanticUi = lazy(() => import("../../pages/BasicSemanticUi"));

function SemanticUiRoutes() {
  return (
    <Switch>
      <Route path="/" component={BasicSemanticUi} />
    </Switch>
  );
}

export default SemanticUiRoutes;
