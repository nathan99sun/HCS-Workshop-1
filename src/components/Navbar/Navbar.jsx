import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Nathan Sun</h1>
        <div className="info-bar">
          <p className="info-item">nsun@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <p className="info-item">703-297-7918</p>
        </div>
        <div className="info-bar">
          <Link 
            className = "info-link"
            to = {{pathname: "https://www.facebook.com/nathan.sun.503/"}}
            target = "_blank"
          >
            Facebook
            </Link>

            <Link 
            className = "info-link"
            to = {{pathname: "https://www.linkedin.com/in/nathan-sun-00a779186/"}}
            target = "_blank"
          >
            LinkedIn
            </Link>
        </div>
      </div>
      <div className="nav-background">

        <Link className='nav-link' to = {{pathname: '/about'}}>About</Link>
        <Link className='nav-link' to = {{pathname: '/experience'}}>Experiences</Link>
        <Link className='nav-link' to = {{pathname: '/projects'}}>Projects</Link>
        <Link className='nav-link' to = {{pathname: '/education'}}>Education</Link>
        <input type="text" placeholder="Search.."></input>
        </div>
    </>
  );
}
