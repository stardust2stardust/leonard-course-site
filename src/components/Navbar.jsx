import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsHexagon } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);

  const handleClick = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <nav className="h-auto md:h-2 p2 max-w-6xl mx-auto flex justify-end md:items-center navbar">
      <Link to="/">
        <BsHexagon className={togglerNav ? "hidden" : "text-3xl"} />
      </Link>
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
    </nav>
  );
}
