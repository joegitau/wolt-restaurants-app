import React from "react";

import Nav from "./Nav";
import RestaurantList from "./RestaurantList";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <RestaurantList />
      </div>
    </React.Fragment>
  );
};
export default App;
