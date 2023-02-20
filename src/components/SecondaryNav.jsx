import React from "react";
import { NavLink } from "react-router-dom";

export default function SecondaryNav() {
  return (
    <div className="alt-nav-container">
      <div className="alt-nav-section">
        <h3>Learning Resources</h3>
        <div className="alt-nav-link-section">
          <NavLink to="books" className="alt-nav-item">
            Books
          </NavLink>
          <NavLink to="videos" className="alt-nav-item">
            Videos
          </NavLink>
        </div>
      </div>
      <div className="alt-nav-section">
        <h3>Professional Development</h3>
        <div className="alt-nav-link-section">
          <NavLink to="research" className="alt-nav-item">
            Research
          </NavLink>
          <NavLink to="research-group" className="alt-nav-item">
            Research Group
          </NavLink>
          <NavLink to="publications-and-presentations" className="alt-nav-item">
            Publications & Presentations
          </NavLink>
        </div>
      </div>
      <div className="alt-nav-section">
        <h3>Academics</h3>
        <div className="alt-nav-link-section">
          <NavLink to="courses" className="alt-nav-item">
            Courses
          </NavLink>
          <NavLink to="education" className="alt-nav-item">
            Education
          </NavLink>
        </div>
      </div>

      {/* <ul className="secondary-nav">
        <li>Books</li>
        <li>Videos</li>
        <li>Research</li>
        <li>Research Group</li>
        <li>Courses</li>
        <li>Education</li>
      </ul> */}
    </div>
  );
}
