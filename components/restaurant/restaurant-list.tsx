import { menuItems } from "../../utils/mock-data/menu-items"
import { RestaurantCard } from "./restaurant-card"

export const RestaurantList = ()=>{
    return (
        <div className="food-menu">
            {
                menuItems.map((menu)=>{
                   return <RestaurantCard  key={menu.info.id} restaurantList={menu}/>
                })
            }
        </div>
    )
}