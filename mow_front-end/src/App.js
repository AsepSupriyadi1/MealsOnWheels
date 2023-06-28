import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.css";
import "./App.css";
import "./assets/css/boostrap10.css";
import HomePage from "./pages/GlobalPages/HomePage";
import AboutPage from "./pages/GlobalPages/AboutPage";
import ContactPage from "./pages/GlobalPages/ContactPage";
import LoginPage from "./pages/GlobalPages/LoginPage";
import RegisterPage from "./pages/GlobalPages/RegisterPage";
import TermsPage from "./pages/GlobalPages/TermsPage";
import Header from "./components/UtilComponent/Header";
import Footer from "./components/UtilComponent/Footer";
import AdminDashboard from "./pages/GlobalPages/AdminDashboard";
import DriverDashboard from "./pages/GlobalPages/DriverDashboard";
import MemberDashboard from "./pages/GlobalPages/MemberDashboard";
import PartnerDashboard from "./pages/GlobalPages/PartnerDashboard";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* PUBLIC PAGE */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* PRIVATE PATE - SEMENTARA PUBLIC DULU */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/member" element={<MemberDashboard />} />
          <Route path="/partner" element={<PartnerDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
