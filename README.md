# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Geo-Search-App
This is a React Vite application for searching city data. The application includes a search box, a table to display results, and a pagination system to navigate through the data. Users can specify the number of cities to fetch from the server, with a default of 5 and a maximum of 10.

Features
Search Functionality: Search cities by name.
Debounced Search: Uses a custom useDebounce hook for efficient API calls.
Pagination: Navigate through paginated city data.
User Limit Input: Specify the number of cities to fetch per page.
Modular Components: Organized code with reusable components and hooks.

geo-search-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Pagination.jsx
│   │   ├── SearchBox.jsx
│   │   ├── Table.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── README.md
├── vite.config.js



Setup Instructions
Clone the Repository
bash
Copy code
git clone <repository-url>
cd geo-search-app
Install Dependencies
Run the following command to install all dependencies:

bash
Copy code
npm install
Run the Development Server
To start the application in development mode, run:

bash
Copy code
npm run dev
Application Layout
The layout of the application is as follows:

Search Box: Located on the top-left side of the page.
Table: Positioned directly below the search box to display city data.
Pagination: Placed below the table, along with an input field for specifying the number of cities to fetch from the server.
Additional Notes
Custom Hook: The useDebounce hook is implemented in the src/hooks folder to optimize search API calls.
API Integration: The src/api.js file manages server-side data fetching logic.
Component Breakdown:
SearchBox.jsx: Handles user input for searching cities.
Table.jsx: Displays the fetched city data.
Pagination.jsx: Provides pagination controls and limit settings.
This project uses React with Vite for faster builds and hot module reloading. Make sure you have Node.js installed before running the application.

Feel free to fork, modify, and contribute! 😊







 

