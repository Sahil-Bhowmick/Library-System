import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

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

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category)
      return alert("All fields are required!");

    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      category,
      cover_image: coverImage || "https://via.placeholder.com/120",
    };

    dispatch(addBook(newBook));
    navigate("/browse");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6 py-12">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-300">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          📚 Add a New Book
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Modern Category Dropdown with Scroll */}
          <div className="relative">
            <label className="block font-medium text-gray-700 mb-2">
              Select Category
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none max-h-48 overflow-y-auto"
              >
                <option value="" disabled>
                  Choose a category
                </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {/* Custom Dropdown Arrow */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Upload Cover Image
            </label>
            <div className="relative border border-gray-300 rounded-lg p-3 bg-gray-50 shadow-sm">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full text-gray-700 cursor-pointer"
              />
            </div>
            {coverImage && (
              <div className="mt-4 flex justify-center">
                <img
                  src={coverImage}
                  alt="Book Cover Preview"
                  className="w-32 h-32 object-cover rounded-lg shadow-md border border-gray-200"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            ➕ Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
