import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

// Redux Persist Configuration
const persistConfig = {
  key: "books", // Unique key for storing books data
  storage, // Uses local storage
};

// Wrap the book reducer with persistReducer
const persistedBookReducer = persistReducer(persistConfig, bookReducer);

// Create the Redux Store
const store = configureStore({
  reducer: {
    books: persistedBookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create Persistor to persist store data
export const persistor = persistStore(store);

export default store;
