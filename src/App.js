import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Login from "./containers/Login";
import Dasbord from "./containers/Dasbord";
import Register from "./containers/Register";
import ForgotPassword from "./containers/ForgotPassword";

class App extends Component {
  componentDidMount() {
    console.log("in did mount");
  }

  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route path="/dashboard" component={Dasbord} />
        </Switch>
      </Router>
    );
  }
}

export default App;
