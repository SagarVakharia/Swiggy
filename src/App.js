import "./App.css";
/**
 * Low level planing
 * NavBar
 *  -Logo
 *  -navitemes
 * Body
 *   -search bar
 *   -cardcontainer
 *      -card
 *        -image
 *        -name of res,star-rating,cuisine,delivary time
 * Footer
 *   -copyright
 *   -links
 *   -addresses
 *   -contact
 */

const Header = () => {
  return (
    <div className="Header">
      <div className="LogoContanier">
        <img
          className="HeaderLogo"
          src="https://dcassetcdn.com/design_img/1440313/541870/541870_7783913_1440313_d8e6f508_image.png"
          alt=""
        />
      </div>
      <div className="NavItems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = (props) => {
  const { resData } = props;
  var {
    name,
    /* locality,
    areaName, */
    costForTwo,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
  } = resData.data; // ?. means optional chaining
  return (
    <div className="Card">
      <img
        className="CardLogo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt="cardLogo"
      />
      <h3>
        {name}
        <span className="Rating">{avgRating}</span>
      </h3>
      <div className="CardDescription">{cuisines.join(", ")}</div>
      {/* the join here ise used for comma seperating the values */}
      <div className="DeliveryTime">{deliveryTime}min</div>
      <div className="cost">{costForTwo}</div>
    </div>
  );
};

const resList = [
 { data :
  {
    id: "111",
    name: "MacD",
    cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
    locality: "Amravati Road",
    areaName: "Manish Nagar",
    costForTwo: "₹1000 for two",
    cuisines: ["Italian", "Desserts", "Ice Cream", "Beverages"],
    avgRating: 3.7,
    deliveryTime: 50,
  }},
  { data :
    {
    id: "112",
    name: "Cafe Barrel",
    cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
    locality: "Traffic Park",
    areaName: "Shankar Nagar",
    costForTwo: "₹700 for two",
    cuisines: ["Chinese", "Desserts", "Ice Cream", "Beverages"],
    avgRating: 3.8,
    deliveryTime: 25,
  }},
  { data :
    {
    id: "113",
    name: "Cupcake Bliss Cake & Desserts",
    cloudinaryImageId: "40f193d8b23afb2988489dac1258962f",
    locality: "Bhandara Road",
    areaName: "Sudarshan Nagar",
    costForTwo: "₹200 for two",
    cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
    avgRating: 3.7,
    deliveryTime: 20,
  }},
  {  data :
    {
    id: "114",
    name: "Two Joes",
    cloudinaryImageId: "x5oty2were1z7k79ifez",
    locality: "VNIT Street",
    areaName: "Bajaj Nagar",
    costForTwo: "₹200 for two",
    cuisines: ["Burgers", "American", "Fast Food", "Beverages", "Desserts"],
    avgRating: 3.6,
    deliveryTime: 30,
  }},
];

const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search</div>
      <div className="CardContainer">
        {resList.map((restaurant) => (
          <RestrauntCard key={restaurant.data.id}  resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
