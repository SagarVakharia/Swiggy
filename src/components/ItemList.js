import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="menu-item-list" key={item?.card?.info?.id}>
          <div>
            <div className="menu-item-list-title">
              <span>{item?.card?.info?.name} </span>
              <span>
                Rs.
                {item?.card?.info?.price > 0
                  ? item?.card?.info?.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="menu-item-list-description">
              {item?.card?.info?.description}
            </p>
          </div>
          <div>
            <div style={{ position: "absolute" }}>
              <button className="menu-list-item-button">Add +</button>
            </div>
            <img
              className="menu-list-item-image"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
