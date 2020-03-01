import React from "react";
import Index from "./app/index";
import Add from "./app/add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
