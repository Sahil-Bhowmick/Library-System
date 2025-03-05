import React, { useState } from "react";
import Footer from "./Footer";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery",
    "Fantasy",
    "Thriller",
    "Romance",
  ];
  const popularBooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "Dune", author: "Frank Herbert" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white text-gray-800 p-4 shadow-md flex justify-around items-center fixed w-full top-0 z-10">
        <h1 className="text-2xl font-semibold tracking-wide">BookHive</h1>

        {/* Search Bar for Mobile */}
        <div className="flex-1 mx-4 md:hidden">
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search books..."
              className="ml-2 outline-none w-full bg-transparent text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center bg-gray-200 rounded-full px-4 py-2 w-96">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search books..."
            className="ml-2 outline-none w-full bg-transparent text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#" className="hover:text-gray-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-500 transition">
            Browse
          </a>
          <a href="#" className="hover:text-gray-500 transition">
            Add Book
          </a>
          <a href="#" className="hover:text-gray-500 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-gray-900 p-5 shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 left-4 text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>
        <nav className="mt-12 space-y-6">
          {["Home", "Browse", "Add Book", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-lg hover:text-gray-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero Section */}
      <header className="text-center py-28 bg-white text-gray-900 mt-16 shadow-md">
        <h2 className="text-4xl font-bold">Your Digital Library</h2>
        <p className="text-lg mt-3 max-w-2xl mx-auto text-gray-600">
          Discover and explore thousands of books in all genres at your
          fingertips.
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-900 text-white font-medium rounded-full shadow-md hover:bg-gray-700 transition">
          Start Reading
        </button>
      </header>

      {/* Book Categories */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Categories
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((category) => (
            <span
              key={category}
              className="bg-gray-900 text-white px-5 py-2 rounded-full text-lg font-medium hover:bg-gray-700 transition cursor-pointer shadow-md"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Popular Books */}
      <section className="p-8 bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Popular Books
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularBooks.map((book) => (
            <div
              key={book.title}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
              <h4 className="text-xl font-semibold text-gray-900">
                {book.title}
              </h4>
              <p className="text-gray-600 mt-1">by {book.author}</p>
              <a
                href="#"
                className="text-gray-900 mt-3 inline-block hover:underline font-medium"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
