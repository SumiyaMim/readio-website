import { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-8 lg:px-2 py-28">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-20">Popular Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-b-xl border overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 pb-6"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-96 object-cover "
            />
            <div className="py-4 text-center">
              <h3 className="font-semibold text-gray-800 text-lg">{book.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{book.author}</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-gray-500 border-[1.5px] border-gray-400 p-3 rounded-full mt-2 hover:bg-black hover:text-white hover:border-black">
              <FiSend />
              <h5 className="uppercase text-xs font-medium">See More</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
