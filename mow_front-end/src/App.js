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
import AdminDashboard from "./pages/PrivatePages/Admin/AdminDashboard";
import DriverDashboard from "./pages/PrivatePages/Driver/DriverDashboard";
import MemberDashboard from "./pages/PrivatePages/Member/MemberDashboard";
import PartnerDashboard from "./pages/PrivatePages/Partner/PartnerDashboard";
import DetailpakageMember from "./pages/PrivatePages/Member/detailspakage";
import FeedbackMember from "./pages/PrivatePages/Member/feedback";
import DonorDashboard from "./pages/PrivatePages/Donor/DonorDashboard";
import DonorForm from "./pages/PrivatePages/Donor/DonorForm";
function App() {
  return (
    <>
      <Router>
        <Header activeLinks={"active"} />
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
          <Route path="/partner" element={<PartnerDashboard />} />


          {/* member */}
          <Route path="/member" element={<MemberDashboard />} />
          <Route path="/detailpakage" element={<DetailpakageMember />} />
          <Route path="/feedback" element={<FeedbackMember />} />
           {/* End member */}
          <Route path="/donor" element={<DonorDashboard />} />
          <Route path="/donate" element={<DonorForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
