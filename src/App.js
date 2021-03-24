import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { HomePage } from "pages";
import { AppProvider } from "./appProvider";

//
function index() {
  const history = createBrowserHistory();
  return (
    <AppProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default index;
