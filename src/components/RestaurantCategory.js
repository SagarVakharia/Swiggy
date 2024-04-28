import { useState } from "react";
import ItemList from "./ItemList";
import { click } from "@testing-library/user-event/dist/click";

const RestaurantCategory = ({ data, isMenuOpen, setShowMenuIndex }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggle -->  Toggle also known as Accordian

  const handleClick = () => {
    setShowMenuIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="accordion-container">
        <div className="accordion-inner-container" onClick={handleClick}>
          <h3>
            {data.title} ({data.itemCards.length})
          </h3>
          <span>🔽</span>
        </div>
        {/* Accordian Body */}
        {isMenuOpen && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
