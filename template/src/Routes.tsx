import React, { lazy } from "react";
import { Switch, Route} from "react-router-dom";

const Compo = lazy(() => import("./components/Compo"));
const BasicAntDesign = lazy(() =>
  import("./components/antdesign/BasicAntDesign")
);
const BasicSemanticUi = lazy(() => import("./components/semanticui/BasicSemanticUi"))

function Routes(props: any) {
  return (
    <Switch>
      <Route exact path="/" component={Compo} />
      <Route exact path="/antdesign" component={BasicAntDesign} />
      <Route exact path="/semanticui" component={BasicSemanticUi} />
    </Switch>
  );
}
export default Routes;
