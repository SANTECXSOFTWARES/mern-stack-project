import { map } from "lodash";
import React from "react";
import * as routes from "./routePath";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const AppRouter = () => {
  const containers = map(routes, ({ path, component }, key) => <Route exact path={path} component={component} key={key} />
  );
  return (
    <>
      <Router>
        <React.Suspense fallback="Loading">
        <Switch>
          {containers}
          {/* <Route render={()=>(<Redirect to="/error" />)}/> */}
        </Switch>
        </React.Suspense>
      </Router>
    </>
  );
};

export default AppRouter;
