import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import App from './App'
import './index.css';
import Members from './Pages/Members/Members';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';


const router = createBrowserRouter([
  {
    path: "/frontend-taws",
    element: <App/>,
    
  },
  {
    path: "/frontend-taws/miembros",
    element: <Members/>,
  },
  // {
  //   path: "/proyectos",
  //   element: <Projects/>,
  // },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/*",
    element: <Navigate to="/frontend-taws"/>,
  },
],{basename:"/"});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
