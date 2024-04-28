import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="Header">
      <div className="LogoContainer">
        <img className="HeaderLogo" src={LOGO_URL} alt="" />
      </div>
      <div className="NavItems">
        <ul>
          <li>{onlineStatus? " " : "Offline: 🔴"}</li>
          <li><Link to ="/" style={{color: "white"}}>Home</Link></li>
          <li><Link to="/about" style={{color: "white"}}>About Us</Link></li>
          <li><Link to="/contact" style={{color: "white"}}>Contact</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="logged-user">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
