import { useState, useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useeffect called");
  }, [btnName]);

  return (
    <div className=" z-10 flex justify-between bg-orange-300 shadow-lg mb-2  w-full sticky top-0 ">
      <div className="logo-container">
        <img className="w-20" alt="logo" src={LOGO_URL}></img>
      </div>
      <div>
        <h1 class="text-6xl font-bold text-orange-600 transition duration-300 transform hover:scale-105 hover:shadow-lg">
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
          <li className="px-4 font-semibold">Cart</li>
          <button
            className="font-semibold "
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login"); //if btn name is alread login , then change to logout , otherwise change to login once again
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
