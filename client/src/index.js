import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import "./index.css";
import 'flowbite/dist/flowbite.css';
import 'flowbite/dist/flowbite.js';
import Account from './pages/Account';
import About from './pages/About';
import RegistrationPage from './pages/RegistrtionPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
