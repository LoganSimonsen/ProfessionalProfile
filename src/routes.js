import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Story from "./components/Story/Story";
import Skills from "./components/Skills/Skills";
import Accomplishments from "./components/Accomplishments/Accomplishments";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/Story" component={Story} />
    <Route exact path="/Skills" component={Skills} />
    <Route exact path="/Accomplishments" component={Accomplishments} />

    <Route
      path="*"
      render={() => (
        <div>
          <p>Not Found</p>
        </div>
      )}
    />
  </Switch>
);
