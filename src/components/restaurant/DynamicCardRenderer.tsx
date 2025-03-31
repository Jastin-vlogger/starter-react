import React from "react";
import Heading from "../Heading/Heading";
import { RestaurantCard } from "./RestaurantCard";
import {
  DynamicCardRendererProps,
  InfoItem,
  Restaurant,
} from "../../../interfaces/menu-items.interface";

const DynamicCardRenderer: React.FC<DynamicCardRendererProps> = ({ menu }) => {
  const title = menu?.card?.card?.header?.title;
  const info = menu?.card?.card?.gridElements?.infoWithStyle?.info || [];
  const restaurants =
    menu?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  if (!title && info.length === 0 && restaurants.length === 0) {
    return null;
  }
  console.log(restaurants);
  return (
    <>
      {title && <Heading level={2}>{title}</Heading>}

      {info.length > 0 && (
        <div className="info-container">
          {info.map((cardItem: InfoItem) => (
            <div key={cardItem.id}>{/* Render info content here */}</div>
          ))}
        </div>
      )}

      {restaurants.length > 0 && (
        <div className="food-menu">
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurantList={restaurant} />
          ))}
        </div>
      )}
    </>
  );
};

export default DynamicCardRenderer;
