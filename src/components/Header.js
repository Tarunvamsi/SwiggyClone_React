import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    // console.log("useeffect called");
  }, [btnName]);

  const cartItems = useSelector((store) => store.cart.items); //subscribing to store using selector

  return (
    <div className=" z-10 flex justify-between bg-orange-300 shadow-lg mb-2  w-full sticky top-0 ">
      <div className="logo-container">
        <img className="w-20" alt="logo" src={LOGO_URL}></img>
      </div>
      <div>
        <h1 className="text-6xl font-bold text-orange-600 transition duration-300 transform hover:scale-105 hover:shadow-lg">
          Foodie Haven
        </h1>
      </div>
      <div className="flex items-center px-2">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-semibold">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/grocery">GroceryStore</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/cart">Cart🛒({cartItems.length})</Link>
          </li>

          <button
            className="font-semibold "
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login"); //if btn name is alread login , then change to logout , otherwise change to login once again
              // console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
