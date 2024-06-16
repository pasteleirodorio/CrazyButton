import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from './routes/inicio.jsx';
import Dificuldade from './routes/dificuldade.jsx';
import Facil from './routes/facil.jsx';
import Medio from './routes/medio.jsx';
import Hard from './routes/hard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/dificuldade",
    element: <Dificuldade />
  },
  {
    path: "/facil",
    element: <Facil />
  },
  {
    path: "/medio",
    element: <Medio />
  },
  {
    path: "/hard",
    element: <Hard />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
