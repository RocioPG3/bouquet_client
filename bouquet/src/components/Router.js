import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import DenominationsPage from "../pages/DenominationsPage";
import WineriesPage from "../pages/WineriesPage";
import BookPage from "../pages/BookPage";
import LoginPage from "../pages/LoginPage";
import Footer from "./Footer";

export default function Router() {
  return (
    <div>

    <div className="pagecontainer">
    <div className="contentwrap">
      <BrowserRouter>
        <nav className="navbar">
         

          <div className="navlinks">
            <NavLink to="/" className="navlink" activeclassname="active">Home</NavLink>
            <NavLink to="/Denominations" className="navlink" activeclassname="active">Denominaciones de Origen</NavLink>
            <NavLink to="/Wineries" className="navlink" activeclassname="active">Nuestras bodegas</NavLink>
            <NavLink to="/Book" className="navlink" activeclassname="active">Book now!</NavLink>
            <NavLink to="/Login" className="navlink" activeclassname="active">Login</NavLink>
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/Denominations" element={<DenominationsPage />} />
          <Route path="/Wineries" element={<WineriesPage />} />
          <Route path="/Book" element={<BookPage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      </div>

      <Footer />
    </div>
  );
}
