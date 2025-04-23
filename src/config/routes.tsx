import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout/Layout";
import { Body } from "../components/Layout/Body/Body";
import Error from "../components/Error/Error";
import RestaurantDetailsPage from "../components/Restaurant/RestaurantDetailsPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        Component:Layout,
        children: [
            {
                path: '/',
                Component: Body
            },
            {
                path: '/restaurant-details/:id',
                Component: RestaurantDetailsPage
            }
        ]
    }
])