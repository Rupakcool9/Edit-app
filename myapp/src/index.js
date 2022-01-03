import React from "react";
import ReactDOM from "react-dom";
import App from "./components/contactList/App";
import Appone from "./components/Form/Appone";
import Demo from './components/Demo/Demo'
import Apptwo from "./components/Navbar/Apptwo";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <>

  
    {/* <App /> */}
    {/* <Appone/> */}
    {/* <Demo/> */}
    <BrowserRouter>
   <Apptwo/>
   </BrowserRouter>
  
    
   </>,
  document.getElementById("root")
);
