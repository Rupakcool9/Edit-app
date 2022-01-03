import React from 'react'
import'./Navbar.css'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
  
  import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return (
      <>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
            <h2>
              <span>R</span>upak
              <span>K</span>umar
            </h2>
          </div>
  
          {/* 2nd menu part  */}
          <div className='menu-link'>

            
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
              <li>
                <NavLink to="/service">services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Payment</NavLink>
              </li>
            </ul>
          </div>
  
          {/* 3rd social media links */}
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="https://www.facebook.com"target="">
                  <FaFacebookSquare className="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="">
                  <FaInstagramSquare className="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="">
                  <FaYoutubeSquare className="youtube" />
                </a>
              </li>
            </ul>
  
          </div>
        </nav>

      </>
    );
  };

export default Navbar



// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <div>
//               <ul>
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">about</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/service">services</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact">contact</NavLink>
//               </li>
//             </ul>
//           </div>
    
//     )
// }

// export default Navbar

