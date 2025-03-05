import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { fetchBooks } from "../redux/bookSlice"; // Import fetchBooks action

// const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography"];
const categories = [
  "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "Mystery",
  "Biography",
  "Fantasy",
  "Historical",
  "Thriller",
  "Romance",
  "Self-Help",
  "Horror",
  "Adventure",
  "Children",
  "Poetry",
  "Drama",
];

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  // Fetch books on component mount
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Hero Section */}
      <div className="text-center py-20 bg-white text-gray-900 mt-16 shadow-md px-3 rounded-sm">
        <h2 className="text-4xl font-bold">Your Digital Library</h2>
        <p className="text-lg mt-3 max-w-2xl mx-auto text-gray-600">
          Discover and explore thousands of books in all genres at your
          fingertips.
        </p>
        <Link
          to="/browse"
          className="mt-6 px-6 py-3 bg-gray-900 text-white font-medium rounded-full shadow-md hover:bg-gray-700 transition block w-fit mx-auto"
        >
          Start Browsing
        </Link>
      </div>

      {/* Categories Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Book Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-3 px-4 sm:px-0 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category}`}
              className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium rounded-md shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Popular Books
        </h2>

        {loading && (
          <p className="text-center text-gray-600">Loading books...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.length > 0
            ? books.slice(0, 8).map(
                (
                  book // Show only first 6 books
                ) => (
                  <div
                    key={book.id}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <div className="p-4 flex flex-col items-center">
                      <img
                        src={
                          book.cover_image || "https://via.placeholder.com/120"
                        }
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
                )
              )
            : !loading && (
                <p className="text-center text-gray-600">No books available</p>
              )}
        </div>

        {/* View More Button */}
        {books.length > 6 && (
          <div className="text-center mt-6">
            <Link
              to="/browse"
              className="inline-block bg-gray-900 text-white px-5 py-2 rounded-md shadow-md hover:bg-gray-700 transition"
            >
              View More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
