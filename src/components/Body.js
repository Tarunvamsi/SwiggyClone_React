import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from "react";
import { resList as resData } from "../../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_URL, cordinates } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Location from "./Location";

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
    const location = cordinates["mumbai"];
    const response = await fetch(RESTAURANT_LIST_URL(location));
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
      <div className="filter flex">
        <div className="px-6 m-4  flex items-center ">
          <button
            className="px-4 py-3 bg-orange-300 rounded-lg"
            onClick={() => {
              const filteredList = resList.filter((res) => res.avgRating > 4.1);
              setFilteredRestro(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="p-4 m-4">
          <input
            type="text"
            className=" px-6 py-3 border border-solid border-black"
            value={searchText}
            placeholder="Search Restaurants here..."
            onChange={(e) => {
              setSearchText(() => e.target.value);
              console.log(searchText);
            }}
          />
          <button
            className="px-6 py-3 bg-green-100 m-4 rounded-lg "
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
        <Location />
      </div>
      <div className="flex  w-full justify-center flex-wrap ">
        {
          filteredRestro.map((restaurant) => (
            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
              <RestaurantCard className="flex-1" resData={restaurant} />{" "}
            </Link>
          )) //why keys?- to uniquely identify list items to not get rendered again and again
        }
      </div>
    </div>
  );
};

export default Body;
