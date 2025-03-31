import { Link } from "react-router";
import { IMenuItem } from "../../../interfaces/menu-items.interface";
import { SWIGGY_RESTAURANT_CARDS_URL } from "../../utils/constants";

export const RestaurantCard = (props: { restaurantList: IMenuItem }) => {
  const { cloudinaryImageId, name, areaName, avgRatingString, sla } =
    props?.restaurantList?.info;
  return (
    <div className="food-card">       
      <img
        src={SWIGGY_RESTAURANT_CARDS_URL + cloudinaryImageId}
        alt={name}
        className="food-image"
      />
      <div className="food-content">
        <h2 className="food-title">{name}</h2>
        <p className="food-description">{areaName}</p>
        <p className="food-sla">{sla?.slaString}</p>
        <div className="food-footer">
          <span className="food-price">{avgRatingString}</span>
          <Link to={`/restaurant-details/:id`}>
            <button className="food-button">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};