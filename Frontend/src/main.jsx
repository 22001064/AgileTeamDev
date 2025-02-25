import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
import Home from './pages/Home/home.jsx';
import Login from './pages/Login/login.jsx';
import Tasks from './pages/Tasks/tasks.jsx';

// creation of ruoter with routes
const router = createBrowserRouter([
  { path: "/nestcafe/", element: <App/>,
    children: [
    { path: "/nestcafe/", element: <Home /> },
    { path: "/nestcafe/login", element: <Login /> },
    { path: "/nestcafe/tasks", element: <Tasks />},    
    ] 
  },
]);

// applies router to the root element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)