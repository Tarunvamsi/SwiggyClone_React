import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(MENU_API + resId, {
      headers: {
        "x-cors-api-key": process.env.CORS_API_KEY,
      },
    });
    const menuJsonResponse = await menuData.json();
    setResInfo(menuJsonResponse);
  };

  return resInfo;
};

export default useRestaurantMenu;
