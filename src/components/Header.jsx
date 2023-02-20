// import React from "react";
// import benzeneIcon from "../assets/benzene.svg";
// import menuIcon from "../assets/menu-icon.svg";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsHexagon } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [togglerNav, setTogglerNav] = useState(false);

  const handleClick = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <header>
        <div className="brand">
            <Link to="/">
                <BsHexagon className="text-3xl" />
            </Link></div>
            <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/resources">Resources</a></li>
      <li><a href="/research">Research</a></li>
      <li><a href="/publications">Publications</a></li>
      <li><a href="/academics">Academics</a></li>
    </ul>
  </nav>
  <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <ul class="mobile-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/books">Books</a></li>
      <li><a href="/videos">Videos</a></li>
      <li><a href="/reserch">Research</a></li>
      <li><a href="/publications">Publications</a></li>
      <li><a href="/academics">Academics</a></li>
    </ul>
  </div>
        

        {/* <nav className="h-auto md:h-2 p2 max-w-6xl mx-auto flex justify-end md:items-center navbar">
      
      <div
        className={
          togglerNav ? "flex flex-col gap-4 md:inline" : "hidden md:inline"
        }
      >
        <NavLink className="nav-link" onClick={handleClick} to="/">
          Home
        </NavLink>

        <NavLink className="nav-link" onClick={handleClick} to="/resources">
          Resources
        </NavLink>
        <NavLink className="nav-link" onClick={handleClick} to="/research">
          Research
        </NavLink>
        <NavLink
          className="nav-link"
          onClick={handleClick}
          to="/publications-and-presentations"
        >
          Publications
        </NavLink>
        <NavLink className="nav-link" onClick={handleClick} to="/academics">
          Academics
        </NavLink>
      </div>
      <button
        className="inline md:hidden self-start nav-link"
        onClick={handleClick}
      >
        {" "}
        {togglerNav ? <AiOutlineClose /> : <FaBars />}
      </button>
    </nav> */}
    </header>
    
  );
}

