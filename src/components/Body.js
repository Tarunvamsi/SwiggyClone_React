import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from "react";
import { resList as resData } from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(resData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const responseJson = await response.json();

    setResList(() => {
      return responseJson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
        (restaurant) => {
          return restaurant.info;
        }
      );
    });
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.avgRating > 4.3);
            // console.log( filteredList)
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
