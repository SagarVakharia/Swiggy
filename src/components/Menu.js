import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=54053"
    );
    const json = await data.json();
    console.log(json);
    
    setResInfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } = resInfo ?  resInfo?.cards[0]?.card?.card?.info : "";
  console.log(resInfo);

  return resInfo === null ? (
    <Shimmer />
  ) : ( resInfo &&
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        <li>Coffee</li>
        <li>Cookie</li>
      </ul>
    </div>
  );
};

export default Menu;
