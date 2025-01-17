import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  var {
    name,
    costForTwo,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla, // for delivery time, it is inside one more obj called sla
  } = resData; // ?. means optional chaining
  return (
    <div className="Card">
      <img
        className="CardLogo"
        src={CDN_URL + cloudinaryImageId}
        alt="cardLogo"
      />
      <h3>{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>{/* the join here is used for comma separating the values */}
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};


// High Order Component

export const Discount = (RestaurantCard) => {
  return(props) => {
    return( /* This is how we return a HOC */
    <>
      <label style={{position: "absolute", margin: "11px", padding: "3px", background: "green", color: "white", borderRadius: "10px"}}>Discount</label>
      <RestaurantCard  {...props} />
    </>)
  }
}

export default RestaurantCard;
