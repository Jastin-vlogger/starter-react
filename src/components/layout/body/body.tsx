import { RestaurantList } from "../../Restaurant/RestaurantList";
import Search from "../Header/Search";

export const Body = () => {
  return (
    <div className="body flex flex-direction-column gap-4">
      <div className="search-outter-container">
        <Search />
      </div>
      <RestaurantList />
    </div>
  );
};
