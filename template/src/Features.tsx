import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Compo = lazy(() => import("./modules/home"));
const BasicAntDesign = lazy(() => import("./modules/antDesign"));
const BasicSemanticUi = lazy(
  () => import("./modules/semanticUi/pages/BasicSemanticUi")
);

function Features(props: any) {
  return (
    <Switch>
      <Route exact path="/" component={Compo} />
      <Route exact path="/antdesign" component={BasicAntDesign} />
      <Route exact path="/semanticui" component={BasicSemanticUi} />
    </Switch>
  );
}
export default Features;
