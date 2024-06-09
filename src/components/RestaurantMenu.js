import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG_ID } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const resNamePath = resInfo?.data?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card.card?.card?.itemCards || card.card?.card?.categories
    );

  return (
    <div className="menu">
      <h1 className="resName-menu"> {resNamePath.name}</h1>
      <p className="cusienes">
        {resNamePath.cuisines.join(",")} - {resNamePath.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <div className="menuBox">
        {categories.map((category, index) => {
          const categoryTitle = category.card.card.title;
          const menuItems =
            category.card.card.itemCards ||
            category.card.card.categories[0].itemCards;

          return (
            <div key={index} className="categorySection">
              <h3 className="categoryTitle">{categoryTitle}</h3>
              <div className="categoryItems">
                {menuItems.map((item) => (
                  <div className="menuCard" key={item.card.info.id}>
                    <img
                      className="menu-img"
                      alt="image"
                      src={MENU_IMG_ID + item.card.info.imageId}
                    />
                    <div> {item.card.info.name}</div>
                    <div>
                      Rs{" "}
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}{" "}
                      - ⭐{item.card.info.ratings.aggregatedRating.rating} (
                      {item.card.info.ratings.aggregatedRating.ratingCount})
                    </div>
                    <div className="menudesc">{item.card.info.description}</div>
                    <div>
                      <button className="addcart-btn">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
