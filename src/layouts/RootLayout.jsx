import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
