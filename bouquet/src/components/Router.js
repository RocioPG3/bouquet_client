import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import DenominationsPage from "../pages/DenominationsPage";
import WineriesPage from "../pages/WineriesPage";
import FichaPage from "../pages/FichaPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import BookingPage from "../pages/BookingPage";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import AdminPage from "../pages/AdminPage";
import NewWinerieFormPage from "../pages/NewWinerieFormPage";
import EditWinerieFormPage from "../pages/EditWinerieFormPage";
import ErrorPage from "../pages/ErrorPage";


export default function Router() {
  return (
    <div>
      <div className="pagecontainer">
        <div>
          <BrowserRouter>

            <Navbar />
            
    
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/Denominations" element={<DenominationsPage />} />
              <Route path="/Wineries" element={<WineriesPage />} />
              <Route path="/Ficha/:id" element={<FichaPage />} />
              <Route path="/Admin" element={<AdminPage />} />
              <Route path="/newWinerieForm" element={<NewWinerieFormPage />} />
              <Route path="/editWinerieForm/:id" element={<EditWinerieFormPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Booking/:id" element={<BookingPage />} />
              
              <Route element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      <Footer />
    </div>
  );
}
