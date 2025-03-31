import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { IMenuItem } from "../../../interfaces/menu-items.interface";
import { BYPASSCORS, SWIGGYURL } from "../../utils/constants";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "../shimmer/Shimmer";
import Heading from "../Heading/Heading";
import DynamicCardRenderer from "./DynamicCardRenderer";


export const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([] as any[]);
  useEffect(() => {
    fetchDataFromSwiggyApi();
  }, []);

  async function fetchDataFromSwiggyApi() {
    const response = await fetch(BYPASSCORS + SWIGGYURL);
    const result = await response.json();
    setRestaurantList(result?.data?.cards);
  }

  return !restaurantList.length ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col">
      {restaurantList.length &&
        restaurantList.map((cardItem) => {
          return <DynamicCardRenderer menu={cardItem}></DynamicCardRenderer>;
        })}
    </div>
  );
};
