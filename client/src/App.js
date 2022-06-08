import React from "react";
  
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Essential from "./components/essential";
import Support from "./components/support";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
 return (
   <div>
     <Navbar />
     <Welcome />
     <Essential />
     <Support />
     <Footer />
   </div>
 );
};
 
export default App;