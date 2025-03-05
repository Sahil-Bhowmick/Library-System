import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md fixed w-full top-0 z-20 flex justify-between items-center px-6 md:px-24">
      <Link to="/">
        <h1 className="text-2xl font-semibold tracking-wide">BookHive</h1>
      </Link>

      {/* Search Bar for Desktop */}
      {/* <div className="hidden md:flex items-center bg-gray-200 rounded-full px-4 py-2 w-96">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search books..."
          className="ml-2 outline-none w-full bg-transparent text-gray-700"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div> */}

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-500">
          Home
        </Link>
        <Link to="/browse" className="hover:text-gray-500">
          Browse
        </Link>
        <Link to="/add-book" className="hover:text-gray-500">
          Add Book
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="text-2xl md:hidden" onClick={() => setMenuOpen(true)}>
        <FaBars />
      </button>

      {/* Light Blur Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0  backdrop-blur-md z-10"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 bg-white text-gray-900 p-6 shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-3xl text-gray-700 hover:text-gray-900"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>
        <nav className="mt-16 space-y-6 text-xl font-medium">
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-gray-200 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/browse"
            className="block py-2 px-4 hover:bg-gray-200 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Browse
          </Link>
          <Link
            to="/add-book"
            className="block py-2 px-4 hover:bg-gray-200 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Add Book
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
