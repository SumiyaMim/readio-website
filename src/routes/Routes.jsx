import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Books from "../pages/Books";
import Wishlist from "../pages/Wishlist";
import Book from "../pages/Book";

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
                loader: ()=> fetch('/books.json')
            },   
            {
                path: '/book/:id',
                element: <Book></Book>,
                loader: () => fetch(`/books.json`)
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>,
            },   
        ]
    },
])

export default router;
