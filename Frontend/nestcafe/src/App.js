import React from 'react';
import "./App.css";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";

// function that describes each page of the website structure
function App() {
  return (
    <div className='main'>
      <NavigationBar />
        <Outlet />      
      <Footer />
    </div>
  );
}
export default App


