import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    totalRatingsString,
  } = resData; //object destructuring
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
        }}
      >
        <h5>{avgRating} Stars</h5> <h5>{totalRatingsString}Ratings</h5>
      </div>

      <h5>{sla.deliveryTime} Minutes</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
