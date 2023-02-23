import { NavLink, Outlet } from "react-router-dom";

export default function ResourcesLayout() {
  return (
    <div className="resources-layout">
      <h2 className="page-title">Learning Resources</h2>
      
      <div className="resource-links-container">
      <NavLink to="/resources/books" className="link-to-resource">Books</NavLink>
      <NavLink to="/resources/videos" className="link-to-resource">Videos</NavLink>
      </div>
      
     
      



      <Outlet />
    </div>
  );
}
