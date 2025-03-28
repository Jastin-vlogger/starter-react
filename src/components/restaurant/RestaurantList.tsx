import { useEffect, useState } from "react";
import { IMenuItem } from "../../../interfaces/menu-items.interface";
import { BYPASSCORS, SWIGGYURL } from "../../utils/constants";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "../shimmer/Shimmer";

export const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([] as IMenuItem[]);
  useEffect(() => {
    fetchDataFromSwiggyApi();
  }, []);

  async function fetchDataFromSwiggyApi() {
    const response = await fetch(
      BYPASSCORS + SWIGGYURL
    );
    const result = await response.json();
      
    setRestaurantList(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  return !restaurantList.length ? (
    <Shimmer />
  ) : (
    <div className="food-menu">
      {restaurantList.map((menu) => {
        return <RestaurantCard key={menu.info.id} restaurantList={menu} />;
      })}
    </div>
  );
};
