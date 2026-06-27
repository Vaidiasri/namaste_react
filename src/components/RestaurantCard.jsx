import React from "react";
import "../styles/card.css";

const RestaurantCard = ({ name, cuisines, avgRating, deliveryTime, costForTwo, bgColor }) => {
  return (
    <div className="card">
      <div className="card-img" style={{ backgroundColor: bgColor }}>
        <span className="card-img-label">{name[0]}</span>
      </div>
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-cuisines">{cuisines.join(", ")}</p>
        <div className="card-info">
          <span className="card-rating">⭐ {avgRating}</span>
          <span className="card-dot">•</span>
          <span className="card-time">{deliveryTime}</span>
        </div>
        <p className="card-cost">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
