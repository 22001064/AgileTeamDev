import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'animate.css' // animation package
import './index.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// imports of router and pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.js';
import Login from './pages/login.js';
;

// creation of ruoter with routes
const router = createBrowserRouter([
  { path: "/", element: <App/>,
    children: [
    { path: "/", element: <Home /> },
    { path: "/nestcafe/login", element: <Login /> },        
    ] 
  },
]);

// applies router to the root element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
