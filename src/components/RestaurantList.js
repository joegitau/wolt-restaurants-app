import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import { randomKey } from "../utils/randomKey";
import Pagination from "../utils/pagination";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(16);
  const [sortType, setSortType] = useState("asc");

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

  // sorting - asc / desc
  const sortedRestaurants = currentRestaurants.sort((a, b) => {
    const sortValue = sortType === "asc" ? 1 : -1;
    return sortValue * a.name.localeCompare(b.name);
  });

  const handleSorting = sortType => setSortType(sortType);

  return (
    <div className="content">
      <div className="row">
        <div className="twelve-columns">
          <button className="btn-main" onClick={() => handleSorting("asc")}>
            Sort Asc
          </button>
          <button className="btn-main" onClick={() => handleSorting("desc")}>
            Sort Desc
          </button>
        </div>
      </div>
      <div className="row">
        <div className="twelve-columns">
          <div className="row">
            {sortedRestaurants.map(restaurant => (
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
