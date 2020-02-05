import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Restaurant from "./Restaurant";
import NotFound from "./NotFound";
import RestaurantList from "./RestaurantList";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/" component={RestaurantList} exact />
        <Route path="/restaurant/:id" component={Restaurant} exact />
        <Router component={NotFound} />
      </Switch>
    </div>
  );
};
export default App;
