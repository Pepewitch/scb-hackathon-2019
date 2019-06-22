import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Home from "./components/pages/Home";
import 'antd/dist/antd.css'
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
