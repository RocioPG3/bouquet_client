import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import DenominationsPage from "../pages/DenominationsPage";
import WineriesPage from "../pages/WineriesPage";
import LoginPage from "../pages/LoginPage";
import Navbar from "./navbar/Navbar";
import MobileNavigation from "./navbar/MobileNavigation";
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
            <MobileNavigation />
    
            <Header />

            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/Denominations" element={<DenominationsPage />} />
              <Route path="/Wineries" element={<WineriesPage />} />
              {/* <Route path="/Book" element={<BookPage />} /> */}
              <Route path="/Login" element={<LoginPage />} />
              <Route element={<Error />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      <Footer />
    </div>
  );
}
