import { NavLink, Outlet } from "react-router-dom";

export default function ResourcesLayout() {
  return (
    // <div className="resources-layout">
      <div className="page-content">
      <h1 className="page-title">Learning Resources</h1>
      
      <div className="resource-links-container">
      <NavLink to="/resources/books" className={({ isActive }) =>
        isActive ? "link-to-resources active-navLink" : "link-to-resources"
      }
      >Books</NavLink>
      <NavLink to="/resources/videos" className={({ isActive }) =>
        isActive ? "link-to-resources active-navLink" : "link-to-resources"}>Videos</NavLink>
      </div>
      
     
      



      <Outlet />
    </div>
  );
}
