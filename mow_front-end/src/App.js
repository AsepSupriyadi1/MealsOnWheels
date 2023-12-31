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
import DonorForm from "./pages/PrivatePages/Donor/DonorForm";
import ManageMeals from "./pages/PrivatePages/Admin/ManageMeals";
import ManageOrders from "./pages/PrivatePages/Admin/ManageOrders";
import { useContext } from "react";
import ErrorPage from "./pages/GlobalPages/ErrorPage";
import { AuthContext } from "./context/auth-context";
import "./pages/PrivatePages/Member/member.css";
import ManageInactiveUsers from "./pages/PrivatePages/Admin/ManageInactiveUsers";
import OrderHistory from "./pages/PrivatePages/Member/OrderHistory";
import Profile from "./pages/PrivatePages/Profile";
import VolunteerDashboard from "./pages/PrivatePages/Volunteer/VolunteerDashboard";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonorPage from "./pages/PrivatePages/Donor/DonorPage";
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
            <Route path="/profile" element={<Profile />} />

            {/* DONOR */}
            {currentUser.userRole === "DONOR" && (
              <>
                <Route path="/donate" element={<DonorPage />} />
              </>
            )}

            {/* DRIVER */}
            {currentUser.userRole === "MEMBER" && (
              <>
                <Route path="/meals" element={<MemberDashboard />} />
                <Route path="/history" element={<OrderHistory />} />
              </>
            )}

            {/* PARTNER */}
            {currentUser.userRole === "PARTNER" && (
              <>
                <Route path="/partner" element={<PartnerDashboard />} />
              </>
            )}

            {/* DRIVER */}
            {currentUser.userRole === "DRIVER" && (
              <>
                <Route path="/driver" element={<DriverDashboard />} />
              </>
            )}

            {/* MEMBER */}
            {currentUser.userRole === "MEMBER" && (
              <>
                <Route path="/member" element={<MemberDashboard />} />
                <Route path="/detail-meals/:id" element={<DetailpakageMember />} />
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

            {/* VOLUNTEER */}
            {currentUser.userRole === "VOLUNTEER" && (
              <>
                <Route path="/volunteer" element={<VolunteerDashboard />} />
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
