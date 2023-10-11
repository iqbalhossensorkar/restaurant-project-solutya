import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Login from './pages/shared/signup/Login';
import Signup from './pages/shared/signup/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/reservation",
        element: <Reservation></Reservation>
      },
      {
        path: "/service",
        element: <div></div>
      },
      {
        path: "/gallery",
        element: <div></div>
      },
      {
        path: "/contact",
        element: <div></div>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
