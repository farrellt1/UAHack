import React from "react";
  
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
 return (
   <div>
     <Navbar />
     <Outlet />
     <Footer />
   </div>
 );
};
 
export default App;