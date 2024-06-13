import Location from "../src/components/Location";
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL = "https://i.ibb.co/fQNCBDM/image-removebg-preview-2.png";
export const cordinates = {
  tuni: ["17.362436", "82.553086"],
  blr: ["12.9352403", "77.624532"],
  delhi: ["28.7040592", "77.10249019999999"],
  mumbai: ["19.0759837", "72.8776559"],
};

export const MENU_API = `${process.env.REACT_APP_PROXY_SERVER_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=`;

export const MENU_IMG_ID =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

// export const RESTAURANT_LIST_URL = (location) =>
//   `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location[0]}&lng=${location[1]}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

export const RESTAURANT_LIST_URL = (lat = 12.9715987, lng = 77.5945627) =>
  `${process.env.REACT_APP_PROXY_SERVER_URL}/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
