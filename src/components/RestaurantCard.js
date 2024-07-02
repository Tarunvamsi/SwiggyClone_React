import { CDN_URL, PURE_VEG_LOGO } from "../../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    locality,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    totalRatingsString,
  } = resData; //object destructuring
  return (
<div className="m-4 p-4 w-[250px] bg-white shadow-2xl rounded-lg justify-center border hover:border-black">
<img
        className="h-[180px] w-[220px] rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">
        {name.length > 23 ? `${name.slice(0, 20)}...` : name}
      </h3>
      

      <h4>{cuisines.slice(0, 2).join(", ")}</h4>
      <h4 className="font-semibold py-1">
        📍{locality.length > 18 ? `${locality.slice(0, 17)}...` : locality}
      </h4>
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

//Higher Order Component --> Input restro card --> Output restaurant is open

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div class="-z-50 inline-block">
        <div class=" absolute flex items-center bg-gradient-to-r from-green-400 to-green-600 text-white m-1 py-2 px-4 rounded-full shadow-lg space-x-2">
          <img
            src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
            alt="Veg Icon"
            class="h-4 w-4  border-2 border-white shadow-md"
          />
          <span class=" font-semibold text-sm">Pure Veg</span>
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;




