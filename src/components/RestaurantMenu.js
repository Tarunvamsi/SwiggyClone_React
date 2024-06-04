import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(MENU_API + resId);
    const menuJsonResponse = await menuData.json();

    // console.log("menu", menuJsonResponse.data.cards[2].card.card.info.cuisines);
    setResInfo(menuJsonResponse);
  };

  if (resInfo === null) return <Shimmer />;

  const resNamePath = resInfo?.data?.cards[2]?.card?.card?.info;
  const menuPath =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      <h1> {resNamePath.name}</h1>
      <p>
        {resNamePath.cuisines.join(",")} - {resNamePath.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {menuPath.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
