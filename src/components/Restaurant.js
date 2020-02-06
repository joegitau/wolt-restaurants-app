import React from "react";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="four-columns">
      <div className="item">
        <img
          className="img-raised"
          src={restaurant.image}
          alt={restaurant.name}
        />
        <div className="item-body">
          <div class="row">
            <div className="six-columns">
              <h5 className="item-city">{restaurant.city}</h5>
            </div>
            <div className="six-columns">
              <h5 className="item-delivery">
                {restaurant.delivery_price}
                {restaurant.currency}
              </h5>
            </div>
          </div>

          <h3 className="item-title">{restaurant.name}</h3>
          <p className="item-description">{restaurant.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
