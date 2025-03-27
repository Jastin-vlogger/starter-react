import { RestaurantList } from "../../restaurant/RestaurantList";
import Search from "../header/search";

export const Body = () => {
  return (
    <div className="body">
      <div className="search-outter-container">
        <Search />
      </div>
      <RestaurantList />
    </div>
  );
};
