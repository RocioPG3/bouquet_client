import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import DenominationsPage from "../pages/DenominationsPage";
import WineriesPage from "../pages/WineriesPage";
import FichaPage from "../pages/FichaPage";
import LoginPage from "../pages/LoginPage";
import BookingPage from "../pages/BookingPage";
import Navbar from "./navbar/Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error";


export default function Router() {
  return (
    <div>
      <div className="pagecontainer">
        <div className="contentwrap">
          <BrowserRouter>

            <Navbar />
            
    
            <Header />

            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/Denominations" element={<DenominationsPage />} />
              <Route path="/Wineries" element={<WineriesPage />} />
              <Route path="/Ficha" element={<FichaPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Booking" element={<BookingPage />} />
              <Route element={<Error />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      <Footer />
    </div>
  );
}
