import RestaurantCard, {Discount} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  // State variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Whenever state variable updates, react triggers a reconciliation cycle(i.e. r-renders the component)

  const {loggedInUser, setUserName} = useContext(UserContext);

  const Offer =  Discount(RestaurantCard) // Using High order component 


  useEffect(() => {
    fetchData();
  }, []);
  //If no dependency array is given useEffect is called on every render
  // If dependency array is empty then useEffect is called only on initial render(just once).

  
  /**
   * @param
   */
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.153183&lng=79.129796&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    
    //To keep API URL in one variables
    const json_data =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; // Optional chaining

    setListOfRestaurants(json_data);
    setFilteredRestaurants(json_data);
  };


  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>You are offline!! Check your connection</h1>


  //Conditional Rendering -->  Rendering on the basis of of condition
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search here"
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
            style={{
              backgroundColor: "mediumPurple",
              color: "white",
              marginLeft: "5px",
              border: "3px double",
              marginTop: "5px",
              height: "30px",
              cursor: "pointer",
              opacity: "0.7",
            }}
          >
            Search
          </button>
          {/* onClick of this button I want to filter the data a/c to search text and update the UI */}
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>
        <div style={{marginLeft: "10px"}}>
          <label>Username -</label>
          <input className="username" value ={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="CardContainer">
        {filteredRestaurants.map((restaurant) => (
          <Link  className="linkcss"/* USE OF LINK COMPONENT -> When we click on any card it navigates user to menu page of that restaurant without loading it. Link is helping us do that */
            key={restaurant?.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {/* If restaurant has rating > 4.4 then show Discount offer  */}
           {restaurant.info.avgRating > 4.4 ? <Offer resData={restaurant?.info}/>:<RestaurantCard resData={restaurant?.info} />} 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
