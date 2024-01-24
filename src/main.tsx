import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './assets/login/index.tsx';
import Logado from './assets/logado/index.tsx';

const router = createBrowserRouter([
  {
    path: "login", element: <Login/>
  },
  {
    path: "logado", element: <Logado/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
