import { useState, useEffect } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Wishlists = () => {
    const [wishlists, setWishlists] = useState([]);

    // Get wishlists from localStorage
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlists")) || [];
        setWishlists(storedWishlist);
    }, []);

    // Delete from wishlists
    const handleDelete = (id) => {
        const updatedWishlist = wishlists.filter((book) => book.id !== id);
        setWishlists(updatedWishlist); // Update state
        localStorage.setItem("wishlists", JSON.stringify(updatedWishlist)); // Update localStorage
    };

    return (
        <div className="max-w-screen-xl mx-auto px-8 lg:px-2 py-20">
            {wishlists.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {wishlists.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white shadow-md rounded-b-xl p-6 border relative"
                        >
                            {/* delete button */}
                            <div
                                className="absolute -top-4 -right-4 text-xl p-2.5 bg-gray-200 hover:bg-black hover:text-white rounded-full cursor-pointer"
                                onClick={() => handleDelete(book.id)}
                            >
                                <RiDeleteBin3Line />
                            </div>

                            <Link to={`/book/${book.id}`}>
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-96 object-cover"
                                />
                                <div className="py-4 text-center">
                                    <h3 className="font-semibold text-gray-800 text-lg">{book.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{book.author}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-[60vh]">
                    <p className="text-gray-600 text-lg">No Wishlists Found</p>
                </div>
            )}
        </div>
    );
};

export default Wishlists;
