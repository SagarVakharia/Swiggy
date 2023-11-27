import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Whenever state variable updates, react triggers a reconciliation cycle(i.e. r-renders the component)


  //If no dependency array is given useEffect is called on every render
  // If dependency array is empty then useEffect is called only on initial render(just once).
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //To keep API URL in one variables
    const json_data =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; // Optional chaining
    setListOfRestaurants(json_data);
    setFilteredRestaurants(json_data);
  };

  //Conditional Rendering -->  Rendering on the basis of of condition
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
            style={{ backgroundColor: "mediumPurple", color: "white", marginLeft: "5px", border: "3px double"}}
          >
            Search
          </button>
          {/* onClick of this button I want to filter the data a/c to search text and update the UI */}
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="CardContainer">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
