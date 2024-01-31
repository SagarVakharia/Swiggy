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
      <h4 className="cuisines">{cuisines.join(", ")}</h4>{/* the join here is used for comma seperating the values */}
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
