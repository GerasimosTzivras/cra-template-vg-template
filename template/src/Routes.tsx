import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const App = lazy(() => import("./App"))

function Routes(props: any) {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
      <Route exact path="/main">
        <App />
      </Route>
    </Switch>
  );
}
export default Routes;
