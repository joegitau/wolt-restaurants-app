import React from "react";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="three columns">
      <div className="item">
        <div className="item-body">
          <img src={restaurant.image} alt={restaurant.name} />
          <h1>{restaurant.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
