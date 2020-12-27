import React from "react";
// import logo from './logo.svg';
import { Homepage } from "./components/homePage/homepage.component";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
