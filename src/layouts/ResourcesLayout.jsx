import { NavLink, Outlet } from "react-router-dom";

export default function ResourcesLayout() {
  return (
    <div className="resources-layout">
      <h2>Learning Resources</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

      <NavLink to="/resources/books">Books</NavLink>
      <NavLink to="/resources/videos">Videos</NavLink>

      <Outlet />
    </div>
  );
}
