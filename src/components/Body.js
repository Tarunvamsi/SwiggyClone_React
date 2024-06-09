import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from "react";
import { resList as resData } from "../../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { cordinates } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestro, setFilteredRestro] = useState([]);

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
    setIsLoading(true);
    const location = cordinates["blr"];
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location[0]}&lng=${location[1]}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const responseJson = await response.json();
    console.log(responseJson);

    const filteredRestroById =
      filterApiDataById(
        "top_brands_for_you",
        responseJson.data.cards
      )?.gridElements.infoWithStyle.restaurants.map((restaurant) => {
        return restaurant.info;
      }) || [];

    setResList(filteredRestroById);
    setFilteredRestro(filteredRestroById);
    setIsLoading(false);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline..!! please check your internet connection{" "}
      </h1>
    );

  // conditional rendering
  if (isLoading) {
    return <Shimmer></Shimmer>;
  }

  if (resList.length === 0) {
    return (
      <div>
        <h1>Not servicable at this moment ..</h1>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.avgRating > 4.1);
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(() => e.target.value);
              console.log(searchText);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = !searchText
                ? resList
                : resList.filter((res) => {
                    return res.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                  });
              setFilteredRestro(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {
          filteredRestro.map((restaurant) => (
            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
              <RestaurantCard resData={restaurant} />{" "}
            </Link>
          )) //why keys?- to uniquely identify list items to not get rendered again and again
        }
      </div>
    </div>
  );
};

export default Body;
