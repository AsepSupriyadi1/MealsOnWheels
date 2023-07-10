import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
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
import DetailsDelivery from "./pages/PrivatePages/Admin/DetailsDelivery";
import DetailpakageMember from "./pages/PrivatePages/Member/detailspakage";
import FeedbackMember from "./pages/PrivatePages/Member/feedback";
import DonorDashboard from "./pages/PrivatePages/Donor/DonorDashboard";
import DonorForm from "./pages/PrivatePages/Donor/DonorForm";
import DonationDetails from "./pages/PrivatePages/Donor/DonationDetails";
import ManageMeals from "./pages/PrivatePages/Admin/ManageMeals";
import ManageOrders from "./pages/PrivatePages/Admin/ManageOrders";
import BankAddress from "./pages/PrivatePages/Donor/BankAddress";
import { useContext } from "react";
import ErrorPage from "./pages/GlobalPages/ErrorPage";
import { AuthContext } from "./context/auth-context";
import "./pages/PrivatePages/Member/member.css";
import Profile from "./pages/PrivatePages/Member/Profile";
import OurDonor from "./pages/PrivatePages/Donor/OurDonor";
import ManageInactiveUsers from "./pages/PrivatePages/Admin/ManageInactiveUsers";
function App() {
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <>
      <Header activeLinks={"active"} />
      <Routes>
        {/* PUBLIC PAGE */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/member" element={<MemberDashboard />} />
        
        {!isLoggedIn && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </>
        )}

        {/* PRIVATE PATE - SEMENTARA PUBLIC DULU */}

        {isLoggedIn && (
          <>
            {/* DONOR */}
            <Route path="/donor" element={<DonorDashboard />} />
            <Route path="/donate" element={<DonorForm />} />
            <Route path="/our-donor" element={<OurDonor />} />
            <Route path="/donationStatus" element={<DonationDetails />} />
            <Route path="/thanks" element={<BankAddress />} />
            <Route path="/profile" element={<Profile />} />

            {/* DRIVER */}
            {currentUser.userRole === "MEMBER" && (
              <>
                <Route path="/meals" element={<MemberDashboard />} />
              </>
            )}

            {/* PARTNER */}
            {currentUser.userRole === "PARTNER" && (
              <>
                <Route path="/partner" element={<PartnerDashboard />} />
              </>
            )}

            {/* DRIVER */}
            {currentUser.userRole === "PARTNER" && (
              <>
                <Route path="/driver" element={<DriverDashboard />} />
              </>
            )}

            {/* MEMBER */}
            {currentUser.userRole === "MEMBER" && (
              <>
      <Route path="/member" element={<MemberDashboard />} />
                <Route path="/detail-meals" element={<DetailpakageMember />} />
                <Route path="/feedback" element={<FeedbackMember />} />
              </>
            )}

            {/* ADMIN */}
            {currentUser.userRole === "ADMIN" && (
              <>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/all-users" element={<ManageInactiveUsers />} />
                <Route path="/all-meals" element={<ManageMeals />} />
                <Route path="/orders" element={<ManageOrders />} />
                <Route path="/order-details" element={<DetailsDelivery />} />
              </>
            )}
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
