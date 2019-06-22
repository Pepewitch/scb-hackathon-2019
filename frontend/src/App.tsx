import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Home from "./components/pages/Home";
import SelectTicket from "./components/pages/SelectTicket";
import Cart from "./components/pages/Cart";
import "normalize.css";
import "antd/dist/antd.css";
import "./App.css";
import List from "./components/pages/List";
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/ticket/:poolId" component={SelectTicket} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
