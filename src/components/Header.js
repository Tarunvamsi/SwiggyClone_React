import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import AboutUsIcon from "./icons/AboutUsIcon";
import HomeIcon from "./icons/HomeIcon";
import ContactUsIcon from "./icons/ContactUsIcon";
import CartIcon from "./icons/CartIcon";
import LoginIcon from "./icons/LoginIcon";
import GroceryIcon from "./icons/GroceryIcon";
import OnlineIcon from "./icons/OnlineIcon";
import OfflineIcon from "./icons/OfflineIcon";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    // console.log("useeffect called");
  }, [btnName]);

  const cartItems = useSelector((store) => store.cart.items); //subscribing to store using selector

  return (
    <div className=" z-10 flex justify-between bg-white shadow-lg mb-2  w-full sticky top-0 ">
      <div className="logo-container">
        <img className="w-[110] m-4" alt="logo" src={LOGO_URL}></img>
      </div>
      <div>
        <h1 className="text-6xl font-bold text-orange-600 transition duration-300 transform hover:scale-105 hover:shadow-lg"></h1>
      </div>
      <div className="flex items-center px-2">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-semibold">
            {onlineStatus ? <OnlineIcon /> : <OfflineIcon />}
          </li>
          <li className="px-4 font-semibold">
            <Link to="/">
              <HomeIcon></HomeIcon>
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/about">
              <AboutUsIcon></AboutUsIcon>
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">
              <ContactUsIcon></ContactUsIcon>
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/grocery">
              <GroceryIcon></GroceryIcon>
            </Link>
          </li>
          <li className="px-4 font-semibold relative">
            <Link to="/cart" style={{ display: "inline-block" }}>
              <CartIcon />{" "}
              {/* Assuming CartIcon is a component that renders your cart icon */}
              <span
                style={{
                  position: "absolute",
                  top: "-5px", // Adjust as per your design
                  right: "-5px", // Adjust as per your design
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.7rem",
                }}
              >
                {cartItems.length}
              </span>
            </Link>
          </li>

          {/* <button
            className="font-semibold "
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login"); //if btn name is alread login , then change to logout , otherwise change to login once again
              // console.log(btnName);
            }}
          >
            {btnName}
          </button> */}

          <LoginIcon></LoginIcon>
          <li className="px-4 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
