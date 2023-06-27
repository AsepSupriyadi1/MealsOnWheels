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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
