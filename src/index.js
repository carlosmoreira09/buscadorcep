import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BuscadorCep from './pages/BuscadorCep'
import Advice from './pages/Advice'
import BuscadorCnpj from './pages/BuscadorCNPJ'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buscadorcep",
    element: <BuscadorCep />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/advice",
    element: <Advice />,
  },
  {
    path: "/buscadorcnpj",
    element: <BuscadorCnpj />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
