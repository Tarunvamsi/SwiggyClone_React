import React, { createContext, useState, useContext } from "react";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [resList, setResList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  return (
    <RestaurantContext.Provider
      value={{ resList, setResList, filteredRestro, setFilteredRestro }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
