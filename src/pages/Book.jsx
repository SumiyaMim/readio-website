import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineBookmarks } from "react-icons/md";

const Book = () => {
    const { id } = useParams(); 
    const books = useLoaderData(); 

    const book = books.find(book => book.id === parseInt(id));

    return (
        <div className="max-w-screen-lg mx-auto px-8 lg:px-2 py-20 grid place-items-center">
            {book && (
                <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 border">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover rounded-lg mb-4 lg:mb-0"
                    />
                    <div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
                            </div>
                            <div className="text-4xl">
                                <MdOutlineBookmarks />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-500 mb-8">{book.author}</h2>
                        <p className="text-gray-700 leading-relaxed text-justify text-base mb-20">{book.summary}</p>
                        <hr className="border-[1.5px]"/>
                        <div className="flex flex-col md:flex-row justify-between py-8 text-sm md:gap-10">
                            <div className="md:w-3/5">
                                <div className="flex justify-between mb-2">
                                    <h4 className="w-1/2 font-semibold">Editor</h4>
                                    <h4 className="w-1/2 text-gray-500">{book.editor}</h4>
                                </div>
                                <div className="flex justify-between mb-2 md:mb-0">
                                    <h4 className="w-1/2 font-semibold">Release Date</h4>
                                    <h4 className="w-1/2 text-gray-500">{book.release_date}</h4>
                                </div>
                            </div>
                            <div className="md:w-2/5">
                            <div className="flex justify-between mb-2">
                                    <h4 className="w-1/2 font-semibold">Features</h4>
                                    <h4 className="w-1/2 text-gray-500">{book.features}</h4>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="w-1/2 font-semibold">Language</h4>
                                    <h4 className="w-1/2 text-gray-500">{book.language}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Book;
