// import React from "react";
import benzeneIcon from "../assets/benzene.svg";
// import menuIcon from "../assets/menu-icon.svg";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsHexagon } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [togglerNav, setTogglerNav] = useState(true);

 
  const handleToggle = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    console.log(togglerNav)
    if (togglerNav) {
      mobileMenu.classList.add('open');
      
    } 
    if (!togglerNav) {
      mobileMenu.classList.add('closed');
      mobileMenu.classList.remove('open')
    }
    setTogglerNav(!togglerNav)
    console.log(togglerNav)
  }

  return (
    <header className="header">
      <div id="">
        <Link to="/" id="brand">
            {/* <BsHexagon /> */}
            <img src={benzeneIcon} alt="" className="benzene-icon"/> 
            <p>Michael S. Leonard, Ph.D.</p>
        </Link>
      </div>
      <nav id="desktop-menu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/research">Research</NavLink></li>
          <li><NavLink to="/publications-and-presentations">Publications</NavLink></li>
          <li><NavLink to="/academics">Academics</NavLink></li>
        </ul>
      </nav>
      <div id="hamburger-icon"  onClick={handleToggle}>
        {togglerNav ? <FaBars /> :<AiOutlineClose /> }
      </div>
      {/* <div id="hamburger-icon" onClick={handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        </div> */}
        <ul id="mobile-menu" className="mobile-menu closed">
          <li><NavLink to="/" onClick={handleToggle}>Home</NavLink></li>
          <li><NavLink to="/resources" onClick={handleToggle}>Resources</NavLink></li>
          <li><NavLink to="/research" onClick={handleToggle}>Research</NavLink></li>
          <li><NavLink to="/publications-and-presentations" onClick={handleToggle}>Publications</NavLink></li>
          <li><NavLink to="/academics" onClick={handleToggle}>Academics</NavLink></li>
        </ul>
      
    </header> 
      );
    }



