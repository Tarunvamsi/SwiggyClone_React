import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from "react";
import { resList as resData } from "../../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const filterApiDataById = (id, cards) => {
    for (const item of cards) {
      if (item.card.card.id === id) {
        return item.card.card;
      }
    }
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.362436&lng=82.553086&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const responseJson = await response.json();
    setResList(() => {
      return filterApiDataById(
        "top_brands_for_you",
        responseJson.data.cards
      ).gridElements.infoWithStyle.restaurants.map((restaurant) => {
        return restaurant.info;
      });
    });
  };

  if (resList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.avgRating > 4.3);
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          )) //why keys?- to uniquely identify list items to not get rendered again and again
        }
      </div>
    </div>
  );
};

export default Body;
