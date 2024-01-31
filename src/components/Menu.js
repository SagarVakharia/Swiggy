import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_Url } from "../utils/constants";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const resId = useParams();
  // console.log("Params data : ", resId);

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(Menu_Url + resId.resId); // API call for menu of each url
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("Item Cards : ", itemCards);

  return (
    resInfo && (
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <button className="recommended" onClick={toggleMenu}>Recommended ▼</button>
        {/* Display the menu only if isMenuOpen is true */}
        {isMenuOpen && (
          <div>
            <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))}
        </ul>
          </div>
        )}
      </div>
    )
  );
};

export default Menu;
