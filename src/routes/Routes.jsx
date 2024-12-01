import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Books from "../pages/Books";
import Wishlists from "../pages/Wishlists";
import Book from "../pages/Book";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error></Error>,
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
                path: '/wishlists',
                element: <Wishlists></Wishlists>,
            },   
        ]
    },
])

export default router;
