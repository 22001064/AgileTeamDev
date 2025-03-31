import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'animate.css' // animation package
import './index.css'
import ToDO from './pages/toDO.js'
import Overview from './pages/overview.js'
import BacklogUser from './pages/backlogUser.js'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// imports of router and pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/login.js';
;

// creation of ruoter with routes
const router = createBrowserRouter([
  { path: "/", element: <App/>,
    children: [
    { path: "/", element: <Login /> },
    { path: "/nestcafe/pages/ToDO", element: <ToDO /> },
    { path: "/nestcafe/pages/overview", element: <Overview /> },
    { path: "/nestcafe/pages/backlogUser", element: <BacklogUser />}        
    ] 
  },
]);

// applies router to the root element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
