import { useState, useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  useEffect(() => {
    console.log("useeffect called");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL}></img>
      </div>
      <div className="company">
        <h1>Quick Cuisine</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li className="btn">Home</li>
          <li className="btn">About Us</li>
          <li className="btn">Contact us</li>
          <li className="btn">Cart</li>
          <button
            className="login-btn"
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
