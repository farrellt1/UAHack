import React, { useRef }  from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from '../assets/hackzona-logo.jpeg'
 
export default function Essential() {

 return (
   <div className="section">
    
    <p id="essential-section" className="scroll-point"/>

     <div style={{
        "width" : 50 + '%',
        "float": "right"
     }}>
     <h1>Essentials</h1>
     <p>Here is everything you need to know about the event:</p>
     </div>
     
     <img src={logo} alt="HackZona Logo" style={{
        "width" : 45 + '%',
        "float": "left"
        }} 
     ></img>
   </div>
 );
}