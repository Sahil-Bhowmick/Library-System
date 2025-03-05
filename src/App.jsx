import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // Loading spinner
import ErrorBoundary from "./components/ErrorBoundary"; // Error handling

// Lazy-loaded pages for better performance
const Home = React.lazy(() => import("./pages/Home"));
const BrowseBooks = React.lazy(() => import("./pages/BrowseBooks"));
const BookDetails = React.lazy(() => import("./pages/BookDetails"));
const AddBook = React.lazy(() => import("./pages/AddBook"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<div className="text-center py-4">Loading...</div>}
        persistor={persistor}
      >
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
            <Navbar />
            <div className="flex-grow">
              <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                      path="/browse/:category?"
                      element={<BrowseBooks />}
                    />
                    <Route path="/book/:id" element={<BookDetails />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </div>
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
