import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  //setRestroList will modify the list
  const [restroList, setRestroList] = useState([
    {
      info: {
        name: "Dominos",
        avgRating: "4.5",
        id: "334228",
        cuisines: ["Pizzas"],
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        deliveryTime: 23,
      },
    },
    {
      info: {
        name: "KFC",
        avgRating: "3.3",
        id: "334229",
        cuisines: ["Chicken"],
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        deliveryTime: 33,
      },
    },
    {
      info: {
        name: "MacD",
        avgRating: "4.1",
        id: "334230",
        cuisines: ["burger"],
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        deliveryTime: 33,
      },
    },
  ]);

  //state variable - super powerful variable

  // normal Javascript Variable
  let restroList1 = [
    {
      info: {
        name: "Dominos",
        avgRating: "4.5",
        id: "334228",
        cuisines: ["Pizzas"],
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        deliveryTime: 23,
      },
    },
    {
      info: {
        name: "KFC",
        avgRating: "3.3",
        id: "334229",
        cuisines: ["Chicken"],
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        deliveryTime: 33,
      },
    },
    {
      info: {
        name: "MacD",
        avgRating: "4.1",
        id: "334230",
        cuisines: ["burger"],
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        deliveryTime: 33,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredrestroList = restroList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestroList(filteredrestroList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          restroList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )) //why keys?- to uniquely identify list items to not get rendered again and again
        }
      </div>
    </div>
  );
};

export default Body;
