import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Category from "./components/Category";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchResults from "./components/SearchResults";
import FeaturedNews from "./components/FeaturedNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element:  <> <FeaturedNews /> </> },
            {path: '/category/:category', element: <Category />},
            {path: '/search', element: <SearchResults />}
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
