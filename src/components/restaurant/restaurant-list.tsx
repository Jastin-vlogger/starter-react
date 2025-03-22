import { useEffect, useState } from "react";
import { IMenuItem } from "../../../interfaces/menu-items.interface";
import { SWIGGYURL } from "../../utils/constants";
import { RestaurantCard } from "./restaurant-card";
import { Shimmer } from "../shimmer/shimmer";

export const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([] as IMenuItem[]);
  useEffect(() => {
    fetchDataFromSwiggyApi();
  }, []);

  async function fetchDataFromSwiggyApi() {
    const response = await fetch(
      `https://thingproxy.freeboard.io/fetch/${SWIGGYURL}`
    );
    const result = await response.json();
    setRestaurantList(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(!restaurantList.length){
    return <Shimmer />
  }

  return (
    <div className="food-menu">
      {restaurantList.map((menu) => {
        return <RestaurantCard key={menu.info.id} restaurantList={menu} />;
      })}
    </div>
  );
};
