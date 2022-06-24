import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import DenominationsPage from "../pages/DenominationsPage";
import WineriesPage from "../pages/WineriesPage";
import BookPage from "../pages/BookPage";
import LoginPage from "../pages/LoginPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
         

          <div className="navlinks">
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/Denominations" activeclassname="active">Denominaciones de Origen</NavLink>
            <NavLink to="/Wineries" activeclassname="active">Nuestras bodegas</NavLink>
            <NavLink to="/Book" activeclassname="active">Book now!</NavLink>
            <NavLink to="/Login" activeclassname="active">Login</NavLink>
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
  );
}
