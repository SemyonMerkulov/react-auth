import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Route path="/auth" component={Auth}/>
      <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;
