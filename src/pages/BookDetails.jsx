import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/bookSlice";
import { FaArrowLeft } from "react-icons/fa";

// const BookDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books.books);
//   const loading = useSelector((state) => state.books.loading);

//   useEffect(() => {
//     if (books.length === 0) {
//       dispatch(fetchBooks());
//     }
//   }, [dispatch, books.length]);

//   const book = books.find((b) => b.id.endsWith(id));

//   if (loading) {
//     return (
//       <h2 className="text-center text-2xl font-semibold mt-24">Loading...</h2>
//     );
//   }

//   if (!book) {
//     return (
//       <h2 className="text-center text-2xl font-semibold mt-24 text-gray-600">
//         Book Not Found
//       </h2>
//     );
//   }

//   // Use read_url from API data
//   const readLink = book.read_url || null;

//   const downloadLink = book.public_scan_b
//     ? `https://archive.org/details/${book.lending_identifier_s}`
//     : null;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-24">
//       <div className="relative w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-200">
//         {/* Back Button */}
//         <div className="absolute top-3 left-4">
//           <Link
//             to="/browse"
//             className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm md:text-base font-medium transition-all"
//           >
//             <FaArrowLeft className="text-lg md:text-xl" />
//             <span>Back</span>
//           </Link>
//         </div>

//         {/* Book Cover */}
//         <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center shadow-md">
//           {book.cover_image ? (
//             <img
//               src={book.cover_image}
//               alt={book.title}
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <span className="text-gray-500 text-sm md:text-lg font-medium">
//               No Image Available
//             </span>
//           )}
//         </div>

//         {/* Book Details */}
//         <div className="mt-6 text-center md:text-left">
//           <h2 className="text-3xl font-extrabold text-gray-900">
//             {book.title}
//           </h2>
//           <p className="text-gray-500 text-lg mt-2">by {book.author}</p>

//           {/* Additional Details */}
//           <div className="mt-4 text-gray-600 text-sm md:text-base space-y-2">
//             <p>
//               <strong>First Published:</strong>{" "}
//               {book.first_publish_year || "Unknown"}
//             </p>
//             <p>
//               <strong>Edition Count:</strong> {book.edition_count || "N/A"}
//             </p>
//           </div>

//           {/* Action Buttons */}
//           {(readLink || downloadLink) && (
//             <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
//               {readLink && (
//                 <a
//                   href={readLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all"
//                 >
//                   📖 Read Online
//                 </a>
//               )}

//               {downloadLink && (
//                 <a
//                   href={downloadLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-all"
//                 >
//                   ⬇️ Download
//                 </a>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [dispatch, books.length]);

  const book = books.find((b) => b.id.endsWith(id));

  if (loading) {
    return (
      <h2 className="text-center text-2xl font-semibold mt-24">Loading...</h2>
    );
  }

  if (!book) {
    return (
      <h2 className="text-center text-2xl font-semibold mt-24 text-gray-600">
        Book Not Found
      </h2>
    );
  }

  // Fallback for readLink if read_url is not available
  const readLink = book.read_url || `https://openlibrary.org/works/${book.id}`;

  const downloadLink = book.public_scan_b
    ? `https://archive.org/details/${book.lending_identifier_s}`
    : null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-24">
      <div className="relative w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-200">
        {/* Back Button */}
        <div className="absolute top-3 left-4">
          <Link
            to="/browse"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm md:text-base font-medium transition-all"
          >
            <FaArrowLeft className="text-lg md:text-xl" />
            <span>Back</span>
          </Link>
        </div>

        {/* Book Cover */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center shadow-md">
          {book.cover_image ? (
            <img
              src={book.cover_image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-sm md:text-lg font-medium">
              No Image Available
            </span>
          )}
        </div>

        {/* Book Details */}
        <div className="mt-6 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {book.title}
          </h2>
          <p className="text-gray-500 text-lg mt-2">by {book.author}</p>

          {/* Additional Details */}
          <div className="mt-4 text-gray-600 text-sm md:text-base space-y-2">
            <p>
              <strong>First Published:</strong>{" "}
              {book.first_publish_year || "Unknown"}
            </p>
            <p>
              <strong>Edition Count:</strong> {book.edition_count || "N/A"}
            </p>
          </div>

          {/* Action Buttons */}
          {(readLink || downloadLink) && (
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              {readLink && (
                <a
                  href={readLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all"
                >
                  📖 Read Online
                </a>
              )}

              {downloadLink && (
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-all"
                >
                  ⬇️ Download
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
