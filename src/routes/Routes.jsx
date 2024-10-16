import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Books from "../pages/Books";
import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },   
            {
                path: '/books',
                element: <Books></Books>,
            },   
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>,
            },   
        ]
    },
])

export default router;
