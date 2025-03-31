import { createSlice } from "@reduxjs/toolkit";


const searchRestaurantSlice = createSlice({
    name: 'Search restaurant',
    initialState: {
        value: ''
    },
    reducers: {
        searchRestaurant: state =>{
            
        }
    }
})
export const {} = searchRestaurantSlice.actions;
export default searchRestaurantSlice.reducer