import React from "react";
import {
  DynamicCardRendererProps,
  InfoItem
} from "../../../interfaces/menu-items.interface";
import Heading from "../Heading/Heading";
import { SWIGGY_CARD_URL } from "../../utils/constants";
import { RestaurantCard } from "./RestaurantCard";

const DynamicCardRenderer: React.FC<DynamicCardRendererProps> = ({ menu }) => {
  const title = menu?.card?.card?.header?.title;
  const info = menu?.card?.card?.gridElements?.infoWithStyle?.info || [];
  const restaurants =
    menu?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  if (!title && info.length === 0 && restaurants.length === 0) {
    return null;
  }
  return (
    <>
      {title && <Heading level={2}>{title}</Heading>}

      {info.length > 0 && (
        <div className="info-container flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-thin">
          {info.map((cardItem: InfoItem) => (
            <div key={cardItem.id} className="image-card-layout">
              {/* {JSON.stringify(cardItem)} */}
                <img src={SWIGGY_CARD_URL + cardItem.imageId} width={144} height={180} alt={cardItem.accessibility.altText} />
            </div>
          ))}
        </div>
      )}

      {restaurants.length > 0 && (
        <div className="grid">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info.id}
              restaurantList={restaurant}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default DynamicCardRenderer;
