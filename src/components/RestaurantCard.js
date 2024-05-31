import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.info; //object destructuring
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={ CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>{deliveryTime} Minutes</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
