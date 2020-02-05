import React from "react";

const RestaurantList = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="twelve columns">
          <button className="btn-main">Sort Asc</button>
          <button className="btn-main">Sort Desc</button>
        </div>
        <div className="row">
          <div className="twelve columns">All Restaurants</div>
        </div>
        <div className="row">
          <div className="twelve columns">Pagination</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
