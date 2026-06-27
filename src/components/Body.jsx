import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constants";
import "../styles/body.css";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const handleSearch = () => {
    const filtered = restaurantList.filter((r) =>
      r.name.toLowerCase().includes(searchText.toLowerCase()) ||
      r.cuisines.some((c) => c.toLowerCase().includes(searchText.toLowerCase()))
    );
    setRestaurants(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search restaurants or cuisines..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {restaurants.length === 0 ? (
        <p className="no-results">No restaurants found.</p>
      ) : (
        <div className="container">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
