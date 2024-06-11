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
    <div className="m-4 p-4 w-[250px] bg-orange-100 shadow-xl rounded-lg justify-center">
      <img
        className="h-[180px] w-[220px] rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">
        {name.length > 23 ? `${name.slice(0, 20)}...` : name}
      </h3>
      <h4>{cuisines.slice(0, 2).join(", ")}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
        }}
      >
        <h5 className="py-3">⭐{avgRating} Stars</h5>{" "}
        <h5 className="py-3">{totalRatingsString}Ratings</h5>
      </div>

      <h5 className="font-medium">ETA: {sla.deliveryTime} Minutes</h5>
      <h5 className="font-medium">{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
