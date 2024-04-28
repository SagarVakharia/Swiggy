import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import RestaurantCategory from "./RestaurantCategory";

const Menu = () => {
  const resId = useParams();
  // console.log("Params data : ", resId);
  const [showMenuIndex, setShowMenuIndex] = useState(null);

  const resInfo = useMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  /**
   * To filter all the ItemCategories
   */
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); // @ is not allowed so this is how we can write it

  return (
    resInfo && (
      <div className="menu">
        <h1 className="menu-heading-text">{name}</h1>
        <h3 className="menu-heading-text">
          {cuisines.join(",")} - {costForTwoMessage}
        </h3>
        {categories.map((category, index) => (
          //Controlled component
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            isMenuOpen={index === showMenuIndex ? true : false}
            setShowMenuIndex ={() => setShowMenuIndex(index)}
          />
        ))}
      </div>
    )
  );
};

export default Menu;
