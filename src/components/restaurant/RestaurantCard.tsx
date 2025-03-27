import { IMenuItem } from "../../../interfaces/menu-items.interface";

export const RestaurantCard = (props: { restaurantList: IMenuItem }) => {
  const { cloudinaryImageId, name, cuisines, areaName } = props.restaurantList.info;
  return (
    <div className="food-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
        className="food-image"
      />
      <div className="food-content">
        <h2 className="food-title">{name}</h2>
        <p className="food-description">{areaName}</p>
        <div className="food-footer">
          <span className="food-price">$1.00</span>
          <button className="food-button">Order Now</button>
        </div>
      </div>
    </div>
  );
};
