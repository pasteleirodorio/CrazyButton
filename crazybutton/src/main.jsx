import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from './routes/inicio.jsx';
import Dificuldade from './routes/dificuldade.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path:"dificuldade",
    element: <Dificuldade />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
