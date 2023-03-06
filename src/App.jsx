import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Books from "./pages/resources/Books";
import Videos from "./pages/resources/Videos";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Academics from "./pages/Academics";
import PageNotFound from "./pages/PageNotFound";

// books
import Book1 from "./pages/resources/books/Book1";
// import Book2 from "./pages/resources/books/Book2";
import Book3 from "./pages/resources/books/Book3";
import Book4 from "./pages/resources/books/Book4";

//layouts
import RootLayout from "./layouts/RootLayout";
import ResourcesLayout from "./layouts/ResourcesLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="resources" element={<ResourcesLayout />}>
        <Route path="books" element={<Books />} />
        <Route path="videos" element={<Videos />} />
        <Route
          path="books/organic-chemistry"
          element={<Book1 />}
        />
        {/* <Route
          path="books/organic-chemistry-solutions-manual"
          element={<Book2 />}
        /> */}
        <Route
          path="books/intro-organic-reaction-mechanisms"
          element={<Book3 />}
        />
        <Route
          path="books/intermediate-organic-chemistry"
          element={<Book4 />}
        />
      </Route>

      <Route path="research" element={<Research />} />

      <Route path="publications-and-presentations" element={<Publications />} />
      <Route path="academics" element={<Academics />} />
      <Route path="*" element={<PageNotFound /> } />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import Header from "./components/Header";
// import TopSection from "./components/TopSection";
// import ContentSection from "./components/ContentSection";
// import Footer from "./components/Footer";
// import SectionDivider from "./components/SectionDivider";

{
  /* <Header />
<TopSection />
<SectionDivider />
<ContentSection />
<Footer /> */
}
