import { configureStore } from "@reduxjs/toolkit";
import restaurantSearchReducer from './slice/searchRestaurant'

const store = configureStore({
    reducer:{
        restaurants: restaurantSearchReducer 
    }
})