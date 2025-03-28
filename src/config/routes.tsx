import { createBrowserRouter } from "react-router";
import { Layout } from "../components/layout/Layout";
import { Body } from "../components/layout/body/Body";
import Error from "../components/error/Error";
import RestaurantDetailsPage from "../components/restaurant/RestaurantDetailsPage";

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