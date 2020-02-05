import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const data = await fetch("./_data/restaurants.json");
    const restaurants = await data.json();
    console.log(restaurants.restaurants);
    setRestaurants(restaurants.restaurants);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="content">
      <div className="row">
        <div className="twelve columns">
          <button className="btn-main">Sort Asc</button>
          <button className="btn-main">Sort Desc</button>
        </div>
        <div className="row">
          <div className="twelve columns">
            {restaurants.map(restaurant => (
              <Restaurant restaurant={restaurant} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">Pagination</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
