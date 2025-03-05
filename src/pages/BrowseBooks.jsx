import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBooks } from "../redux/bookSlice";
import { FaEye, FaSearch } from "react-icons/fa";

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { books, localBooks, loading, error } = useSelector(
    (state) => state.books
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  let allBooks = [...books, ...localBooks]; // Merge fetched and manually added books

  let filteredBooks = category
    ? allBooks.filter(
        (book) =>
          book.genre &&
          book.genre.some((g) => g.toLowerCase() === category.toLowerCase())
      )
    : allBooks;

  if (searchTerm) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-5 text-center">
        {category ? `${category} Books` : "All Books"}
      </h2>

      {/* Modern Search Bar */}
      <div className="flex justify-center mb-6 mt-6 md:mt-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 pl-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
          />
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
      </div>

      {loading && <p className="text-center text-gray-600">Loading books...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0
          ? filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-gradient-to-r from-gray-100 to-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="p-4 flex flex-col items-center">
                  <img
                    src={book.cover_image || "https://via.placeholder.com/120"}
                    alt={book.title}
                    className="w-28 h-40 object-cover rounded-md"
                  />
                  <h3 className="text-sm font-semibold text-gray-900 mt-2">
                    {book.title}
                  </h3>
                  <Link
                    to={`/book/${book.id}`}
                    className="mt-3 flex items-center gap-2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-700 transition"
                  >
                    <FaEye className="text-base" />
                    <span>View</span>
                  </Link>
                </div>
              </div>
            ))
          : !loading && (
              <p className="text-center text-gray-600">No books found</p>
            )}
      </div>
    </div>
  );
};

export default BrowseBooks;
