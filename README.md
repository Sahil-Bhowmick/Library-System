# Online Library System

Welcome to the Online Library System! This web application allows users to explore, view details, and add books to a dynamic library collection. The system includes various features such as searching for books by title/author, viewing book details, and adding new books to the library.

## Features

- **HomePage**: Welcome message and a list of book categories like Fiction, Non-Fiction, Sci-Fi, etc.
- **Browse Books Page**:
  - List of books filtered by category.
  - Dynamic routing to filter books by category (e.g., `/books/:category`).
  - Search functionality to filter books by title or author.
  - "View Details" link for each book to navigate to the Book Details page.
- **Book Details Page**: Displays detailed information such as book title, author, description, and rating.
- **Add Book Page**:
  - Form to add a new book to the library with validation.
  - Redux used to manage the books list.
  - Redirects to the Browse Books page after a book is successfully added.
- **404 Page**: A page that displays when a route is undefined and includes a link back to the Home page.

## Tech Stack

- **React**: Frontend library to build the UI.
- **React Router**: For navigation and dynamic routing.
- **Redux**: For state management.
- **React Redux**: For connecting React components to Redux store.
- **CSS (Tailwind CSS or custom)**: For styling the application.

## Setup Instructions

1. **Clone the Repository**

   Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/Sahil-Bhowmick/Library-System.git
   cd online-library-system
   ```

npm install

# or

yarn install

npm run dev

# or

yarn start

# Online Library System

Welcome to the Online Library System! This is a simple and intuitive web application where users can browse books, view details about them, and even add new books to the library.

## Features Breakdown

### HomePage

- **Welcome Message**: Displays a welcoming message to users.
- **Book Categories**: A list of book categories that users can explore.
- **Popular Books**: A list of popular books with a "View More" link leading to the Browse Books page.
- **Navbar**:
  - **Home**: Link to the Home page.
  - **Browse Books**: Link to the Browse Books page.
  - **Add Book**: Link to the Add Book page.

### Browse Books Page

- **Dynamic Routing**: Filters books by category using the route `/books/:category`.
- **Search Bar**: Allows users to filter books by title or author.
- **Book Listings**: Displays books with a "View Details" link that leads to the Book Details page.

### Book Details Page

- **Book Information**: Displays detailed information about the selected book, including:
  - Title
  - Author
  - Description
  - Rating
- **Back Link**: A "Back to Browse" link that redirects users to the Browse Books page.

### Add Book Page

- **Book Form**: A form for users to add new books to the library.
  - **Form Validation**: Ensures all fields are filled out correctly.
  - **Redux State**: Adds the new book to the Redux state after submission.
  - **Redirect**: After adding the book, the user is redirected to the Browse Books page.

### 404 Page

- **Route Handling**: Handles undefined routes with a 404 page.
- **Redirection**: Redirects users back to the Home page.

## How to Contribute

1. **Fork the Repository**: Clone the repository to your GitHub account.
2. **Create a Branch**: Create a new branch for your feature or bug fix.
3. **Make Changes**: Implement your changes in the branch.
4. **Submit a Pull Request**: Submit a pull request with a detailed description of your changes.

## Thank You!

Thank you for using the Online Library System! If you have any questions or suggestions, feel free to reach out.
