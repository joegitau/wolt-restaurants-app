import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import { randomKey } from "../utils/randomKey";
import Pagination from "../utils/pagination";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(16);

  const fetchRestaurants = async () => {
    const data = await fetch("./_data/restaurants.json");
    const restaurants = await data.json();
    setRestaurants(restaurants.restaurants);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // pagination
  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurants.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  const handlePagination = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="content">
      <div className="row">
        <div className="twelve-columns">
          <button className="btn-main">Sort Asc</button>
          <button className="btn-main">Sort Desc</button>
        </div>
      </div>
      <div className="row">
        <div className="twelve-columns">
          <div className="row">
            {currentRestaurants.map(restaurant => (
              <Restaurant restaurant={restaurant} key={randomKey(5)} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="twelve-columns">
          <Pagination
            restaurantsPerPage={restaurantsPerPage}
            totalRestaurants={restaurants.length}
            onPaginate={handlePagination}
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
