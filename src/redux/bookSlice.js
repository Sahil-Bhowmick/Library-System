import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch books from Open Library API
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch("https://openlibrary.org/search.json?q=popular");
  if (!response.ok) throw new Error("Failed to fetch books");
  const data = await response.json();

  const books = data.docs.map((book) => ({
    id: book.key.replace("/works/", ""),
    title: book.title,
    author: book.author_name?.[0] || "Unknown",
    cover_image: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : "https://via.placeholder.com/120",
    read_url: book.key ? `https://openlibrary.org/works/${book.key}/` : null, // Fallback read URL
    lending_identifier_s: book.lending_identifier_s,
    public_scan_b: book.public_scan_b,
    first_publish_year: book.first_publish_year,
    edition_count: book.edition_count,
  }));

  return books;
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [], // Keep both fetched and manually added books here
    localBooks: [], // Separate state for manually added books
    loading: false,
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.localBooks.push(action.payload); // Add manually to localBooks
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload; // Store fetched books
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
