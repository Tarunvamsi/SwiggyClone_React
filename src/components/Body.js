import RestaurantCard from "./RestaurantCard";
import React from "react";
import {resList as resData} from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(resData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
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
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )) //why keys?- to uniquely identify list items to not get rendered again and again
        }
      </div>
    </div>
  );
};

export default Body;
