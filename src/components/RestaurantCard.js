import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  console.log("resData",resData);
  console.log("props",props);
  
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData; //object destructuring
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
