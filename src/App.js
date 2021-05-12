import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth}>
          <Auth/>
        </Route>
        <Route path="/" component={Home}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
